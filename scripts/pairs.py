"""Segments by level pair: one glyph per line segment from level a to level b, at U+F0000 | a << 8 | b.

Each is a composite of the segment glyph for b - a, raised to level a, and the value dot
for b: exactly what the layout rules draw for value b after value a (a segment from the
previous cell's middle, then a join dot), as one glyph found through cmap alone. No
contextual substitution or cursive chain: text lays out like plain text. Every offset is
constant: the segments and dots carry their own width and weight variations.

    python scripts/pairs.py FONT.ttf [...]   # in place, TrueType outlines
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables._g_l_y_f import Glyph, GlyphComponent
from fontTools.ttLib.tables._c_m_a_p import CmapSubtable

BASE, LEVELS, STEP = 0xF0000, 128, 10
USE_MY_METRICS = 0x0200


def component(name, y, metrics=False):
    c = GlyphComponent()
    c.glyphName, c.x, c.y, c.flags = name, 0, y, USE_MY_METRICS if metrics else 0
    return c


def pairs(path):
    font = TTFont(path)
    font.ensureDecompiled()  # gvar and HVAR index glyphs by order: read before it grows
    cmap = font.getBestCmap()
    dot = {v: cmap[0x100 + v] for v in range(LEVELS)}
    seg = lambda d: f'pos.{d}' if d >= 0 else f'neg.{-d}'
    glyf, hmtx = font['glyf'], font['hmtx']
    hvar = 'HVAR' in font and font['HVAR'].table.AdvWidthMap
    mapped = {}
    for a in range(LEVELS):
        for b in range(LEVELS):
            name = f's{a}_{b}'
            g = Glyph()
            g.numberOfContours, g.components = -1, [component(seg(b - a), STEP * a), component(dot[b], 0, True)]
            glyf[name] = g  # appends to the glyph order
            g.recalcBounds(glyf)
            hmtx[name] = (hmtx[dot[b]][0], g.xMin)
            if hvar: hvar.mapping[name] = hvar.mapping[dot[b]]
            mapped[BASE | a << 8 | b] = name
    font.setGlyphOrder(glyf.glyphOrder)

    # full-repertoire Unicode subtables, so no BMP-only one shadows the range
    full = {**cmap, **mapped}
    font['cmap'].tables = [s for s in font['cmap'].tables if s.format != 12]
    for platform, encoding in ((0, 4), (3, 10)):
        t = CmapSubtable.newSubtable(12)
        t.platformID, t.platEncID, t.language, t.cmap = platform, encoding, 0, full
        font['cmap'].tables.append(t)
    font['cmap'].tables.sort(key=lambda s: (s.platformID, s.platEncID))
    font.save(path)
    return len(mapped)


if __name__ == '__main__':
    for p in sys.argv[1:]:
        print(f'{p}: {pairs(p)} segments')
