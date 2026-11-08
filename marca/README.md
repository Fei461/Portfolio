# Marca «Culo inquieto»

Kit de marca personal de Lara Feijóo, sacado de la dirección de arte del portfolio
(`src/styles/dojo.css`). Tatami para llamar la atención, judogi para leer, cinturón marrón para firmar.

## Qué hay

| Pieza | Fuente (editable) | Exportado |
| --- | --- | --- |
| Portada de post, tatami (1080×1080) | `fuente/post-tatami.html` | `exportado/post-tatami.png` |
| Portada de post, judogi (1080×1080) | `fuente/post-judogi.html` | `exportado/post-judogi.png` |
| Ejemplo «¿Experta? Todavía no…» | `fuente/post-ejemplo-tatami.html`, `fuente/post-ejemplo-judogi.html` | `exportado/post-ejemplo-*.png` |
| Monograma «LF» (el brazo de la F es el cinturón) | `fuente/monograma.html` | `exportado/monograma-tatami.png`, `-judogi.png`, `-transparente.png` |
| Banner de LinkedIn (1584×396) | `fuente/banner.html` | `exportado/banner-linkedin.png` |
| CV de una página (A4) | `fuente/cv.html` | `exportado/cv.pdf` |

`fuente/marca.css` tiene los tokens, el tatami, el cinturón y el monograma.
`fuente/marca.js` dibuja el monograma (en color o a una tinta con `mono--tinta`) y ajusta el titular de las portadas a su caja.

## Hacer un post nuevo

1. Copia `fuente/post-tatami.html` (o la de judogi) con otro nombre.
2. Cambia el texto de `post__seccion` y el del titular. Lo que va entre `<mark>` y `</mark>` sale subrayado.
   El tamaño del titular se ajusta solo, pero funciona mejor con tres o cuatro líneas.
3. Añade el nombre al bucle de portadas en `exportar.sh` y exporta.

## Exportar

```bash
bash marca/exportar.sh
```

Con un nombre exporta solo esa pieza: `bash marca/exportar.sh banner`, `cv`, `monograma`, `post-tatami`…
Usa Edge headless (o Chrome, si Edge no está) y necesita internet para cargar Bricolage Grotesque desde Google Fonts.

## Reglas de la casa

- Colores: tatami `#c9c48b`, judogi `#f5f5f2`, negro `#000`, cinturón `#6b3a1f`.
  El rojo marcador `#d2231c` solo para llamadas a la acción.
- Una sola tipografía: Bricolage Grotesque. Titulares estrechos (`wdth` 75) y muy gruesos (800).
- Nada de etiquetas en mayúsculas, puntos medios ni flechas.
- El cinturón firma: una franja marrón con el nombre bordado en blanco, un poco torcida.
- En el banner, la esquina inferior izquierda (hasta x = 430) queda libre: ahí va la foto de perfil.
- El CV no lleva teléfono ni fecha de nacimiento.
