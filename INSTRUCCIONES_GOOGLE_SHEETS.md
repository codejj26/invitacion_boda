# 📊 Configuración de Google Sheets para el Formulario RSVP

## Paso 1: Crear la Hoja de Cálculo

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala "Confirmaciones Boda" (o el nombre que prefieras)
4. En la primera fila, agrega estos encabezados:
   - **A1:** Fecha y Hora
   - **B1:** Asistirá
   - **C1:** Número de Personas
   - **D1:** Nombres de Invitados
   - **E1:** Nombre Principal

## Paso 2: Crear el Script de Google Apps

1. En tu hoja de Google Sheets, ve a **Extensiones** → **Apps Script**
2. Borra todo el código que aparece por defecto
3. Copia y pega el siguiente código:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear los datos recibidos
    var data = JSON.parse(e.postData.contents);
    
    // Preparar la fila de datos
    var timestamp = new Date();
    var asistira = data.attending === 'yes' ? 'Sí' : 'No';
    var numeroPersonas = data.numberOfGuests || 0;
    var nombresInvitados = data.guestNames ? data.guestNames.join(', ') : '';
    var nombrePrincipal = data.guestNames && data.guestNames.length > 0 ? data.guestNames[0] : '';
    
    // Agregar la fila a la hoja
    sheet.appendRow([
      timestamp,
      asistira,
      numeroPersonas,
      nombresInvitados,
      nombrePrincipal
    ]);
    
    // Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Confirmación registrada exitosamente' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar error
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de prueba (opcional)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'API funcionando correctamente',
      timestamp: new Date()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Haz clic en el icono de **💾 Guardar** (o Ctrl+S)
5. Nombra el proyecto como "API RSVP Boda"

## Paso 3: Desplegar el Script como Web App

1. Haz clic en **Implementar** → **Nueva implementación**
2. En "Tipo", selecciona **Aplicación web**
3. Configura lo siguiente:
   - **Descripción:** "API para confirmaciones de boda"
   - **Ejecutar como:** "Yo" (tu cuenta)
   - **Quién tiene acceso:** "Cualquier persona"
4. Haz clic en **Implementar**
5. **IMPORTANTE:** Copia la URL que aparece (algo como `https://script.google.com/macros/s/AKfycby.../exec`)
6. Guarda esta URL, la necesitarás en el siguiente paso

## Paso 4: Autorizar el Script

1. La primera vez que despliegues, Google te pedirá autorización
2. Haz clic en **Revisar permisos**
3. Selecciona tu cuenta de Google
4. Haz clic en **Avanzado** → **Ir a [nombre del proyecto] (no seguro)**
5. Haz clic en **Permitir**

## ✅ ¡Listo!

Ahora tienes una URL de API que puedes usar en tu formulario. Pégala en el archivo `.env.local` cuando te lo pida el asistente.

## 📝 Notas Importantes

- La hoja de cálculo se actualizará automáticamente cada vez que alguien confirme
- Puedes compartir la hoja con otras personas para que vean las confirmaciones
- Los datos se guardan en tiempo real
- Es completamente gratuito
