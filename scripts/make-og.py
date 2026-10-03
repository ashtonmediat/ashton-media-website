"""Open Graph / WhatsApp preview images (1200×630).

One default (the home photograph) plus one per page that has its own hero photograph in
public/images. Each is the photograph, cover-cropped, darkened towards the bottom, with the
white wordmark bottom-left — no text, the platform shows the page title next to it.
Run: python3 scripts/make-og.py
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images"
OUT = ROOT / "public" / "og"
LOGO = ROOT / "public" / "brand" / "ashton-logo-white.png"
W, H = 1200, 630

# page → source photograph (name in public/images, without extension)
PAGES = {
    "default": "home",
    "billboards-in-tanzania": "billboards-in-tanzania",
    "digital-billboards-tanzania": "digital-billboards-tanzania",
    "static-billboards-tanzania": "static-billboards-tanzania",
    "airport-advertising-tanzania": "airport-advertising-tanzania",
    "sgr-advertising-tanzania": "sgr-advertising-tanzania",
    "mall-advertising-tanzania": "mall-advertising-tanzania",
    "mobile-screens-tanzania": "mobile-screens-tanzania",
    "about": "about",
    "advertising-in-tanzania": "advertising-in-tanzania",
    "blog": "network",
}


def gradient(w: int, h: int, start_y: int, max_alpha: int) -> Image.Image:
    """Transparent → black, from start_y to the bottom."""
    g = Image.new("L", (1, h), 0)
    px = g.load()
    for y in range(h):
        if y >= start_y:
            px[0, y] = int(max_alpha * (y - start_y) / max(1, h - start_y))
    return g.resize((w, h))


def build(name: str, src: Path) -> None:
    im = Image.open(src).convert("RGB")
    im = ImageOps.fit(im, (W, H), Image.LANCZOS, centering=(0.5, 0.5))
    # overall dim so white reads, plus a heavier gradient behind the wordmark
    im = Image.blend(im, Image.new("RGB", (W, H), (0, 0, 0)), 0.22)
    shade = Image.new("RGB", (W, H), (0, 0, 0))
    im.paste(shade, (0, 0), gradient(W, H, int(H * 0.45), 190))
    logo = Image.open(LOGO).convert("RGBA")
    lw = 400
    logo = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
    im.paste(logo, (64, H - logo.height - 64), logo)
    OUT.mkdir(parents=True, exist_ok=True)
    im.save(OUT / f"{name}.jpg", quality=82, optimize=True, progressive=True)


for name, photo in PAGES.items():
    src = IMAGES / f"{photo}.jpg"
    if src.exists():
        build(name, src)
        print("wrote", name)
    else:
        print("skip (no photo):", name)
