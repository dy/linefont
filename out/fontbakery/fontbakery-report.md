## Fontbakery report

Fontbakery version: 0.8.13

<details><summary><b>[8] Linefont-ExtraLight.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check the OS/2 usWeightClass is appropriate for the font's best SubFamily name. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/usweightclass">com.google.fonts/check/usweightclass</a>)</summary><div>


* 🔥 **FAIL** Best SubFamily name is 'ExtraLight'. Expected OS/2 usWeightClass is 136, got 136. [code: bad-value]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><br></div></details><details><summary><b>[8] Linefont-Light.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* _1 (U+0030): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _1 (U+0030): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _1 (U+0061): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _1 (U+0061): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _1 (U+0101): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _1 (U+0101): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _119 (U+0177): X=50.0,Y=1202.0 (should be at ascender 1200?) 

	* _121 (U+0179): X=50.0,Y=1198.0 (should be at ascender 1200?) [code: found-misalignments]
</div></details><br></div></details><details><summary><b>[8] Linefont-Regular.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* _2 (U+0062): X=69.0,Y=1.0 (should be at baseline 0?)

	* _2 (U+0062): X=69.0,Y=1.0 (should be at cap-height 0?)

	* _2 (U+0062): X=31.0,Y=1.0 (should be at baseline 0?)

	* _2 (U+0062): X=31.0,Y=1.0 (should be at cap-height 0?)

	* _2 (U+0102): X=69.0,Y=1.0 (should be at baseline 0?)

	* _2 (U+0102): X=69.0,Y=1.0 (should be at cap-height 0?)

	* _2 (U+0102): X=31.0,Y=1.0 (should be at baseline 0?)

	* _2 (U+0102): X=31.0,Y=1.0 (should be at cap-height 0?)

	* _118 (U+0176): X=31.0,Y=1199.0 (should be at ascender 1200?)

	* _118 (U+0176): X=69.0,Y=1199.0 (should be at ascender 1200?)

	* _122 (U+017A): X=69.0,Y=1201.0 (should be at ascender 1200?) 

	* _122 (U+017A): X=31.0,Y=1201.0 (should be at ascender 1200?) [code: found-misalignments]
</div></details><br></div></details><details><summary><b>[8] Linefont-Medium.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* _4 (U+0063): X=88.0,Y=2.0 (should be at baseline 0?)

	* _4 (U+0063): X=88.0,Y=2.0 (should be at cap-height 0?)

	* _4 (U+0063): X=12.0,Y=2.0 (should be at baseline 0?)

	* _4 (U+0063): X=12.0,Y=2.0 (should be at cap-height 0?)

	* _4 (U+0104): X=88.0,Y=2.0 (should be at baseline 0?)

	* _4 (U+0104): X=88.0,Y=2.0 (should be at cap-height 0?)

	* _4 (U+0104): X=12.0,Y=2.0 (should be at baseline 0?)

	* _4 (U+0104): X=12.0,Y=2.0 (should be at cap-height 0?)

	* _116 (U+0174): X=12.0,Y=1198.0 (should be at ascender 1200?)

	* _116 (U+0174): X=88.0,Y=1198.0 (should be at ascender 1200?)

	* _124 (U+017C): X=88.0,Y=1202.0 (should be at ascender 1200?) 

	* _124 (U+017C): X=12.0,Y=1202.0 (should be at ascender 1200?) [code: found-misalignments]
</div></details><br></div></details><details><summary><b>[8] Linefont-Thin.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* _0 (U+0100): X=50.0,Y=2.0 (should be at baseline 0?)

	* _0 (U+0100): X=50.0,Y=2.0 (should be at cap-height 0?)

	* _0 (U+0100): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _0 (U+0100): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _120 (U+0178): X=50.0,Y=1202.0 (should be at ascender 1200?) 

	* _120 (U+0178): X=50.0,Y=1198.0 (should be at ascender 1200?) [code: found-misalignments]
</div></details><br></div></details><details><summary><b>[8] Linefont-Bold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* _10 (U+0031): X=107.0,Y=1.5 (should be at baseline 0?)

	* _10 (U+0031): X=107.0,Y=1.5 (should be at cap-height 0?)

	* _10 (U+0031): X=-7.0,Y=1.5 (should be at baseline 0?)

	* _10 (U+0031): X=-7.0,Y=1.5 (should be at cap-height 0?)

	* _10 (U+0066): X=107.0,Y=1.5 (should be at baseline 0?)

	* _10 (U+0066): X=107.0,Y=1.5 (should be at cap-height 0?)

	* _10 (U+0066): X=-7.0,Y=1.5 (should be at baseline 0?)

	* _10 (U+0066): X=-7.0,Y=1.5 (should be at cap-height 0?)

	* _10 (U+010A): X=107.0,Y=1.5 (should be at baseline 0?)

	* _10 (U+010A): X=107.0,Y=1.5 (should be at cap-height 0?)

	* _10 (U+010A): X=-7.0,Y=1.5 (should be at baseline 0?)

	* _10 (U+010A): X=-7.0,Y=1.5 (should be at cap-height 0?)

	* _110 (U+016E): X=-7.0,Y=1198.5 (should be at ascender 1200?) 

	* _110 (U+016E): X=107.0,Y=1198.5 (should be at ascender 1200?) [code: found-misalignments]
</div></details><br></div></details><details><summary><b>[7] Linefont-SemiBold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><br></div></details><details><summary><b>[8] Linefont-Black.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* _10 (U+0031): X=224.5,Y=-1.5 (should be at baseline 0?)

	* _10 (U+0031): X=224.5,Y=-1.5 (should be at cap-height 0?)

	* _10 (U+0031): X=-124.5,Y=-1.5 (should be at baseline 0?)

	* _10 (U+0031): X=-124.5,Y=-1.5 (should be at cap-height 0?)

	* _20 (U+0032): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _20 (U+0032): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _100 (U+005A): X=50.0,Y=1202.0 (should be at ascender 1200?)

	* _10 (U+0066): X=224.5,Y=-1.5 (should be at baseline 0?)

	* _10 (U+0066): X=224.5,Y=-1.5 (should be at cap-height 0?)

	* _10 (U+0066): X=-124.5,Y=-1.5 (should be at baseline 0?)

	* _10 (U+0066): X=-124.5,Y=-1.5 (should be at cap-height 0?)

	* _20 (U+006B): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _20 (U+006B): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _0 (U+0100): X=50.0,Y=-202.0 (should be at descender -200?)

	* _10 (U+010A): X=224.5,Y=-1.5 (should be at baseline 0?)

	* _10 (U+010A): X=224.5,Y=-1.5 (should be at cap-height 0?)

	* _10 (U+010A): X=-124.5,Y=-1.5 (should be at baseline 0?)

	* _10 (U+010A): X=-124.5,Y=-1.5 (should be at cap-height 0?)

	* _20 (U+0114): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _20 (U+0114): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _100 (U+0164): X=50.0,Y=1202.0 (should be at ascender 1200?)

	* _110 (U+016E): X=-124.5,Y=1201.5 (should be at ascender 1200?) 

	* _110 (U+016E): X=224.5,Y=1201.5 (should be at ascender 1200?) [code: found-misalignments]
</div></details><br></div></details><details><summary><b>[8] Linefont-ExtraBold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1472, but got 1200 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 1286, but got 200 instead. [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Glyph names are all valid? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/valid_glyphnames">com.google.fonts/check/valid_glyphnames</a>)</summary><div>


* 🔥 **FAIL** The following glyph names do not comply with naming conventions: to-0, to-1, to-10, to-100, to-101, to-102, to-103, to-104, to-105, to-106, to-107, to-108, to-109, to-11, to-110, to-111, to-112, to-113, to-114, to-115, to-116, to-117, to-118, to-119, to-12, to-120, to-121, to-122, to-123, to-124, to-125, to-126, to-127, to-13, to-14, to-15, to-16, to-17, to-18, to-19, to-2, to-20, to-21, to-22, to-23, to-24, to-25, to-26, to-27, to-28, to-29, to-3, to-30, to-31, to-32, to-33, to-34, to-35, to-36, to-37, to-38, to-39, to-4, to-40, to-41, to-42, to-43, to-44, to-45, to-46, to-47, to-48, to-49, to-5, to-50, to-51, to-52, to-53, to-54, to-55, to-56, to-57, to-58, to-59, to-6, to-60, to-61, to-62, to-63, to-64, to-65, to-66, to-67, to-68, to-69, to-7, to-70, to-71, to-72, to-73, to-74, to-75, to-76, to-77, to-78, to-79, to-8, to-80, to-81, to-82, to-83, to-84, to-85, to-86, to-87, to-88, to-89, to-9, to-90, to-91, to-92, to-93, to-94, to-95, to-96, to-97, to-98 and to-99

 A glyph name must be entirely comprised of characters from the following set: A-Z a-z 0-9 .(period) _(underscore). A glyph name must not start with a digit or period. There are a few exceptions such as the special glyph ".notdef". The glyph names "twocents", "a1", and "_" are all valid, while "2cents" and ".twocents" are not. [code: found-invalid-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Ensure that the font can be rasterized by FreeType. (derived from com.adobe.fonts/check/freetype_rasterizer) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.adobe.fonts/check/freetype_rasterizer">com.adobe.fonts/check/freetype_rasterizer</a>)</summary><div>


* 🔥 **FAIL** FreeType is not available. To fix this, invoke the 'freetype' extra when installing Font Bakery:
pip3 install -U fontbakery[freetype] [code: freetype-not-installed]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking correctness of monospaced metadata. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/monospace">com.google.fonts/check/monospace</a>)</summary><div>


* 🔥 **FAIL** The PANOSE numbers are incorrect for a monospaced font. Note: Family Type is set to 0, which does not seem right. [code: mono-bad-panose]
* ⚠ **WARN** The OpenType spec recomments at https://learn.microsoft.com/en-us/typography/opentype/spec/recom#hhea-table that hhea.numberOfHMetrics be set to 3 but this font has 133 instead.
Please read https://github.com/fonttools/fonttools/issues/3014 to decide whether this makes sense for your font. [code: bad-numberOfHMetrics]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* ⚠ **WARN** Glyph '.notdef' should contain a drawing, but it is empty. [code: empty]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: _0	Contours detected: 1	Expected: 3

	- Glyph name: _1	Contours detected: 1	Expected: 3

	- Glyph name: _2	Contours detected: 1	Expected: 3

	- Glyph name: _3	Contours detected: 1	Expected: 3

	- Glyph name: _4	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _5	Contours detected: 1	Expected: 2

	- Glyph name: _6	Contours detected: 1	Expected: 2

	- Glyph name: _7	Contours detected: 1	Expected: 2

	- Glyph name: _8	Contours detected: 1	Expected: 2

	- Glyph name: _9	Contours detected: 1	Expected: 2

	- Glyph name: _10	Contours detected: 1	Expected: 2

	- Glyph name: _11	Contours detected: 1	Expected: 2

	- Glyph name: _12	Contours detected: 1	Expected: 2

	- Glyph name: _13	Contours detected: 1	Expected: 2

	- Glyph name: _14	Contours detected: 1	Expected: 3

	- Glyph name: _15	Contours detected: 1	Expected: 3

	- Glyph name: _16	Contours detected: 1	Expected: 2

	- Glyph name: _17	Contours detected: 1	Expected: 2

	- Glyph name: _18	Contours detected: 1	Expected: 2

	- Glyph name: _19	Contours detected: 1	Expected: 3

	- Glyph name: _20	Contours detected: 1	Expected: 2

	- Glyph name: _21	Contours detected: 1	Expected: 3

	- Glyph name: _22	Contours detected: 1	Expected: 2

	- Glyph name: _23	Contours detected: 1	Expected: 3

	- Glyph name: _25	Contours detected: 1	Expected: 2

	- Glyph name: _26	Contours detected: 1	Expected: 2

	- Glyph name: _27	Contours detected: 1	Expected: 3

	- Glyph name: _28	Contours detected: 1	Expected: 2

	- Glyph name: _29	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _30	Contours detected: 1	Expected: 2

	- Glyph name: _31	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _32	Contours detected: 1	Expected: 2

	- Glyph name: _33	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _34	Contours detected: 1	Expected: 2

	- Glyph name: _35	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _36	Contours detected: 1	Expected: 2

	- Glyph name: _37	Contours detected: 1	Expected: 2

	- Glyph name: _38	Contours detected: 1	Expected: 2

	- Glyph name: _40	Contours detected: 1	Expected: 2

	- Glyph name: _41	Contours detected: 1	Expected: 2

	- Glyph name: _42	Contours detected: 1	Expected: 2

	- Glyph name: _43	Contours detected: 1	Expected: 2

	- Glyph name: _44	Contours detected: 1	Expected: 2

	- Glyph name: _45	Contours detected: 1	Expected: 2

	- Glyph name: _47	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _48	Contours detected: 1	Expected: 2

	- Glyph name: _51	Contours detected: 1	Expected: 3 or 4

	- Glyph name: _52	Contours detected: 1	Expected: 2

	- Glyph name: _53	Contours detected: 1	Expected: 2

	- Glyph name: _54	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _55	Contours detected: 1	Expected: 2 or 3

	- Glyph name: _57	Contours detected: 1	Expected: 2

	- Glyph name: _58	Contours detected: 1	Expected: 2

	- Glyph name: _59	Contours detected: 1	Expected: 2

	- Glyph name: _60	Contours detected: 1	Expected: 2

	- Glyph name: _61	Contours detected: 1	Expected: 2

	- Glyph name: _62	Contours detected: 1	Expected: 2

	- Glyph name: _63	Contours detected: 1	Expected: 2

	- Glyph name: _64	Contours detected: 1	Expected: 2

	- Glyph name: _67	Contours detected: 1	Expected: 2

	- Glyph name: _68	Contours detected: 1	Expected: 2

	- Glyph name: _69	Contours detected: 1	Expected: 2

	- Glyph name: _70	Contours detected: 1	Expected: 2

	- Glyph name: _71	Contours detected: 1	Expected: 2

	- Glyph name: _72	Contours detected: 1	Expected: 2

	- Glyph name: _73	Contours detected: 1	Expected: 2

	- Glyph name: _76	Contours detected: 1	Expected: 3

	- Glyph name: _77	Contours detected: 1	Expected: 3

	- Glyph name: _78	Contours detected: 1	Expected: 3

	- Glyph name: _79	Contours detected: 1	Expected: 3

	- Glyph name: _80	Contours detected: 1	Expected: 4

	- Glyph name: _81	Contours detected: 1	Expected: 4

	- Glyph name: _82	Contours detected: 1	Expected: 2

	- Glyph name: _83	Contours detected: 1	Expected: 3

	- Glyph name: _84	Contours detected: 1	Expected: 3

	- Glyph name: _85	Contours detected: 1	Expected: 2

	- Glyph name: _86	Contours detected: 1	Expected: 3

	- Glyph name: _87	Contours detected: 1	Expected: 2

	- Glyph name: _88	Contours detected: 1	Expected: 3

	- Glyph name: _89	Contours detected: 1	Expected: 2

	- Glyph name: _90	Contours detected: 1	Expected: 2

	- Glyph name: _91	Contours detected: 1	Expected: 2

	- Glyph name: _92	Contours detected: 1	Expected: 2

	- Glyph name: _93	Contours detected: 1	Expected: 2

	- Glyph name: _96	Contours detected: 1	Expected: 2

	- Glyph name: _97	Contours detected: 1	Expected: 2

	- Glyph name: _100	Contours detected: 1	Expected: 2

	- Glyph name: _101	Contours detected: 1	Expected: 2

	- Glyph name: _104	Contours detected: 1	Expected: 2

	- Glyph name: _105	Contours detected: 1	Expected: 2

	- Glyph name: _106	Contours detected: 1	Expected: 2

	- Glyph name: _107	Contours detected: 1	Expected: 2

	- Glyph name: _108	Contours detected: 1	Expected: 2

	- Glyph name: _109	Contours detected: 1	Expected: 2

	- Glyph name: _110	Contours detected: 1	Expected: 3

	- Glyph name: _111	Contours detected: 1	Expected: 3

	- Glyph name: _112	Contours detected: 1	Expected: 3

	- Glyph name: _113	Contours detected: 1	Expected: 3

	- Glyph name: _116	Contours detected: 1	Expected: 2

	- Glyph name: _117	Contours detected: 1	Expected: 2

	- Glyph name: _118	Contours detected: 1	Expected: 2

	- Glyph name: _119	Contours detected: 1	Expected: 2

	- Glyph name: _120	Contours detected: 1	Expected: 3

	- Glyph name: _121	Contours detected: 1	Expected: 2

	- Glyph name: _122	Contours detected: 1	Expected: 2

	- Glyph name: _123	Contours detected: 1	Expected: 2

	- Glyph name: _124	Contours detected: 1	Expected: 2

	- Glyph name: _125	Contours detected: 1	Expected: 2 

	- Glyph name: _126	Contours detected: 1	Expected: 2
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Are there any misaligned on-curve points? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_alignment_miss">com.google.fonts/check/outline_alignment_miss</a>)</summary><div>


* ⚠ **WARN** The following glyphs have on-curve points which have potentially incorrect y coordinates:

	* _13 (U+010D): X=126.5,Y=-1.5 (should be at baseline 0?)

	* _13 (U+010D): X=126.5,Y=-1.5 (should be at cap-height 0?)

	* _13 (U+010D): X=-26.5,Y=-1.5 (should be at baseline 0?)

	* _13 (U+010D): X=-26.5,Y=-1.5 (should be at cap-height 0?)

	* _15 (U+010F): X=50.0,Y=-2.0 (should be at baseline 0?)

	* _15 (U+010F): X=50.0,Y=-2.0 (should be at cap-height 0?)

	* _105 (U+0169): X=50.0,Y=1202.0 (should be at ascender 1200?)

	* _107 (U+016B): X=-26.5,Y=1201.5 (should be at ascender 1200?) 

	* _107 (U+016B): X=126.5,Y=1201.5 (should be at ascender 1200?) [code: found-misalignments]
</div></details><br></div></details>

### Summary

| 💔 ERROR | 🔥 FAIL | ⚠ WARN | 💤 SKIP | ℹ INFO | 🍞 PASS | 🔎 DEBUG |
|:-----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 0 | 37 | 34 | 1118 | 55 | 834 | 0 |
| 0% | 2% | 2% | 54% | 3% | 40% | 0% |

**Note:** The following loglevels were omitted in this report:
* **SKIP**
* **INFO**
* **PASS**
* **DEBUG**
