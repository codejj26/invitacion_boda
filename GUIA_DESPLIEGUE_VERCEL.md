# 🚀 Guía de Despliegue en Vercel

## ¿Por qué Vercel?

Vercel es la plataforma creada por los desarrolladores de Next.js. Es la opción más optimizada y fácil para desplegar tu invitación de boda.

## 📋 Pasos para Desplegar

### Paso 1: Crear una cuenta en Vercel

1. Ve a [https://vercel.com/signup](https://vercel.com/signup)
2. Haz clic en **"Continue with GitHub"**
3. Autoriza a Vercel para acceder a tus repositorios

### Paso 2: Importar tu proyecto

1. Una vez dentro de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Busca tu repositorio `invitacion_boda`
3. Haz clic en **"Import"**

### Paso 3: Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Verás algo como:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**¡No cambies nada!** Vercel ya lo configuró correctamente.

### Paso 4: Agregar Variables de Entorno (IMPORTANTE)

Antes de hacer clic en "Deploy", necesitas agregar tu variable de entorno:

1. Haz clic en **"Environment Variables"** (expandir la sección)
2. Agrega la siguiente variable:
   - **Name:** `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - **Value:** (pega aquí la URL de tu Google Apps Script)
   - **Environment:** Marca las 3 opciones (Production, Preview, Development)
3. Haz clic en **"Add"**

### Paso 5: Desplegar

1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel construye tu sitio
3. ¡Listo! 🎉

### Paso 6: Ver tu sitio

Una vez que termine, verás:
- ✅ Un mensaje de "Congratulations"
- 🔗 Una URL como: `https://invitacion-boda-xxx.vercel.app`

**¡Esa es tu invitación en vivo!** 🎊

---

## 🌐 Configurar un Dominio Personalizado (Opcional)

Si quieres un dominio como `maria-y-juan.com`:

### Opción A: Dominio Gratis de Vercel

Vercel te da un subdominio gratis:
- `tu-proyecto.vercel.app`

### Opción B: Comprar un Dominio

1. Compra un dominio en [Namecheap](https://namecheap.com) o [GoDaddy](https://godaddy.com) (~$10-15/año)
2. En Vercel, ve a tu proyecto → **Settings** → **Domains**
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

---

## 🔄 Actualizaciones Automáticas

**¡Lo mejor de Vercel!** Cada vez que hagas cambios:

1. Editas tu código localmente
2. Haces commit: `git add . && git commit -m "mensaje"`
3. Subes a GitHub: `git push`
4. **Vercel despliega automáticamente** en 2-3 minutos

---

## 📊 Monitoreo

Vercel te da:
- 📈 Analytics de visitantes
- 🐛 Logs de errores
- 🚀 Métricas de rendimiento

Todo gratis en el plan Hobby.

---

## ⚙️ Configuración Avanzada (Opcional)

### Redirigir www a dominio principal

Si tienes un dominio personalizado, Vercel lo hace automáticamente.

### Optimización de Imágenes

Next.js + Vercel optimizan automáticamente tus imágenes para carga rápida.

---

## 🆘 Solución de Problemas

### Error: "Build Failed"

1. Verifica que el proyecto funcione localmente: `npm run build`
2. Si hay errores, corrígelos antes de desplegar
3. Asegúrate de que todas las dependencias estén en `package.json`

### Error: "Environment Variable Not Found"

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
4. Redeploy: Deployments → ... → Redeploy

### El formulario no funciona

1. Verifica que agregaste la variable de entorno en Vercel
2. Verifica que la URL de Google Apps Script sea correcta
3. Haz un nuevo deploy después de agregar la variable

---

## 📝 Comandos Útiles

```bash
# Verificar que el build funcione localmente
npm run build

# Iniciar el servidor de producción localmente
npm start

# Subir cambios a GitHub (y desplegar automáticamente)
git add .
git commit -m "Descripción de cambios"
git push
```

---

## ✅ Checklist Final

Antes de compartir tu invitación, verifica:

- [ ] El sitio carga correctamente
- [ ] Todas las imágenes se ven bien
- [ ] El formulario RSVP funciona
- [ ] La música se reproduce
- [ ] El contador regresivo muestra la fecha correcta
- [ ] Los enlaces de Google Maps funcionan
- [ ] Se ve bien en móvil y desktop

---

## 🎉 ¡Felicidades!

Tu invitación de boda ya está en línea. Ahora puedes:

1. Compartir el link con tus invitados
2. Crear códigos QR para las invitaciones físicas
3. Compartir en redes sociales

**URL de ejemplo:** `https://invitacion-boda.vercel.app`

---

## 💡 Tips Adicionales

### Crear un QR Code

1. Ve a [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Pega la URL de tu invitación
3. Descarga el QR
4. Imprímelo en tus invitaciones físicas

### Acortar la URL

Si la URL es muy larga, usa:
- [bit.ly](https://bitly.com)
- [tinyurl.com](https://tinyurl.com)

Ejemplo: `https://bit.ly/boda-maria-juan`

---

¿Necesitas ayuda con algún paso? ¡Estoy aquí para ayudarte! 😊
