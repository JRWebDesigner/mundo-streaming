# Mundo Streaming

Tienda online profesional para la venta de cuentas premium de streaming (Netflix, HBO Max, Disney+, Prime Video, Flujo TV, etc.).

## Características

- **Diseño Moderno**: Interfaz profesional con colores azul marino oscuro y blanco
- **Slider de Promociones**: Carrusel automático con ofertas destacadas
- **Catálogo de Productos**: Sistema completo de gestión de productos con categorías
- **Integración WhatsApp**: Compra directa mediante WhatsApp con información pre-cargada
- **Formulario de Contacto**: Sistema de mensajes conectado a Supabase
- **SEO Optimizado**: Meta tags, Open Graph, robots.txt configurados
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Base de Datos**: Supabase con RLS (Row Level Security) habilitado

## Tecnologías

- **Next.js 13** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Shadcn/UI** - Componentes UI profesionales
- **Supabase** - Base de datos PostgreSQL
- **Lucide React** - Iconos

## Configuración

### 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
NEXT_PUBLIC_WHATSAPP_NUMBER=5491234567890
```

### 2. Instalación

```bash
npm install
```

### 3. Base de Datos

La base de datos ya está configurada con:
- Tabla `categories` - Plataformas de streaming
- Tabla `products` - Productos/cuentas disponibles
- Tabla `promotions` - Promociones activas
- Tabla `contact_messages` - Mensajes de contacto
- Datos de ejemplo pre-cargados

### 4. Ejecutar en Desarrollo

```bash
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000)

### 5. Compilar para Producción

```bash
npm run build
npm run start
```

## Estructura del Proyecto

```
mundo-streaming/
├── app/
│   ├── page.tsx              # Página principal
│   ├── productos/
│   │   └── page.tsx          # Página de productos
│   ├── contacto/
│   │   └── page.tsx          # Página de contacto
│   ├── layout.tsx            # Layout principal con SEO
│   └── globals.css           # Estilos globales
├── components/
│   ├── Header.tsx            # Navegación
│   ├── Footer.tsx            # Pie de página
│   ├── PromotionsSlider.tsx  # Slider de promociones
│   └── ProductCard.tsx       # Tarjeta de producto
├── lib/
│   └── supabase.ts           # Cliente Supabase
└── .env.local                # Variables de entorno
```

## Características de SEO

- ✅ Meta tags optimizados (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Robots.txt configurado
- ✅ URLs semánticas
- ✅ Estructura HTML semántica
- ✅ Imágenes optimizadas de Pexels
- ✅ Idioma español (es_AR)

## Funcionalidades

### Slider de Promociones
- Transiciones automáticas cada 5 segundos
- Controles manuales de navegación
- Indicadores de posición
- Responsive en mobile y desktop

### Sistema de Productos
- Categorías por plataforma
- Productos destacados
- Control de stock
- Precios y duración
- Características detalladas
- Imágenes de Pexels

### Integración WhatsApp
- Click en "Comprar" redirige a WhatsApp
- Mensaje pre-cargado con datos del producto
- Número configurable en variables de entorno

### Formulario de Contacto
- Validación de campos
- Guardado en Supabase
- Notificaciones con Sonner
- Alternativa directa por WhatsApp

## Personalización

### Cambiar Colores

Edita `app/globals.css` para modificar el esquema de colores:

```css
:root {
  --primary: 210 100% 16%;     /* Azul marino oscuro */
  --secondary: 217 91% 60%;    /* Azul más claro */
  /* ... otros colores */
}
```

### Cambiar Número de WhatsApp

Edita `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5491234567890
```

### Agregar Productos

Usa el panel de Supabase para agregar productos, categorías y promociones directamente en la base de datos.

## Seguridad

- ✅ Row Level Security (RLS) habilitado en todas las tablas
- ✅ Políticas de acceso configuradas
- ✅ Validación de datos en formularios
- ✅ Variables de entorno protegidas
- ✅ Sin exposición de claves sensibles

## Soporte

Para más información o soporte técnico, contacta a través de:
- Email: info@mundostreaming.com
- WhatsApp: Configurado en variables de entorno

## Licencia

Proyecto privado - Todos los derechos reservados.
