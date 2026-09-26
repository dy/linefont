/** Max value a single linefont char can encode (higher codepoints render blank). */
export declare const MAX: 127

/** Char for a single value 0–127 (clamped & rounded): U+0100–U+017F. */
export declare function char(value: number): string

/**
 * Char for the line segment from level a (the previous point) to level b (0–127 each,
 * clamped & rounded): U+F0000 | a << 8 | b – one precomposed glyph, no layout rules.
 * One code point, two UTF-16 units.
 */
export declare function segment(a: number, b: number): string

/**
 * Line through values 0–127: the first value's char, then one segment per point.
 * Draws what the value chars draw, laid out like plain text.
 */
export declare function segments(values: ArrayLike<number>): string
export declare function segments(...values: number[]): string

/** Linefont string for values 0–127 (each clamped & rounded). */
declare function linefont(values: ArrayLike<number>): string
declare function linefont(...values: number[]): string
export default linefont
