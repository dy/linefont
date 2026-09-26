import test from 'node:test'
import assert from 'node:assert/strict'
import lf, { char, segment, segments, MAX } from './index.js'

test('values → chars', () => {
  assert.equal(lf(0, 1, 50, 99, 127), 'ĀāĲţſ')
  assert.equal(lf([0, 1, 50, 99, 127]), lf(0, 1, 50, 99, 127))
  assert.equal(lf(new Uint8Array([0, 127])), 'Āſ')
  assert.equal(lf(), '')
})

test('clamp & round', () => {
  assert.equal(lf(-5), 'Ā')
  assert.equal(lf(128), 'ſ') // 0x181+ render blank — clamp to MAX
  assert.equal(lf(1e6), 'ſ')
  assert.equal(lf(63.6), 'ŀ')
  assert.equal(lf(NaN), 'Ā')
})

test('large input (beyond args limit)', () => {
  const n = 1 << 20
  const s = lf(new Float32Array(n).fill(100))
  assert.equal(s.length, n)
  assert.equal(s.charCodeAt(0), 0x0100 + 100)
  assert.equal(s.charCodeAt(n - 1), 0x0100 + 100)
})

test('char', () => {
  assert.equal(char(0), 'Ā')
  assert.equal(char(MAX), 'ſ')
})

test('segment: one code point per level pair', () => {
  assert.equal(segment(0, 0).codePointAt(0), 0xF0000)
  assert.equal(segment(10, 20).codePointAt(0), 0xF0000 | 10 << 8 | 20)
  assert.equal(segment(20, 10).codePointAt(0), 0xF0000 | 20 << 8 | 10) // direction matters
  assert.equal(segment(-5, 200), segment(0, MAX)) // clamps
  assert.equal(segment(9.6, 10.4), segment(10, 10)) // rounds
  assert.equal(segment(3, 4).length, 2) // outside the BMP: two UTF-16 units
})

test('segments: first value, then a segment per point', () => {
  assert.equal(segments(0, 64, 127), char(0) + segment(0, 64) + segment(64, 127))
  assert.equal(segments([5, 6]), segments(5, 6))
  assert.equal(segments(new Uint8Array([7])), char(7))
  assert.equal(segments(), '')
  const n = 1 << 18, s = segments(new Float32Array(n).fill(90))
  assert.equal(s.length, 1 + 2 * (n - 1))
  assert.equal(s.codePointAt(s.length - 2), 0xF0000 | 90 << 8 | 90)
})
