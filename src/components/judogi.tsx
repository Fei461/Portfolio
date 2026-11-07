import type { ReactNode } from "react";

// Mi judogi de competición, en azul y en blanco: rayas de España en los hombros, solapa
// pespunteada, cinturón marrón atado y FEIJÓO bordado en una punta.
const OBI = "#6e3c20";
const LUZ = "#84502d";
const HILO_OBI = "#94603a";
const ORO = "#e6bc4a";
const ROJO = "#d2231c";
const AMARILLO = "#f6c100";

const borde = { stroke: "#000", strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;

const colores = {
  azul: { tela: "#1f4fb4", sombra: "#11306f", solapa: "#2558c4", hilo: "#8fb0ee", grano: "rgba(255,255,255,.14)" },
  blanco: { tela: "#f7f7f3", sombra: "#cfcfc8", solapa: "#ffffff", hilo: "#b4b4ac", grano: "rgba(0,0,0,.09)" },
};

const CUERPO = "M84 62 L148 32 L212 32 L276 62 L252 150 L246 224 L264 374 L96 374 L114 224 L108 150 Z";
const SOLAPA_ARRIBA = "M202 30 L226 39 L158 228 L142 374 L106 374 L122 228 Z";
const SOLAPA_ABAJO = "M134 39 L158 30 L196 100 L176 130 Z";
const NUDO_IZQUIERDA =
  "M179 220 C171 224 164 229 158 234 C157 240 158 246 161 250 C167 254 174 257 181 260 C182 247 181 233 179 220 Z";
const NUDO_DERECHA =
  "M179 220 C187 220 195 222 203 225 C204 233 204 242 203 250 C196 253 188 257 181 260 C182 247 181 233 179 220 Z";

// Las dos puntas miden lo mismo: la izquierda es el espejo exacto de la derecha.
const PUNTA: [number, number][] = [
  [190, 236],
  [250, 284],
  [240, 298],
  [182, 252],
];
const espejo = (p: [number, number][]) => p.map(([x, y]) => [360 - x, y] as [number, number]);
const poligono = (p: [number, number][]) => `M${p.map(([x, y]) => `${x} ${y}`).join(" L")} Z`;

// Una pieza de tela: lo de dentro se recorta a su borde, así ninguna costura se sale.
function Pieza({ id, d, fondo, children }: { id: string; d: string; fondo: string; children?: ReactNode }) {
  return (
    <>
      <clipPath id={id}>
        <path d={d} />
      </clipPath>
      <path d={d} fill={fondo} />
      <g clipPath={`url(#${id})`}>{children}</g>
      <path d={d} fill="none" {...borde} />
    </>
  );
}

function CosturasPunta({ p }: { p: [number, number][] }) {
  const [[a, b], [c, d], [e, f], [g, i]] = p;
  const hilo = { stroke: HILO_OBI, strokeWidth: 1.1, fill: "none", strokeLinecap: "round" } as const;
  const ux = (a - c) / 10;
  const uy = (b - d) / 10;
  return (
    <>
      {[1 / 3, 2 / 3].map((k) => {
        const x0 = a + (g - a) * k;
        const y0 = b + (i - b) * k;
        const x1 = c + (e - c) * k;
        const y1 = d + (f - d) * k;
        return <path key={k} d={`M${x0} ${y0} L${x0 + (x1 - x0) * 0.9} ${y0 + (y1 - y0) * 0.9}`} {...hilo} />;
      })}
      <path d={`M${c + ux} ${d + uy} L${e + ux} ${f + uy}`} {...hilo} />
    </>
  );
}

export function Judogi({ color }: { color: "azul" | "blanco" }) {
  const { tela, sombra, solapa, hilo, grano } = colores[color];
  const id = `gi-${color}`;
  const costura = { stroke: hilo, strokeWidth: 1.3, fill: "none", strokeLinecap: "round" } as const;
  const costuraObi = { stroke: HILO_OBI, strokeWidth: 1.1, fill: "none", strokeLinecap: "round" } as const;
  const granoEntero = <rect width="360" height="400" fill={`url(#${id}-grano)`} />;
  const gancho = "M180 30 V0 C180 -19 200 -19 200 -4";

  return (
    <svg className="gi" viewBox="0 0 360 400" overflow="visible" aria-hidden="true">
      <defs>
        <pattern id={`${id}-grano`} width="9" height="7" patternUnits="userSpaceOnUse">
          <path d="M1 2h4M5.5 5.5h3M0 5.5h1.5" stroke={grano} strokeWidth="1.1" strokeLinecap="round" />
        </pattern>
        <pattern id={`${id}-dibujo`} width="22" height="26" patternUnits="userSpaceOnUse">
          <rect x="3" y="3" width="7" height="9" rx="2.5" fill="none" stroke={grano} strokeWidth="1.2" />
          <rect x="14" y="16" width="7" height="9" rx="2.5" fill="none" stroke={grano} strokeWidth="1.2" />
        </pattern>
        <clipPath id={`${id}-cuerpo`}>
          <path d={CUERPO} />
        </clipPath>
        <path id={`${id}-nombre`} d="M188 246.6 L260 302.4" />
      </defs>

      {/* La percha: el gancho sube por delante de la barra y baja por detrás */}
      <path d={gancho} fill="none" stroke="#000" strokeWidth="7.5" strokeLinecap="round" />
      <path d={gancho} fill="none" stroke="#a9a9a2" strokeWidth="3.5" strokeLinecap="round" />

      {/* Mangas */}
      <Pieza id={`${id}-m1`} d="M84 62 L12 232 L72 262 L114 150 Z" fondo={tela}>
        {granoEntero}
        <path d="M8 218 L84 256" {...costura} />
      </Pieza>
      <Pieza id={`${id}-m2`} d="M276 62 L348 232 L288 262 L246 150 Z" fondo={tela}>
        {granoEntero}
        <path d="M352 218 L276 256" {...costura} />
      </Pieza>

      {/* Cuerpo y rayas de los hombros */}
      <Pieza id={`${id}-c`} d={CUERPO} fondo={tela}>
        {granoEntero}
        <rect x="90" y="260" width="180" height="114" fill={`url(#${id}-dibujo)`} />
        <path d="M90 366 L270 366" {...costura} />
        {[
          [150, 41, 80, 74, ROJO],
          [153, 49, 84, 82, AMARILLO],
          [156, 57, 88, 90, ROJO],
        ].map(([a, b, c, d, tinta]) => (
          <path
            key={String(b)}
            d={`M${a} ${b} L${c} ${d} M${360 - Number(a)} ${b} L${360 - Number(c)} ${d}`}
            stroke={String(tinta)}
            strokeWidth="4.4"
            fill="none"
          />
        ))}
      </Pieza>

      {/* Cuello */}
      <path d="M150 34 L210 34 L182 118 Z" fill={sombra} {...borde} />
      <Pieza id={`${id}-q`} d="M146 36 Q180 14 214 36 L205 50 Q180 34 155 50 Z" fondo={solapa}>
        <path d="M140 39 Q180 18 220 39 M140 45 Q180 24 220 45" {...costura} />
      </Pieza>

      {/* Solapas */}
      <Pieza id={`${id}-s1`} d={SOLAPA_ABAJO} fondo={solapa}>
        {[1, 2, 3, 4].map((k) => (
          <path key={k} d={`M${134 + (24 * k) / 5} ${39 - (9 * k) / 5} L${176 + 4 * k} ${130 - 6 * k}`} {...costura} />
        ))}
      </Pieza>
      <Pieza id={`${id}-s2`} d={SOLAPA_ARRIBA} fondo={solapa}>
        {[1, 2, 3, 4].map((k) => (
          <path
            key={k}
            d={`M${202 + (24 * k) / 5} ${30 + (9 * k) / 5} L${122 + (36 * k) / 5} 228 L${106 + (36 * k) / 5} 374`}
            {...costura}
          />
        ))}
      </Pieza>

      {/* Etiquetas, sin logotipos */}
      <g transform="rotate(6 126 340)">
        <rect x="116" y="318" width="20" height="16" fill="#fff" stroke="#000" strokeWidth="1.4" />
        <rect x="121" y="323" width="10" height="5" fill={ROJO} />
        <rect x="116" y="337" width="20" height="23" fill="#fff" stroke="#2f8a3e" strokeWidth="2" />
        <circle cx="126" cy="348.5" r="5" fill="none" stroke="#2f8a3e" strokeWidth="1.6" />
      </g>

      {/* Cinturón: sube hacia los lados y se pierde por detrás del cuerpo */}
      <g clipPath={`url(#${id}-cuerpo)`}>
        <Pieza id={`${id}-f1`} d="M100 207 C126 214 148 224 170 233 L170 250 C146 241 124 231 100 224 Z" fondo={OBI}>
          <path d="M96 212 C126 219 148 229 174 239 M96 218 C126 225 148 235 174 245" {...costuraObi} />
        </Pieza>
        <Pieza id={`${id}-f2`} d="M260 207 C234 214 212 224 190 233 L190 250 C214 241 236 231 260 224 Z" fondo={OBI}>
          <path d="M264 212 C234 219 212 229 186 239 M264 218 C234 225 212 235 186 245" {...costuraObi} />
        </Pieza>
      </g>
      <path d="M110.4 180 L114 224 L108.2 272 M249.6 180 L246 224 L251.8 272" fill="none" {...borde} />

      {/* Puntas y nombre bordado */}
      <Pieza id={`${id}-p1`} d={poligono(espejo(PUNTA))} fondo={OBI}>
        <CosturasPunta p={espejo(PUNTA)} />
      </Pieza>
      <Pieza id={`${id}-p2`} d={poligono(PUNTA)} fondo={OBI}>
        <CosturasPunta p={PUNTA} />
      </Pieza>
      <text
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="800"
        fontSize="10.5"
        letterSpacing="1"
        fill={ORO}
        stroke={OBI}
        strokeWidth="2.4"
        paintOrder="stroke"
        dominantBaseline="central"
      >
        <textPath href={`#${id}-nombre`} startOffset="50%" textAnchor="middle">
          FEIJÓO
        </textPath>
      </text>

      {/* Nudo */}
      <Pieza id={`${id}-n1`} d={NUDO_IZQUIERDA} fondo={LUZ}>
        <path d="M180 222 L154 240 M182 229 L154 248 M183 237 L158 255 M184 245 L166 258" {...costuraObi} />
      </Pieza>
      <Pieza id={`${id}-n2`} d={NUDO_DERECHA} fondo={OBI}>
        <path d="M186 218 C187 232 187 248 186 262 M192 218 C193 232 193 248 192 262 M198 218 C199 232 199 248 198 262" {...costuraObi} />
      </Pieza>
    </svg>
  );
}
