// Configuración de la API de Unsplash
export const UNSPLASH_CONFIG = {
  ACCESS_KEY: '-xTl6Uj82Gys3gIS0tN833BT_PB68qmI_PykPMf77uc',
  SECRET_KEY: '3e-s2my6ieV8bF5ZM6yxkIY2UjiWGDQHXyzWhE0cPcM',
  APPLICATION_ID: '792387',
  BASE_URL: 'https://api.unsplash.com',
};

// Función para obtener imagen aleatoria de Unsplash
export async function getRandomImage(query?: string): Promise<string> {
  try {
    const searchQuery = query || 'inspiration';
    const response = await fetch(
      `${UNSPLASH_CONFIG.BASE_URL}/photos/random?query=${searchQuery}&client_id=${UNSPLASH_CONFIG.ACCESS_KEY}&orientation=landscape&w=800&h=600`
    );
    
    if (!response.ok) {
      throw new Error(`Error al obtener imagen de Unsplash: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.urls?.regular) {
      throw new Error('Formato de respuesta de Unsplash inválido');
    }
    
    return data.urls.regular;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    // Retornar imagen placeholder por defecto
    return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
  }
}
