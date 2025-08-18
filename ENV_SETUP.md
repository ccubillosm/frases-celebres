# Configuración de Variables de Entorno

## 🚀 Pasos para Configurar

### 1. Crear Archivo .env.local
En la raíz de tu proyecto, crea un archivo llamado `.env.local` con el siguiente contenido:

```bash
# Unsplash API Configuration
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=-xTl6Uj82Gys3gIS0tN833BT_PB68qmI_PykPMf77uc
UNSPLASH_SECRET_KEY=3e-s2my6ieV8bF5ZM6yxkIY2UjiWGDQHXyzWhE0cPcM
UNSPLASH_APPLICATION_ID=792387
```

### 2. Reiniciar el Servidor
1. Detén el servidor de desarrollo (`Ctrl+C`)
2. Reinicia con `npm run dev`

### 3. Verificar en la Consola
Deberías ver mensajes como:
- "Intentando obtener imagen de Unsplash: [URL]"
- "Imagen obtenida exitosamente de Unsplash: [URL]"

En lugar de:
- "Unsplash no está configurado, usando imagen de fallback"

## 🔧 Solución de Problemas

### Si sigues viendo el mensaje de fallback:
1. Verifica que el archivo `.env.local` esté en la raíz del proyecto
2. Asegúrate de que no haya espacios extra en las variables
3. Reinicia completamente el servidor

### Si ves error 403:
- Las credenciales pueden haber expirado
- Necesitarás generar nuevas credenciales en [Unsplash Developers](https://unsplash.com/developers)

## 📝 Notas Importantes

- **NUNCA** subas el archivo `.env.local` al repositorio
- Este archivo ya está en `.gitignore`
- Las credenciales son sensibles, mantenlas seguras
