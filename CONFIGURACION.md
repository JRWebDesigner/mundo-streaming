# Guía de Configuración - Mundo Streaming

## Paso 1: Configurar Supabase

### 1.1 Crear Cuenta en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto

### 1.2 Obtener Credenciales

1. En tu proyecto de Supabase, ve a **Settings** > **API**
2. Copia:
   - `Project URL` (algo como: https://tuproyecto.supabase.co)
   - `anon public` key (clave anónima)

### 1.3 Ejecutar Migraciones

La base de datos ya tiene la migración creada con todas las tablas necesarias:
- `categories` - Plataformas de streaming
- `products` - Productos/cuentas
- `promotions` - Promociones
- `contact_messages` - Mensajes de contacto

**La migración ya fue aplicada e incluye datos de ejemplo.**

## Paso 2: Configurar Variables de Entorno

1. Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` con tus credenciales:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://tuproyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_aqui
   NEXT_PUBLIC_WHATSAPP_NUMBER=5491234567890
   ```

3. **IMPORTANTE**: Cambia el número de WhatsApp por el tuyo (formato internacional sin espacios ni guiones)

## Paso 3: Instalar Dependencias

```bash
npm install
```

## Paso 4: Ejecutar en Desarrollo

```bash
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000)

## Paso 5: Agregar Contenido

### Agregar Productos

1. Ve a tu proyecto en Supabase
2. Abre **Table Editor**
3. Selecciona la tabla `products`
4. Click en "Insert" > "Insert row"
5. Completa los campos:
   - `name`: Nombre del producto (ej: "Netflix Premium")
   - `description`: Descripción
   - `price`: Precio (número decimal, ej: 15.99)
   - `duration`: Duración (ej: "1 mes", "3 meses")
   - `features`: Array JSON con características:
     ```json
     ["Acceso completo", "HD y 4K", "Sin anuncios", "Múltiples perfiles"]
     ```
   - `stock`: Cantidad disponible (número entero)
   - `is_featured`: `true` para destacados
   - `category_id`: ID de la categoría (Netflix, HBO, etc.)

### Agregar Promociones

1. Ve a la tabla `promotions`
2. Agrega nuevas promociones con:
   - `title`: Título de la promoción
   - `description`: Descripción
   - `image_url`: URL de imagen de Pexels (busca en https://pexels.com)
   - `discount_percentage`: Porcentaje de descuento
   - `is_active`: `true` para activar
   - `start_date` y `end_date`: Fechas de inicio y fin

### Imágenes Recomendadas

Usa imágenes de [Pexels](https://pexels.com) buscando:
- "streaming"
- "netflix"
- "movie theater"
- "entertainment"
- "cinema"

## Paso 6: Verificar Configuración

### Verificar Base de Datos

1. Ve a Supabase > **Table Editor**
2. Verifica que existan las tablas:
   - ✅ categories (con datos de ejemplo)
   - ✅ products (con productos de ejemplo)
   - ✅ promotions (con promociones activas)
   - ✅ contact_messages (vacía al inicio)

### Verificar RLS (Row Level Security)

1. Ve a Supabase > **Authentication** > **Policies**
2. Verifica que cada tabla tenga políticas activas
3. Las políticas permiten lectura pública y escritura para mensajes

### Probar WhatsApp

1. En la página web, click en "Comprar por WhatsApp" en cualquier producto
2. Debe abrir WhatsApp con un mensaje pre-cargado
3. Verifica que el número sea correcto

### Probar Formulario de Contacto

1. Ve a `/contacto`
2. Completa y envía el formulario
3. Verifica en Supabase > Table Editor > `contact_messages` que se guardó

## Paso 7: Compilar para Producción

```bash
npm run build
npm run start
```

## Problemas Comunes

### Error: "Invalid supabaseUrl"

**Solución**: Verifica que `.env.local` tenga URLs válidas de Supabase.

### No se muestran los productos

**Solución**:
1. Verifica que existan productos en la tabla `products`
2. Verifica que `is_featured = true` para productos destacados
3. Revisa la consola del navegador para errores

### WhatsApp no abre

**Solución**: Verifica el formato del número en `.env.local`:
- ✅ Correcto: `5491234567890` (código país + número sin espacios)
- ❌ Incorrecto: `+54 9 11 1234-5678`

### Imágenes no cargan

**Solución**: Usa URLs directas de Pexels, no enlaces de vista previa.

## Optimización SEO

El sitio ya incluye:
- ✅ Meta tags optimizados
- ✅ Open Graph para redes sociales
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ URLs semánticas
- ✅ Estructura HTML semántica

### Mejorar SEO

1. Agrega contenido único en descripciones
2. Usa palabras clave relevantes
3. Optimiza velocidad de carga
4. Crea contenido de blog (opcional)
5. Registra el sitio en Google Search Console

## Despliegue

### Netlify (Recomendado)

1. Push del código a GitHub
2. Conecta el repositorio en Netlify
3. Configura las variables de entorno en Netlify:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy automático

### Vercel

1. Push del código a GitHub
2. Importa el proyecto en Vercel
3. Configura las variables de entorno
4. Deploy automático

## Soporte

Para más ayuda:
- Documentación Supabase: https://supabase.com/docs
- Documentación Next.js: https://nextjs.org/docs
- Documentación Tailwind: https://tailwindcss.com/docs

---

**¡Tu tienda de streaming está lista!**
