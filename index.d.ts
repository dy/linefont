/** Max value a single linefont char can encode (higher codepoints render blank). */
export declare const MAX: 127

/** Char for a single value 0–127 (clamped & rounded): U+0100–U+017F. */
export declare function char(value: number): string

/** Linefont string for values 0–127 (each clamped & rounded). */
declare function linefont(values: ArrayLike<number>): string
declare function linefont(...values: number[]): string
export default linefont
