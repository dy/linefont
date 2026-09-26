"""Segments by level pair (scripts/pairs.py) draw what the layout rules draw, shaped and
drawn with HarfBuzz: every U+F0000 | a << 8 | b has a glyph, and a line of values written
as value chars (joined by rsub + cursive rules) or as the first value then segments has
the same outline points, at several axis locations.

    python scripts/test-pairs.py FONT.ttf [...]
"""
import sys
import random
import uharfbuzz as hb


class Points:
    """Pen collecting outline points of glyphs drawn at an offset."""
    def __init__(self): self.points, self.dx, self.dy = [], 0, 0
    def add(self, *xy): self.points.append((round(xy[0] + self.dx, 1), round(xy[1] + self.dy, 1)))
    def moveTo(self, p): self.add(*p)
    def lineTo(self, p): self.add(*p)
    def curveTo(self, *ps): [self.add(*p) for p in ps]
    def qCurveTo(self, *ps): [self.add(*p) for p in ps if p]
    def closePath(self): pass
    def endPath(self): pass


def outline(font, text):
    b = hb.Buffer()
    b.add_str(text)
    b.guess_segment_properties()
    hb.shape(font, b)
    pen, x = Points(), 0
    for i, p in zip(b.glyph_infos, b.glyph_positions):
        pen.dx, pen.dy = x + p.x_offset, p.y_offset
        font.draw_glyph_with_pen(i.codepoint, pen)
        x += p.x_advance
    return sorted(pen.points), [i.codepoint for i in b.glyph_infos]


def check(path):
    face = hb.Face(hb.Blob.from_file_path(path))
    locations = [{'wght': w, 'wdth': d} for w, d in ((100, 100), (100, 25), (4, 200), (1000, 25), (400, 60))] if face.axis_infos else [{}]
    rnd = random.Random(1)
    lines = [[a, b] for a in range(0, 128, 3) for b in range(128)]  # every step from a third of the levels
    lines += [[rnd.randrange(128) for _ in range(rnd.randint(3, 40))] for _ in range(200)]
    fails = []
    for loc in locations:
        font = hb.Font(face)
        font.set_variations(loc)
        for a in range(128):  # every pair has its own glyph
            for b in range(128):
                if not font.get_nominal_glyph(0xF0000 | a << 8 | b): fails.append(f'{a}..{b}: no glyph')
        for v in lines:
            legacy, _ = outline(font, ''.join(chr(0x100 + x) for x in v))
            pairs, gids = outline(font, chr(0x100 + v[0]) + ''.join(chr(0xF0000 | p << 8 | q) for p, q in zip(v, v[1:])))
            if len(gids) != len(v): fails.append(f'{loc} {v[:4]}…: {len(gids)} glyphs for {len(v)} values')
            elif legacy != pairs: fails.append(f'{loc} {v[:4]}…: outlines differ')
    print(f'{path}: {128 * 128} segments, {len(lines)} lines × {len(locations)} locations, {len(fails)} failures')
    for f in fails[:10]: print('  ' + f)
    return not fails


if __name__ == '__main__':
    sys.exit(0 if all([check(p) for p in sys.argv[1:]]) else 1)
