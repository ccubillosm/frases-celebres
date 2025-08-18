import { UNSPLASH_CONFIG, isUnsplashConfigured } from './unsplash-config';

// Función para obtener imagen aleatoria de Unsplash
export async function getRandomImage(query?: string): Promise<string> {
  // Si Unsplash no está configurado, usar imagen de fallback directamente
  if (!isUnsplashConfigured()) {
    console.warn('Unsplash no está configurado, usando imagen de fallback');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getFallbackImage(query);
  }

  try {
    const searchQuery = query || 'inspiration';
    const url = `${UNSPLASH_CONFIG.BASE_URL}/photos/random?query=${searchQuery}&client_id=${UNSPLASH_CONFIG.ACCESS_KEY}&orientation=landscape&w=800&h=600`;
    
    console.log(`Intentando obtener imagen de Unsplash: ${url}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error de Unsplash (${response.status}): ${errorText}`);
      
      if (response.status === 403) {
        console.error('Error 403: Las credenciales pueden ser inválidas o haber expirado');
        console.error('Access Key:', UNSPLASH_CONFIG.ACCESS_KEY);
        console.error('Application ID:', UNSPLASH_CONFIG.APPLICATION_ID);
      }
      
      throw new Error(`Error al obtener imagen de Unsplash: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    
    if (!data.urls?.regular) {
      throw new Error('Formato de respuesta de Unsplash inválido');
    }
    
    console.log('Imagen obtenida exitosamente de Unsplash:', data.urls.regular);
    return data.urls.regular;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    // Retornar imagen placeholder por defecto con delay para simular carga
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getFallbackImage(query);
  }
}

// Función para obtener imagen de fallback
function getFallbackImage(query?: string): string {
  const fallbackImages = {
    'vida': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'exito': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    'creatividad': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    'sueños': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    'felicidad': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
    'futuro': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    'esfuerzo': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'imaginacion': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    'cambio': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    'sabiduría': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  };
  
  const category = query?.toLowerCase() || 'inspiration';
  return fallbackImages[category as keyof typeof fallbackImages] || fallbackImages['vida'];
}
