"""Site icons from the wordmark's letterform.

The ASHTON logo's A is a tall, crossbar-less Λ. The icon is that letterform, drawn heavier
so it survives 16 px, white on black (the site's header colour). Outputs:
  src/app/icon.png        192×192  (Google wants a multiple of 48)
  src/app/apple-icon.png  180×180
  src/app/favicon.ico     16/32/48
Run: python3 scripts/make-icons.py
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "app"


def mark(size: int, bg=(0, 0, 0, 255), fg=(255, 255, 255, 255)) -> Image.Image:
    S = 1024  # draw big, then downsample for clean edges
    im = Image.new("RGBA", (S, S), bg)
    d = ImageDraw.Draw(im)
    # Λ geometry on the 1024 master: apex near the top, feet near the bottom, stroke ≈ 12% of width.
    apex_y, foot_y = 170, 870
    outer_l, outer_r, cx = 236, 788, 512
    t = 118  # horizontal stroke thickness
    inner_l, inner_r = outer_l + t, outer_r - t
    # inner apex: where the two inner edges (parallel to the outer ones) meet on the centre line
    s = (cx - inner_l) / (cx - outer_l)
    inner_apex_y = foot_y - (foot_y - apex_y) * s
    d.polygon(
        [(outer_l, foot_y), (cx, apex_y), (outer_r, foot_y), (inner_r, foot_y), (cx, inner_apex_y), (inner_l, foot_y)],
        fill=fg,
    )
    return im.resize((size, size), Image.LANCZOS)


OUT.mkdir(parents=True, exist_ok=True)
mark(192).save(OUT / "icon.png", optimize=True)
mark(180).save(OUT / "apple-icon.png", optimize=True)
big = mark(256)
big.save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("wrote icon.png, apple-icon.png, favicon.ico")
