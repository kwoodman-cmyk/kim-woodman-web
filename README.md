# Kim & Woodman Asociados — Sitio Web Corporativo

Sitio web institucional de Kim & Woodman Asociados, estudio especializado
en negocios inmobiliarios con sedes en Lima y Piura, Perú.

## Estructura del proyecto

```
proyecto-web/
├── index.html              ← Página principal (toda la web en una sola página)
├── README.md               ← Este archivo
├── css/
│   └── styles.css          ← Todos los estilos (desktop + tablet + mobile)
├── js/
│   └── script.js           ← Nav scroll, hamburger menu, scroll reveal
└── assets/
    └── images/
        ├── logo.png                 ← Logo Kim & Woodman (fondo blanco)
        ├── yoobin-kim.png           ← Foto socio: Yoobin Kim
        ├── kevin-woodman.png        ← Foto socio: Kevin Woodman
        └── ricardo-rodriguez.png   ← Foto socio: Ricardo Rodríguez
```

## Secciones de la página

| # | ID | Título |
|---|-----|--------|
| — | hero | Hero: titular principal |
| 01 | #firma | La Firma |
| 02 | #socios | Los Socios |
| 03 | #equipo | El Equipo |
| 04 | #servicios | Servicios |
| 05 | #mercado | Clientes |
| 06 | #proyectos | Residencial Vista Norte |
| 07 | #propintel | Propintel |
| — | #contacto | Contacto |

## Tipografías (Google Fonts — cargadas desde CDN)

- **Playfair Display** — títulos y display (serif elegante)
- **Libre Baskerville** — cuerpo de texto (serif clásico)
- **Jost** — navegación, etiquetas, UI (sans-serif geométrico)

## Paleta de colores

| Variable CSS | Valor | Uso |
|---|---|---|
| `--ink` | `#0f0e0d` | Texto principal, fondos oscuros |
| `--ink-light` | `#5a5652` | Texto secundario |
| `--paper` | `#f7f4ef` | Fondo principal (crema) |
| `--paper-mid` | `#ede9e2` | Fondos alternos |
| `--gold` | `#8b6c2e` | Acento dorado principal |
| `--gold-light` | `#b89040` | Acento dorado sobre fondos oscuros |
| `--rule` | `#d4cfc6` | Líneas divisorias |

## Responsive

- **Desktop**: > 1024px — layout completo en grid 2 columnas
- **Tablet**: 769px – 1024px — padding reducido, ajustes menores
- **Mobile**: ≤ 768px — una columna, hamburger menu, todo apilado

## Despliegue

Basta con servir la carpeta `proyecto-web/` como sitio estático.
Compatible con: GitHub Pages, Netlify, Vercel, cualquier hosting estático.

```bash
# Ejemplo local con Python
cd proyecto-web
python3 -m http.server 8080
# → http://localhost:8080
```

## Contacto del proyecto

- Email: hola@kimwoodman.pe
- WhatsApp: +51 920 124 413
- Instagram: @kimwoodmanasociados
