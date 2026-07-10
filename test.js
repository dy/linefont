import test from 'node:test'
import assert from 'node:assert/strict'
import lf, { char, MAX } from './index.js'

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
