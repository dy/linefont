/**
 * @module linefont
 * Values → linefont string: 0–127 map to chars U+0100–U+017F.
 * Level pairs → one char per line segment: U+F0000 | a << 8 | b.
 */

/** Max value a single char can encode (higher codepoints render blank). */
export const MAX = 127

const BASE = 0x0100, RANGE = 0xF0000, CHUNK = 8192

const clamp = v => Math.round(Math.min(Math.max(v || 0, 0), MAX))

/**
 * Char for a single value.
 * @param {number} value 0–127, clamped & rounded
 * @returns {string} char in U+0100–U+017F
 */
export const char = value => String.fromCharCode(BASE + clamp(value))

/**
 * Char for the line segment from level a (the previous point) to level b:
 * U+F0000 | a << 8 | b, one precomposed glyph drawn without layout rules.
 * @param {number} a 0–127, clamped & rounded
 * @param {number} b 0–127, clamped & rounded
 * @returns {string} one code point: two UTF-16 units
 */
export const segment = (a, b) => String.fromCodePoint(RANGE | clamp(a) << 8 | clamp(b))

const list = values => values.length === 1 && typeof values[0] === 'object' && values[0] !== null ? values[0] : values

/**
 * Line through values as the first value's char, then one segment per point: draws what
 * the value chars draw, one glyph per point, laid out like plain text – no layout rules.
 * @param {...number | ArrayLike<number>} values numbers 0–127, or a single (typed) array of them
 * @returns {string}
 */
export const segments = (...values) => {
  const v = list(values)
  if (!v.length) return ''
  let out = char(v[0]), prev = clamp(v[0])
  for (let i = 1, n = v.length; i < n; i += CHUNK) {
    const end = Math.min(i + CHUNK, n), codes = new Array(end - i)
    for (let j = i; j < end; j++) {
      const cur = clamp(v[j])
      codes[j - i] = RANGE | prev << 8 | cur
      prev = cur
    }
    out += String.fromCodePoint(...codes)
  }
  return out
}

/**
 * Linefont string for values.
 * @param {...number | ArrayLike<number>} values numbers 0–127, or a single (typed) array of them
 * @returns {string}
 */
export default (...values) => {
  const v = list(values)
  let out = ''
  for (let i = 0, n = v.length; i < n; i += CHUNK) {
    const end = Math.min(i + CHUNK, n), codes = new Array(end - i)
    for (let j = i; j < end; j++) codes[j - i] = BASE + clamp(v[j])
    out += String.fromCharCode(...codes)
  }
  return out
}
