# Experimento 1 — Landing Page Clínica Dental Rocay

## Qué se quiere aprender
- Estructura HTML semántica desde cero
- CSS responsive a mano (sin frameworks)
- JS puro para interactividad básica

## Stack
- HTML5 / CSS3 / JavaScript puro
- Google Fonts: Playfair Display + DM Sans (vía CDN)
- Imágenes: Unsplash (URLs directas, gratuitas)
- Sin frameworks ni librerías externas

## Negocio simulado
Clínica dental ficticia llamada "Clínica Dental Rocay".

## Paleta de colores
- `--turquesa: #00C9A7` (turquesa verdoso, color principal)
- `--turquesa-oscuro: #00A88C`
- `--marino: #0D2B3E` (textos y nav)
- `--blanco / --crema` para fondos

## Skills activas en este proyecto
- `frontend-design` — aplicada al Hero. Usar al inicio de cada sección nueva.
- `web-design-guidelines` — aplicar al finalizar el sitio completo.
- `seo-fundamentals` — aplicar al finalizar el sitio completo.

## Archivos
- `index.html` — estructura HTML
- `styles.css` — todos los estilos
- `script.js` — nav mobile + carrusel con dots

## Negocio real (cambio de dirección)
El experimento evolucionó de "Clínica Dental Rocay" (ficticia) a un sitio personal
para una odontóloga real: **Dra. Andrea Cayssials**, Montevideo, Uruguay.

## Secciones
- [x] Esqueleto HTML base
- [x] Header + Nav (logo SVG muela con degradado + "Dra. Andrea" / "Cayssials" turquesa)
- [x] Hero (carrusel 4 fotos + dots + foto de la doctora con mask-image orgánico)
- [x] Servicios (6 cards con scroll reveal escalonado)
- [x] Por qué elegirnos (stats + 4 razones, fondo degradado oscuro)
- [x] Testimonios (3 cards personalizadas a la doctora)
- [x] Sobre la doctora (foto + credenciales UBA + 20 años experiencia)
- [x] Nuestro espacio (2 fotos reales, fondo turquesa oscuro)
- [x] Contacto (barra horizontal: teléfono + dirección + horarios + botón WhatsApp)
- [x] Footer (logo + links + dirección + copyright)
- [x] Widget WhatsApp flotante (despliega mini-chat con input)
- [x] Revisión responsive completa
- [x] seo-fundamentals audit (meta description + Open Graph + Schema JSON-LD)

## Decisiones de diseño tomadas
- Hero alineado a izquierda (más editorial) + foto doctora con mask-image orgánico
- Overlay degradado lateral (oscuro izq → transparente der)
- Animación Ken Burns en cada slide (zoom lento)
- Animaciones de entrada escalonadas (fadeUp hero, fadeUp scroll reveal)
- Botón "Reservar turno" con efecto brillo al hover
- Segundo botón fantasma "Ver servicios"
- Nav con backdrop-filter blur (glass effect)
- Tipografía: Tenor Sans (display) + Raleway (cuerpo)
- Paleta: turquesa #00C9A7 dominante, marino #0D2B3E para fondos oscuros
- Sección "Nuestro espacio" con fondo turquesa oscuro (#003D35 → #005548)
- Widget WhatsApp turquesa (no verde) para mantener la paleta del sitio
- Contacto: barra horizontal en desktop, columna en mobile ≤860px

## Qué se logró
Landing page completa de odontóloga personal, lista para mostrar como portfolio.
Cubre: HTML semántico, CSS Grid responsive a mano, variables CSS, SVG inline,
IntersectionObserver, carrusel JS, mask-image, Schema SEO, widget WhatsApp custom.
