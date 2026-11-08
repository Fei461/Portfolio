#!/usr/bin/env bash
# Exporta el kit de marca con Edge headless: PNG para las imágenes, PDF para el CV.
# Uso: bash marca/exportar.sh            (todo)
#      bash marca/exportar.sh post-tatami (solo una pieza)
set -euo pipefail

EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
# Si Edge ya no está en esa ruta, vale Chrome: usan el mismo motor.
[ -x "$EDGE" ] || EDGE="/c/Program Files/Google/Chrome/Application/chrome.exe"
AQUI="$(cd "$(dirname "$0")" && pwd)"
FUENTE="$AQUI/fuente"
SALIDA="$AQUI/exportado"
PERFIL="$(mktemp -d)"
mkdir -p "$SALIDA"

url() { echo "file:///$(cygpath -m "$FUENTE/$1")"; }
win() { cygpath -w "$1"; }

# Edge devuelve el control antes de terminar de escribir: esperamos al archivo.
espera() {
  for _ in $(seq 1 60); do
    [ -s "$1" ] && sleep 0.5 && return 0
    sleep 0.5
  done
  echo "  No se ha generado $1" >&2
  return 1
}

png() { # pieza ancho alto salida [parámetros de la URL]
  rm -f "$SALIDA/$4.png"
  "$EDGE" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --user-data-dir="$(win "$(mktemp -d -p "$PERFIL")")" --virtual-time-budget=10000 \
    --window-size="$2,$3" --default-background-color="${FONDO:-ffffffff}" \
    --screenshot="$(win "$SALIDA/$4.png")" "$(url "$1.html")${5:-}" 2>/dev/null
  espera "$SALIDA/$4.png"
  echo "  $4.png"
}

pdf() { # pieza
  rm -f "$SALIDA/$1.pdf"
  "$EDGE" --headless=new --disable-gpu --no-pdf-header-footer \
    --user-data-dir="$(win "$(mktemp -d -p "$PERFIL")")" --virtual-time-budget=10000 \
    --print-to-pdf="$(win "$SALIDA/$1.pdf")" "$(url "$1.html")" 2>/dev/null
  espera "$SALIDA/$1.pdf"
  echo "  $1.pdf"
}

SOLO="${1:-}"
toca() { [ -z "$SOLO" ] || [ "$SOLO" = "$1" ]; }

echo "Exportando a $SALIDA"
for p in post-tatami post-judogi post-ejemplo-tatami post-ejemplo-judogi; do
  if toca "$p"; then png "$p" 1080 1080 "$p"; fi
done
if toca monograma; then
  png monograma 1080 1080 monograma-tatami "?fondo=tatami"
  png monograma 1080 1080 monograma-judogi "?fondo=judogi"
  FONDO=00000000 png monograma 1080 1080 monograma-transparente "?fondo=transparente"
fi
if toca banner; then png banner 1584 396 banner-linkedin; fi
if toca cv; then pdf cv; fi
sleep 1; rm -rf "$PERFIL" 2>/dev/null || true
echo "Listo."
