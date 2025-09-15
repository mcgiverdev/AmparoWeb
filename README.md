# Amparo Coaching - UI Kit

Sistema de diseño completo para el sitio web de coaching profesional con componentes reutilizables y consistentes.

## 🎨 Design System

### Paleta de Colores
- **Brand**: `#3F0C1E` (Burdeos principal)
- **Cream**: `#FFEBD8` (Crema elegante)
- **Tan**: `#BB9476` (Arena/tostado)
- **Beige**: `#ECE5D7` (Beige claro)
- **Black**: `#0A0A0A` (Negro profundo)
- **White**: `#FFFFFF` (Blanco puro)

### Tipografías
- **Títulos**: Playfair Display (elegante, serif)
- **Cuerpo**: Inter (legible, sans-serif)

## 🧱 Componentes Disponibles

### Base Components
- ✅ **Botones**: Primary, Secondary, Outline (3 tamaños)
- ✅ **Formularios**: Inputs, textareas, selects con estados focus
- ✅ **Cards**: Básicas, testimonials, servicios con hover effects

### Landing Components
- ✅ **Hero Sections**: Principal con imagen/video, compacto
- ✅ **Call to Actions**: Urgencia, social proof
- ✅ **Pricing Tables**: 3 planes con destacado popular
- ✅ **Stats Section**: Métricas con animaciones

### Navigation Components
- ✅ **Header**: Sticky con backdrop-blur, menú responsive
- ✅ **Mobile Menu**: Bottom navigation con iconos
- ✅ **Breadcrumbs**: Navegación de contexto
- ✅ **Footer**: Completo con secciones, enlaces, contacto

## 📁 Estructura de Archivos

```
AmparoWeb/
├── ui-kit.html           # Documentación visual completa
├── src/
│   ├── input.css         # CSS fuente con componentes
│   └── output.css        # CSS compilado (generado)
├── components/           # Templates reutilizables
└── package.json          # Scripts de Tailwind CLI
```

## 🚀 Comandos

### Desarrollo (con watch)
```bash
pnpm run dev
```

### Build para producción
```bash
pnpm run build
```

### Ver UI Kit
```bash
# Abrir ui-kit.html en navegador
ii .\ui-kit.html
```

## 🎯 Uso de Componentes

### Botones
```html
<button class="btn-primary btn-lg">Reservar Sesión</button>
<button class="btn-secondary btn-md">Conocer más</button>
<button class="btn-outline btn-sm">Ver detalles</button>
```

### Hero Section
```html
<div class="hero-main">
  <div class="hero-content">
    <div class="hero-badge">✨ Coaching Profesional</div>
    <h1 class="hero-title">Tu título principal</h1>
    <p class="hero-description">Descripción del servicio...</p>
    <div class="hero-actions">
      <button class="btn-primary btn-lg">Acción primaria</button>
      <button class="btn-outline btn-lg">Acción secundaria</button>
    </div>
  </div>
  <div class="hero-visual">
    <div class="hero-image"><!-- Imagen o video --></div>
  </div>
</div>
```

### Formularios
```html
<div>
  <label class="form-label">Nombre</label>
  <input type="text" class="form-input" placeholder="Tu nombre">
</div>
```

### Cards de Testimonios
```html
<div class="testimonial-card">
  <div class="mb-4">
    <div class="flex text-cream text-lg">★★★★★</div>
  </div>
  <blockquote class="text-base mb-4">
    "Testimonio del cliente..."
  </blockquote>
  <footer class="flex items-center gap-3">
    <div class="w-10 h-10 bg-tan rounded-full flex items-center justify-center text-sm font-medium">MG</div>
    <div>
      <cite class="text-sm font-medium not-italic">María García</cite>
      <div class="text-xs text-muted">Empresaria</div>
    </div>
  </footer>
</div>
```

## 🔄 Migración a Frameworks

### Laravel (Blade Components)
- Convertir cada componente HTML a Blade
- Variables CSS se mantienen igual
- Usar `@vite` para el CSS compilado

### WordPress (Blocks/Shortcodes)
- Crear bloques Gutenberg con los estilos
- Enqueue del CSS compilado en `functions.php`
- ACF para campos personalizables

## 📱 Responsive Design

Todos los componentes incluyen:
- **Mobile First**: Diseñados primero para móvil
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Touch Friendly**: Botones y links con área táctil adecuada
- **Performance**: CSS optimizado y fuentes con `font-display: swap`

## 🎨 Customización

### Variables CSS (en `src/input.css`)
```css
:root {
  --brand: #3F0C1E;    /* Cambiar color principal */
  --cream: #FFEBD8;    /* Cambiar acento claro */
  --tan: #BB9476;      /* Cambiar secundario */
  /* ... más variables ... */
}
```

### Agregar Nuevos Componentes
1. Definir HTML en `ui-kit.html`
2. Agregar CSS en `src/input.css`
3. Correr `pnpm run build`
4. Documentar uso en este README

## ✨ Características Premium

- **Gradientes sutiles** en botones y backgrounds
- **Animations** suaves en hover/focus
- **Backdrop blur** en header sticky
- **Color mixing** para transparencias naturales
- **Sombras profesionales** con múltiples capas
- **Typography scale** optimizada para legibilidad

---

*UI Kit v1.0 - Sistema de diseño para Amparo Coaching*