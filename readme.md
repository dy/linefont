# linefont ∿

Typeface for rendering line chart data.

[**Demo**](https://dy.github.io/linefont/scripts)&nbsp;&nbsp;•&nbsp;&nbsp;[**V-fonts**](https://v-fonts.com/fonts/linefont)&nbsp;&nbsp;•&nbsp;&nbsp;[**Test**](https://dy.github.io/linefont/out/fontbakery/fontbakery-report)


## Usage

Place [linefont.woff2_](./fonts/variable/Wavefont[ROND,YELA,wght].woff2) into your project directory and use this code:

```html
<style>
@font-face {
	font-family: linefont;
	font-display: block;
	src: url(./linefont.woff2) format('woff2');
}
.linefont {
	--wght: 10;
  --wdth: 50;
	font-family: linefont;
	font-variation-settings: 'wght' var(--wght), 'wdth' var(--wdth);
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

* <kbd>0-9</kbd> chars for simplified manual input with step 10 (bar height = number).
* <kbd>a-zA-Z</kbd> for manual input with step 2, softened at edges <kbd>a</kbd> and <kbd>Z</kbd> (bar height = number of letter).
* <kbd>U+0100-017F</kbd> for 0-127 values with step 1 (extra 27 values).


## Variable Axes

Tag | Range | Default | Meaning
---|---|---|---
`wght` | _1_-_400_ | 400 | Bar width, or boldness (in upm).
`wdth` | _50_-_500_ | 500 | Width of the font (zoom of the signal).

To adjust axes via CSS:

```css
.linefont {
  font-variation-settings: 'wght' var(--wght, 50), 'wdth' var(--wdth, 200);
}
```

## Features

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

## See also

* [wavefont](https://github.com/dy/wavefont) − font-face for rendering linear data.

<p align="center"><a href="https://github.com/krishnized/license/">🕉</a><p>
