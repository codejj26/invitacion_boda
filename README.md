# 💍 Invitación de Boda - Proyecto Next.js

Una hermosa invitación de boda digital creada con Next.js, TypeScript y CSS moderno.

## ✨ Características

- 🎨 Diseño elegante y responsivo
- 📱 Optimizado para móviles y desktop
- ⏰ Contador regresivo hasta el día de la boda
- 📸 Galería de fotos
- 📍 Información de ubicación con Google Maps
- 👔 Código de vestimenta
- 🎁 Registro de regalos
- ✅ Formulario RSVP conectado a Google Sheets
- 🎵 Reproductor de música

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Google Sheets (para el formulario RSVP)

**Importante:** Sigue las instrucciones detalladas en el archivo `INSTRUCCIONES_GOOGLE_SHEETS.md` para configurar la integración con Google Sheets.

Una vez que hayas obtenido la URL de tu Google Apps Script:

1. Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` y reemplaza la URL con la tuya:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/TU_SCRIPT_ID_REAL/exec
   ```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📋 Estructura del Proyecto

```
invitacion-boda/
├── app/                    # Páginas y rutas de Next.js
├── components/             # Componentes React
│   ├── Hero.tsx           # Sección principal
│   ├── Countdown.tsx      # Contador regresivo
│   ├── EventDetails.tsx   # Detalles del evento
│   ├── Gallery.tsx        # Galería de fotos
│   ├── RSVP.tsx          # Formulario de confirmación
│   └── ...
├── styles/                # Módulos CSS
├── public/                # Archivos estáticos
│   ├── images/           # Imágenes
│   └── music/            # Archivos de audio
├── data/                  # Datos de la aplicación
└── INSTRUCCIONES_GOOGLE_SHEETS.md  # Guía de configuración
```

## 🔧 Personalización

### Cambiar información de la boda

Edita el archivo `data/weddingData.ts` para actualizar:
- Nombres de los novios
- Fecha y hora del evento
- Ubicaciones
- Información de contacto

### Cambiar imágenes

Reemplaza las imágenes en la carpeta `public/images/` con tus propias fotos.

### Cambiar música

Reemplaza el archivo de música en `public/music/` con tu canción favorita.

## 📊 Ver las Confirmaciones

Todas las confirmaciones de asistencia se guardarán automáticamente en tu Google Sheet. Puedes:
- Ver las respuestas en tiempo real
- Compartir la hoja con otras personas
- Exportar los datos a Excel si lo necesitas
- Crear gráficos y análisis

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio
4. Agrega la variable de entorno `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` en la configuración
5. ¡Despliega!

### Opción 2: Netlify

1. Sube tu código a GitHub
2. Ve a [Netlify](https://netlify.com)
3. Importa tu repositorio
4. Agrega la variable de entorno en la configuración
5. ¡Despliega!

## 📝 Notas Importantes

- El archivo `.env.local` NO se sube a GitHub por seguridad
- Asegúrate de configurar las variables de entorno en tu plataforma de despliegue
- Las confirmaciones se guardan directamente en Google Sheets, sin necesidad de base de datos

## 🆘 Soporte

Si tienes problemas con la configuración de Google Sheets, revisa el archivo `INSTRUCCIONES_GOOGLE_SHEETS.md` o contacta al desarrollador.

## 📄 Licencia

Este proyecto es de uso personal para tu boda. ¡Disfrútalo! 💕

