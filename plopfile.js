const dedent = require('dedent')
const package = require('./package.json')

const UPM = 1000

// Core latin chars are 0
// All other chars are blank via last-resort method, see cmap https://github.com/adobe-fonts/adobe-blank-vf
const SPACE = [0x09,0x0A,0x0B,0x0C,0x0D,0x20,0x21,0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,0x40,0x5B,0x5C,0x5D,0x5E,0x5F,0x60,0x7B,0x7C,0x7D,0x7E,0x85,0xA0,0xA1,0xA2,0xA3,0xA5,0xA7,0xA8,0xA9,0xAA,0xAB,0xAE,0xAF,0xB0,0xB4,0xB6,0xB7,0xB8,0xBA,0xBB,0xBF,0xC0,0xC1,0xC2,0xC3,0xC4,0xC5,0xC6,0xC7,0xC8,0xC9,0xCA,0xCB,0xCC,0xCD,0xCE,0xCF,0xD0,0xD1,0xD2,0xD3,0xD4,0xD5,0xD6,0xD7,0xD8,0xD9,0xDA,0xDB,0xDC,0xDD,0xDE,0xDF,0xE0,0xE1,0xE2,0xE3,0xE4,0xE5,0xE6,0xE7,0xE8,0xE9,0xEA,0xEB,0xEC,0xED,0xEE,0xEF,0xF0,0xF1,0xF2,0xF3,0xF4,0xF5,0xF6,0xF7,0xF8,0xF9,0xFA,0xFB,0xFC,0xFD,0xFE,0xFF,0x180,0x181,0x182,0x183,0x184,0x185,0x186,0x187,0x188,0x218,0x219,0x21A,0x21B,0x237,0x2C6,0x2C7,0x2D8,0x2D9,0x2DA,0x2DB,0x2DC,0x2DD,0x300,0x301,0x302,0x303,0x304,0x305,0x306,0x307,0x308,0x309,0x30A,0x30B,0x312,0x326,0x327,0x328,0x1680,0x180E,0x1E80,0x1E81,0x1E82,0x1E83,0x1E84,0x1E85,0x1E9E,0x1EF2,0x1EF3,0x2000,0x2001,0x2002,0x2003,0x2004,0x2005,0x2006,0x2007,0x2008,0x2009,0x200A,0x200B,0x200C,0x200D,0x200E,0x200F,0x2010,0x2011,0x2012,0x2013,0x2014,0x2018,0x2019,0x201A,0x201C,0x201D,0x201E,0x2022,0x2026,0x2028,0x2029,0x202F,0x2039,0x203A,0x205F,0x2060,0x2061,0x2062,0x20AC,0x2122,0x2212,0x3000,0x030C,0xFEFF]

// axes definition, per https://github.com/dy/wavefont/issues/42
const AXES = {
  // NOTE: width comes first to be compat with gftools
  width: {name: 'Width', tag: 'wdth', min: 25, max: 100, default: 100},
  weight: {name: 'Weight', tag: 'wght', min: 5, max: 140, mid: 54, default: 5,},
}

const FONT = {
  version: (([major, minor]) => ({major, minor}))(package.version.split('.')),
  name: 'Linefont',
  min: 0,
  max: 100,
  ascender: 120,
  descender: 20,
  alias: {
  },
  values: Array.from({length: 128}).map((v,i)=>(0x100 + i))
}

// add alias to wavefont100
function alias(value, char) {
  (FONT.alias[value]||=[]).push(char.charCodeAt(0))
}

// 0-9
'0123456789'.split('').map((c,i) => alias(i*10||1, c))

// a-zA-Z
alias(1,'a'), alias(2,'b'), alias(4,'c'),
alias(6,'d')
alias(8,'e'), alias(10,'f'), alias(12,'g'), alias(14,'h'), alias(16,'i'), alias(18,'j'), alias(20,'k'), alias(22,'l'), alias(24,'m'), alias(26,'n'), alias(28,'o'), alias(30,'p'), alias(32,'q'), alias(34,'r'),
alias(36,'s')
, alias(38,'t')
alias(40,'u')
alias(42,'v'), alias(44,'w'), alias(46,'x')
alias(48,'y'), alias(50,'z')
alias(52,'A'), alias(54,'B'), alias(56,'C'), alias(58,'D'), alias(60,'E'), alias(62,'F'), alias(64,'G'), alias(66,'H'), alias(68,'I'), alias(70,'J'), alias(72,'K'), alias(74,'L'), alias(76,'M'), alias(78,'N'), alias(80,'O'), alias(82,'P'), alias(84,'Q'), alias(86,'R'), alias(88,'S'), alias(90,'T'), alias(92,'U'), alias(94,'V'), alias(96,'W'), alias(98,'X'), alias(99,'Y'), alias(100,'Z')


// create masters
const MASTERS = {
  'min,min': { weight: AXES.weight.min, width: AXES.width.min},
  'min,max': { weight: AXES.weight.min, width: AXES.width.max},
  'max,min': { weight: AXES.weight.max, width: AXES.width.min},
  'max,max': { weight: AXES.weight.max, width: AXES.width.max},
}

module.exports = function (plop) {
  // convert value to units-per-em (0-100 → 0-upm)
  const upm = (v) => (UPM * v / FONT.max)
  // int to hex
  const hex = (v) => v.toString(16).toUpperCase()
  // int to u0000 form
  const uni = (v) => (Array.isArray(v) ? v : [v]).map(v => `u${hex(parseInt(v)).padStart(4,0)}`).join(',')

  // uni 1 → uni0001
  plop.setHelper('uni', uni);

  // upm 12 → 120 (value to upm)
  plop.setHelper('upm', upm);

  // wght: 5 -> 100, 140 -> 700
  plop.setHelper('wght', v => (
    v < AXES.weight.mid ?
      300 * (v - AXES.weight.min) / (AXES.weight.mid - AXES.weight.min) + 100 :
      300 * (v - AXES.weight.max) / (AXES.weight.max - AXES.weight.mid) + 400
    )
  );

  // hex 12 -> C
  plop.setHelper('hex', hex);

  // sub 1 2 → -1
  plop.setHelper('sub', (a,b) => a-b);

  // half 1 → .5
  plop.setHelper('half', (a) => a*.5);

  // int 12.3 → 12
  plop.setHelper('int', v => v.toFixed(0));

  // width -> Width
  plop.setHelper('axisName', v => AXES[v].name);

  console.log(SPACE)
	plop.setGenerator('build-ufo', {
    description: 'Build master values',
    prompts: [],
		actions: () => [
      // populate skeleton
      {
        type: 'addMany',
        force: true,
        verbose: false,
        destination: `sources/`,
        base: '_sources',
        templateFiles: '_sources/*',
        data: { FONT, AXES, MASTERS, SPACE }
      },
      // populate masters
        ...Object.keys(MASTERS).map(name => master({...MASTERS[name], name})).flat()
    ].flat()
	});
};


// create actions to build one master file
function master({width, weight, name}){
  console.log('Building master ', weight, width)
  const destination = `sources/Linefont[${name}].ufo`

  return [
    // populate ufo skeleton
    {
      type: 'addMany',
      force: true,
      verbose: false,
      destination: `${destination}/`,
      base: '_sources/master.ufo',
      templateFiles: '_sources/master.ufo/**/*',
      data: { width, weight, AXES, FONT, SPACE }
    },
    // point glyph or component (unlike join, it is centered)
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
    ...FONT.values.map((code, value) => ({
      // verbose: false,
      force: true,
      type: 'add',
      path: `${destination}/glyphs/${value}.glif`,
      template: sample({value, width, code, alias: FONT.alias[value]})
    })),
    // all possible tangent values (lines) -100..100
    ...FONT.values.map((code, value) => [
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

  return dedent`<?xml version="1.0" encoding="UTF-8"?>
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
// point with line-specific advance/shift context (for subs)
const join = ({width, weight}) => {
  return dedent`<?xml version="1.0" encoding="UTF-8"?>
    <glyph name="point" format="2">
      <advance width="${ 0 }"/>
      <outline><component base="point" xOffset="${-width*.5}" yOffset="${0}"/></outline>
    </glyph>
  `
}

// single value. glyps don't necessarily have content - it's done via subs
const sample = ({value, width, weight, code, alias}) => {
  return dedent`<?xml version="1.0" encoding="UTF-8"?>
    <glyph name="_" format="2">
      <advance width="${ width }"/>
      <unicode hex="${ hex(code) }"/>
      ${alias?.map(code => `<unicode hex="${ hex(code) }"/>`).join('') || ``}
      <outline>
      <component base="point" xOffset="${ width * .5 }" yOffset="${ (UPM*value/FONT.max).toFixed(0) }"/>
      </outline>
    </glyph>
  `
}

const line = ({value, width, weight}) => {
  const R = weight*.5, valueY = UPM * value / FONT.max

  // the normal has unfortunately poor interpolation on middle values
  const angle = Math.atan2(valueY,width);
  const xShift = Math.sin(angle) * R, yShift = Math.cos(angle) * R;

  return dedent`<?xml version="1.0" encoding="UTF-8"?>
    <glyph name="to${value}" format="2">
      <advance width="${ width }"/>
      <outline>
        <!--<component base="point" xOffset="${-width*.5}" yOffset="${0}"/>-->
        <!--<component base="point" xOffset="${width*.5}" yOffset="${valueY}"/>-->
        <contour>
          <point x="${ (-width*.5 - xShift) }" y="${ yShift }" type="line"/>
          <point x="${ (width*.5 - xShift) }" y="${ (valueY + yShift) }" type="line"/>
          <point x="${ (width*.5 + xShift) }" y="${ (valueY - yShift) }" type="line"/>
          <point x="${ (-width*.5 + xShift) }" y="${ -yShift }" type="line"/>
        </contour>
      </outline>
    </glyph>
  `
}

const hex = (v) => v.toString(16).toUpperCase().padStart(4,0)
