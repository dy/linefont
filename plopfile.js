const values100 = Array.from({length: 129}).map((v,i)=>({value: i, code: [i+0x0100]}))
const MAX_VALUE = 100

const UPM = 2048
// Note: values in terms of UPM, not values
const WIDTH = [10,1000]
const WEIGHT = [10,1000]

module.exports = function (plop) {
  const values = values100.map(({value, code}) => ({value, code}))
  const masters = [
    {values, width: WIDTH[0], weight: WEIGHT[0]},
    {values, width: WIDTH[1], weight: WEIGHT[0]},
    {values, width: WIDTH[0], weight: WEIGHT[1]},
    {values, width: WIDTH[1], weight: WEIGHT[1]},
  ]

  plop.setHelper('uni', function (arg) {
    if (Array.isArray(arg)) return arg.map(arg => `u${hex(parseInt(arg))}`).join(',')
    return `u${hex(parseInt(arg))}`
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
      data: { width: width, values, WIDTH, WEIGHT, UPM, MAX_VALUE }
    },
    // data point component
    {
      // verbose: false,
      force: true,
      type: 'add',
      path: `${destination}/glyphs/point.glif`,
      template: point({width, weight})
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

const point = ({width, weight}) => {
  const R = weight * .5, c = .55

  return `<?xml version="1.0" encoding="UTF-8"?>
<glyph name="point" format="2">
  <advance width="${ width }"/>
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

const sample = ({value, width, weight, code}) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<glyph name="_" format="2">
  <advance width="${width}"/>
  ${code.map(code=>`<unicode hex="${hex(code)}"/>`).join('')}
  <outline>
    <component base="point" yOffset="${(UPM * value / MAX_VALUE).toFixed(0)}" xOffset="${width*.5}" />
  </outline>
</glyph>`
}

const line = ({value, width, weight}) => {
  const R = weight*.5, valueY = UPM * value / MAX_VALUE
  return `<?xml version="1.0" encoding="UTF-8"?>
<glyph name="to${value}" format="2">
  <advance width="${ width }"/>
  <outline>
    <component base="point" yOffset="${valueY.toFixed(0)}" xOffset="${width*.5}"/>
    <contour>
      <point x="${ -width * .5 }" y="${ R }" type="line"/>
      <point x="${ width * .5 }" y="${ (valueY + R).toFixed(0) }" type="line"/>
      <point x="${ width * .5 }" y="${ (valueY - R).toFixed(0) }" type="line"/>
      <point x="${ -width * .5 }" y="${ -R }" type="line"/>
    </contour>
  </outline>
</glyph>
`
}

const hex = (v) => v.toString(16).toUpperCase().padStart(4,0)
