# linefont [![build](https://github.com/dy/linefont/actions/workflows/build.yaml/badge.svg)](https://github.com/dy/linefont/actions/workflows/build.yaml)

Typeface for rendering small/medium-scale line charts (eg. time series).

<img width="151" alt="image" src="https://github.com/dy/linefont/assets/300067/32827572-d01b-489e-b949-e1454640c3c9">

[**Demo**](https://dy.github.io/linefont/scripts)&nbsp;&nbsp;•&nbsp;&nbsp;[**Google fonts**](https://fonts.google.com/specimen/Linefont/tester?query=linefont)&nbsp;&nbsp;•&nbsp;&nbsp;[**V-fonts**](https://v-fonts.com/fonts/linefont)&nbsp;&nbsp;•&nbsp;&nbsp;[**Test**](https://dy.github.io/linefont/out/fontbakery/fontbakery-report)


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
* <kbd>U+0100-017F</kbd> for 0-127 values with step 1 (extra 27 values).


## Variable Axes

Tag | Range | Meaning
---|---|---
`wght` | _1_-_1000_ | Line thickness (quarter upms, linear).
`wdth` | _25_-_200_ | Width of the font (ie. zoom of the signal).


## Features

* Ranges, values and weight is compatible with [wavefont](https://github.com/dy/wavefont), so fonts can be swapped at `wdth=100`, preserving visual coherency.
* Visible charcodes fall under _marking characters_ unicode category, ie. recognized as word by regexp and can be selected with <kbd>Ctrl</kbd> + <kbd>→</kbd> or double click. Eg. segments separated by ` ` or `-` are selectable by double click.
* Characters outside of visible ranges (but within Core Latin) are clipped to _0_, eg. ` `, `\t` etc.
* Caret span is -20..120, so line-height = 1.4 is minimal non-overlapping selection.

## npm package

_Linefont_ npm package contains the font and a js function that produces font string from values.

```js
import lf from 'linefont'

// get characters for values from 0..127 range
lf(0, 1, 50, 99, 127, ...) // ĀāĲţŤ...
```

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
