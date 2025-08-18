# Configuración de la API de Unsplash

## 🚀 Pasos para Configurar Unsplash

### 1. Crear una Cuenta de Desarrollador
1. Ve a [https://unsplash.com/developers](https://unsplash.com/developers)
2. Haz clic en "Register as a developer"
3. Completa el formulario de registro

### 2. Crear una Nueva Aplicación
1. Una vez registrado, ve a tu dashboard
2. Haz clic en "New Application"
3. Completa la información de tu aplicación:
   - **Application name**: "Frases Célebres" (o el nombre que prefieras)
   - **Description**: "Aplicación para generar frases célebres con imágenes"
   - **What are you building?**: "Personal project" o "Educational project"

### 3. Obtener las Credenciales
1. Una vez creada la aplicación, verás:
   - **Access Key**: Clave pública para usar en el frontend
   - **Secret Key**: Clave privada (mantener segura)
   - **Application ID**: ID de la aplicación

### 4. Configurar las Variables de Entorno
1. En la raíz de tu proyecto, crea un archivo `.env.local`
2. Agrega las siguientes variables:

```bash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=tu_access_key_aqui
UNSPLASH_SECRET_KEY=tu_secret_key_aqui
UNSPLASH_APPLICATION_ID=tu_application_id_aqui
```

### 5. Reiniciar el Servidor
1. Detén el servidor de desarrollo (`Ctrl+C`)
2. Reinicia con `npm run dev`

## 🔧 Solución de Problemas

### Error 403 (Forbidden)
- Verifica que tu Access Key sea correcta
- Asegúrate de que tu aplicación esté aprobada
- Revisa que no hayas excedido el límite de requests

### Error 401 (Unauthorized)
- Verifica que tu Secret Key sea correcta
- Asegúrate de que tu cuenta esté activa

### Límites de la API
- **Demo apps**: 50 requests por hora
- **Production apps**: 5000 requests por hora

## 📝 Notas Importantes

- **NUNCA** subas tu `.env.local` al repositorio
- El archivo `.env.example` es solo un template
- Las credenciales de demo en el código no funcionarán
- Para producción, considera usar variables de entorno del servidor

## 🎯 Próximos Pasos

Una vez configurado:
1. Los tests deberían pasar sin errores de Unsplash
2. El botón se deshabilitará correctamente durante la carga
3. Las imágenes se cargarán desde Unsplash en lugar de fallbacks
