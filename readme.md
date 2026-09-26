# linefont [![build](https://github.com/dy/linefont/actions/workflows/build.yaml/badge.svg)](https://github.com/dy/linefont/actions/workflows/build.yaml)

Typeface for rendering small/medium-scale line charts (eg. time series).

<img width="151" alt="image" src="https://github.com/dy/linefont/assets/300067/32827572-d01b-489e-b949-e1454640c3c9">

[**Demo**](https://dy.github.io/linefont/scripts)&nbsp;&nbsp;•&nbsp;&nbsp;[**Google fonts**](https://fonts.google.com/specimen/Linefont/)&nbsp;&nbsp;•&nbsp;&nbsp;[**V-fonts**](https://v-fonts.com/fonts/linefont)&nbsp;&nbsp;•&nbsp;&nbsp;[**Test**](https://dy.github.io/linefont/out/fontbakery/fontbakery-report)


## Usage

Put [Linefont[wdth,wght].woff2](./fonts/variable/Linefont[wdth,wght].woff2) into your project directory and use this code:

```html
<style>
@font-face {
	font-family: linefont;
	font-display: block;
	src: url(./Linefont[wdth,wght].woff2) format('woff2');
}
.linefont {
	--wght: 200;
	--wdth: 50;
	font-family: linefont;
	font-variation-settings: 'wght' var(--wght), 'wdth' var(--wdth);
	line-height: 1.4; /* match selection, optional */
}
</style>

<!-- Set values manually -->
<textarea id="linefont" class="linefont" cols="100">
abcdefghijklmnopqrstuvwwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
</textarea>

<script>
// Set values programmatically (more precise)
linefont.textContent = Array.from({length: 127}, (_,i) => String.fromCharCode(0x100 + i)).join('')
</script>
```

## Ranges

Linefont values span from 0 to 100, assigned to different characters:

* <kbd>0-9</kbd> chars for simplified manual input with step 10 (height = number×10).
* <kbd>a-zA-Z</kbd> for manual input with step 2, softened at edges <kbd>a</kbd> and <kbd>Z</kbd> (height = number of letter).
* <kbd>U+0100-017F</kbd> for 0-127 values with step 1 (extra 27 values). <kbd>U+0180</kbd> renders as max (off-by-one clamp guard), higher codepoints render blank.
* <kbd>U+F0000-F7F7F</kbd> for line segments by level pair: one char per point, the segment from the previous level to its own, see [segments](#segments).


## Variable Axes

Tag | Range | Meaning
---|---|---
`wght` | _4_-_1000_ | Line thickness (quarter upms, linear), default _100_.
`wdth` | _25_-_200_ | Width of the font (ie. zoom of the signal), default _100_.


## Features

* Ranges, values and weight is compatible with [wavefont](https://github.com/dy/wavefont), so fonts can be swapped at `wdth=100`, preserving visual coherency.
* Visible charcodes fall under _marking characters_ unicode category, ie. recognized as word by regexp and can be selected with <kbd>Ctrl</kbd> + <kbd>→</kbd> or double click. Eg. segments separated by ` ` or `-` are selectable by double click.
* Characters outside of visible ranges (but within Core Latin) are clipped to _0_, eg. ` `, `\t` etc.
* Caret span is -30..130 (covers full ink incl. value 127), so line-height = 1.6 is minimal non-overlapping selection.

## Segments

Char <kbd>U+F0000 | a << 8 | b</kbd> is the line segment from level `a` (previous point) to level `b` (_0_-_127_ each), with the joint at `b`: what value chars draw for `b` after `a`, as one precomposed glyph. Values need layout rules that look at every previous value; segments need none, so text lays out like plain text: about 10× faster in Safari (and every iOS browser) and 6× in Chrome.

* A line is the first value's char, then a segment per point: `segments()` below.
* Chars are outside the BMP: 2 UTF-16 units each in JS strings.
* Static OTF fonts carry values only. Web fonts drop glyph names.

## npm package

_Linefont_ npm package contains the font and a js function that produces font string from values.

```js
import lf, { char, segment, segments } from 'linefont'

// characters for values from 0..127 range (clamped & rounded)
lf(0, 1, 50, 99, 127) // 'ĀāĲţſ'

// arrays or typed arrays of any length
lf(new Float32Array([0, 64, 127])) // 'Āŀſ'

// the same line as the first value, then one segment char per point
segments(0, 64, 127) // char(0) + segment(0, 64) + segment(64, 127)
segments(new Float32Array([0, 64, 127]))
```

Types included.

## Building

`make build`

* [Tests](https://dy.github.io/linefont/out/fontbakery/fontbakery-report)
* [Glyphs](https://dy.github.io/linefont/out/proof/glyphs)
* [Text](https://dy.github.io/linefont/out/proof/text)
* [Waterfall](https://dy.github.io/linefont/out/proof/waterfall)

## Troubleshooting

* The font requires ligatures (`rlig`) enabled for it to be properly rendered. Some environments (eg. MS Word) may not have it enabled by default, in this case enable "All Ligatures" in advance font parameters.

## See also

* [wavefont](https://github.com/dy/wavefont) − font-face for rendering waveforms.

<p align="center"><a href="https://github.com/krishnized/license/">🕉</a><p>
