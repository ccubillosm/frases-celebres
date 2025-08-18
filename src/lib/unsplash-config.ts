// Configuración de la API de Unsplash
// Para obtener credenciales válidas:
// 1. Ve a https://unsplash.com/developers
// 2. Crea una nueva aplicación
// 3. Copia las credenciales aquí

export const UNSPLASH_CONFIG = {
  // Credenciales de Unsplash
  ACCESS_KEY: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '-xTl6Uj82Gys3gIS0tN833BT_PB68qmI_PykPMf77uc',
  SECRET_KEY: process.env.UNSPLASH_SECRET_KEY || '3e-s2my6ieV8bF5ZM6yxkIY2UjiWGDQHXyzWhE0cPcM',
  APPLICATION_ID: process.env.UNSPLASH_APPLICATION_ID || '792387',
  BASE_URL: 'https://api.unsplash.com',
};

// Verificar si las credenciales están configuradas
export function isUnsplashConfigured(): boolean {
  return UNSPLASH_CONFIG.ACCESS_KEY !== 'your_access_key_here' && 
         UNSPLASH_CONFIG.ACCESS_KEY !== undefined;
}
