"""Otimiza as fotos de midia/originais para a galeria do site.

Uso:  python otimizar_fotos.py
- Lê JPG/PNG/WEBP/HEIC* de midia/originais (em ordem alfabética)
- Gera midia/fotos/NN.webp (até 1400px) e midia/fotos/NN-thumb.webp (600px)
- Reescreve js/fotos.js, que a galeria lê automaticamente
(*HEIC só se o pillow-heif estiver instalado)
"""
import json
from pathlib import Path

from PIL import Image, ImageOps

RAIZ = Path(__file__).resolve().parent
ORIGINAIS = RAIZ / "midia" / "originais"
SAIDA = RAIZ / "midia" / "fotos"
MANIFESTO = RAIZ / "js" / "fotos.js"
EXTENSOES = {".jpg", ".jpeg", ".png", ".webp", ".heic"}

try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass


def salvar(img, destino, lado_max):
    copia = img.copy()
    copia.thumbnail((lado_max, lado_max), Image.LANCZOS)
    copia.save(destino, "WEBP", quality=82, method=6)
    return copia.size


def main():
    SAIDA.mkdir(parents=True, exist_ok=True)
    for antigo in SAIDA.glob("[0-9][0-9]*.webp"):
        antigo.unlink()

    fotos = []
    arquivos = sorted(p for p in ORIGINAIS.iterdir() if p.suffix.lower() in EXTENSOES)
    for i, arquivo in enumerate(arquivos, start=1):
        img = ImageOps.exif_transpose(Image.open(arquivo)).convert("RGB")
        nome = f"{i:02d}"
        w, h = salvar(img, SAIDA / f"{nome}.webp", 1400)
        salvar(img, SAIDA / f"{nome}-thumb.webp", 600)
        fotos.append({"src": f"midia/fotos/{nome}.webp",
                      "thumb": f"midia/fotos/{nome}-thumb.webp", "w": w, "h": h})
        print(f"{arquivo.name} -> {nome}.webp ({w}x{h})")

    MANIFESTO.write_text(
        "// Gerado por otimizar_fotos.py - não editar à mão\n"
        f"window.FOTOS = {json.dumps(fotos, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"{len(fotos)} foto(s) na galeria.")


if __name__ == "__main__":
    main()
