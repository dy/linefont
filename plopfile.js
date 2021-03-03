const values100 = Array.from({length: 127}).map((v,i)=>({value: i, code: [i+0x0100]}))
const MAX_VALUE = 100

const UPM = 2048
// Note: values in terms of UPM, not values
const WIDTH = [50,500]
const WEIGHT = [20,500]

module.exports = function (plop) {
  const values = values100.map(({value, code}) => ({value, code, upmValue:(value*UPM/MAX_VALUE).toFixed(0)}))
  const masters = [
    {values, width: WIDTH[0], weight: WEIGHT[0]},
    {values, width: WIDTH[1], weight: WEIGHT[0]},
    {values, width: WIDTH[0], weight: WEIGHT[1]},
    // NOTE: extra master is needed to mitigate tangent linear interpolation artifact
    {values, width: 200, weight: WEIGHT[1]},
    {values, width: WIDTH[1], weight: WEIGHT[1]},
  ]

  // 1 → uni0001
  plop.setHelper('uni', function (arg) {
    if (Array.isArray(arg)) return arg.map(arg => `u${hex(parseInt(arg))}`).join(',')
    return `u${hex(parseInt(arg))}`
	});

  // sub 1 2 → -1
  plop.setHelper('sub', function (a,b) {
    return a-b
	});

  // half 1 → .5
  plop.setHelper('half', function (a) {
    return a*.5
	});

	plop.setGenerator('build-ufo', {
    description: 'Build master values',
    prompts: [],
		actions: [
      // populate skeleton
      {
        type: 'addMany',
        force: true,
        verbose: false,
        destination: `linefont/`,
        base: '_template',
        templateFiles: '_template/*',
        data: { values, masters, WIDTH, WEIGHT, UPM, MAX_VALUE }
      },
      // populate masters
      ...masters.map(master)
    ].flat()
	});
};


// create actions to build one master file
function master({values, width, weight}){
  console.log('Building master ', width, weight)
  const destination = `linefont/${weight}_${width}.ufo`
  return [
    // populate ufo skeleton
    {
      type: 'addMany',
      force: true,
      verbose: false,
      destination: `${destination}/`,
      base: '_template/master.ufo',
      templateFiles: '_template/master.ufo/**/*',
      data: { width, values, WIDTH, WEIGHT, UPM, MAX_VALUE }
    },
    // data point component (unlike join, it is centered)
    {
      // verbose: false,
      force: true,
      type: 'add',
      path: `${destination}/glyphs/point.glif`,
      template: point({width, weight})
    },
    {
      // verbose: false,
      force: true,
      type: 'add',
      path: `${destination}/glyphs/join.glif`,
      template: join({width, weight})
    },
    // value data points
    ...values.map(({code, value}) => ({
      // verbose: false,
      force: true,
      type: 'add',
      path: `${destination}/glyphs/${value}.glif`,
      template: sample({value, width, code})
    })),
    // all possible tangent values -100..100
    ...values.map(({value, code}) => [
      {
        // verbose: false,
        force: true,
        type: 'add',
        path: `${destination}/glyphs/to${value}.glif`,
        template: line({value, width, code, weight})
      },
      {
        // verbose: false,
        force: true,
        type: 'add',
        path: `${destination}/glyphs/to-${value}.glif`,
        template: line({value: -value, width, code, weight})
      }
    ]).flat()
  ]
}

// data point, used for joins
const point = ({width, weight}) => {
  const R = weight * .5, c = .55

  return `<?xml version="1.0" encoding="UTF-8"?>
<glyph name="point" format="2">
  <outline>
    <contour>
      <point x="${ -R }" y="${ -c*R }"/>
      <point x="${ -R }" y="${ 0 }" type="curve" smooth="yes"/>
      <point x="${ -R }" y="${ +c*R }"/>
      <point x="${ -c*R }" y="${ R }"/>
      <point x="${ 0 }" y="${ R }" type="curve" smooth="yes"/>
      <point x="${ +c*R }" y="${ R }"/>
      <point x="${ R }" y="${ +c*R }"/>
      <point x="${ R }" y="${ 0 }" type="curve" smooth="yes"/>
      <point x="${ R }" y="${ -c*R }"/>
      <point x="${ +c*R }" y="${ -R }"/>
      <point x="${ 0 }" y="${ -R }" type="curve" smooth="yes"/>
      <point x="${ -c*R }" y="${ -R }"/>
    </contour>
  </outline>
</glyph>
`
}
// point with line-specific advance/shift context
const join = ({width,weight}) => {
return `<?xml version="1.0" encoding="UTF-8"?>
<glyph name="point" format="2">
  <advance width="${ 0 }"/>
  <outline><component base="point" xOffset="${-width*.5}" yOffset="${0}"/></outline>
</glyph>`
}

// glyps are not necessary to have content - it's done via subs
const sample = ({value, width, weight, code}) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<glyph name="_" format="2">
  <advance width="${ width }"/>
  ${code.map(code=>`<unicode hex="${hex(code)}"/>`).join('')}
  <outline>
  <component base="point" xOffset="${ width * .5 }" yOffset="${ (UPM*value/MAX_VALUE).toFixed(0) }"/>
  </outline>
</glyph>`
}

const line = ({value, width, weight}) => {
  const R = weight*.5, valueY = UPM * value / MAX_VALUE

  // the normal has unfortunately poor interpolation on middle values
  const angle = Math.atan2(valueY,width);
  const xShift = Math.sin(angle) * R, yShift = Math.cos(angle) * R;

  return `<?xml version="1.0" encoding="UTF-8"?>
<glyph name="to${value}" format="2">
  <advance width="${ width }"/>
  <outline>
    <contour>
      <point x="${ (-width*.5 - xShift).toFixed(0) }" y="${ yShift.toFixed(0) }" type="line"/>
      <point x="${ (width*.5 - xShift).toFixed(0) }" y="${ (valueY + yShift).toFixed(0) }" type="line"/>
      <point x="${ (width*.5 + xShift).toFixed(0) }" y="${ (valueY - yShift).toFixed(0) }" type="line"/>
      <point x="${ (-width*.5 + xShift).toFixed(0) }" y="${ -yShift.toFixed(0) }" type="line"/>
    </contour>
  </outline>
</glyph>
`
}

const hex = (v) => v.toString(16).toUpperCase().padStart(4,0)
