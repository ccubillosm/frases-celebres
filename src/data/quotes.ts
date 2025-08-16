// Base de datos de frases famosas
export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
}

export const QUOTES: Quote[] = [
  {
    id: 1,
    text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    author: "John Lennon",
    category: "vida"
  },
  {
    id: 2,
    text: "El éxito no es final, el fracaso no es fatal: es el coraje para continuar lo que cuenta.",
    author: "Winston Churchill",
    category: "exito"
  },
  {
    id: 3,
    text: "La creatividad es la inteligencia divirtiéndose.",
    author: "Albert Einstein",
    category: "creatividad"
  },
  {
    id: 4,
    text: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
    author: "Eleanor Roosevelt",
    category: "sueños"
  },
  {
    id: 5,
    text: "La felicidad no es algo hecho. Viene de tus propias acciones.",
    author: "Dalai Lama",
    category: "felicidad"
  },
  {
    id: 6,
    text: "La mejor manera de predecir el futuro es crearlo.",
    author: "Peter Drucker",
    category: "futuro"
  },
  {
    id: 7,
    text: "No hay elevación sin sacrificio.",
    author: "James Allen",
    category: "esfuerzo"
  },
  {
    id: 8,
    text: "La imaginación es más importante que el conocimiento.",
    author: "Albert Einstein",
    category: "imaginacion"
  },
  {
    id: 9,
    text: "El cambio es la única constante en la vida.",
    author: "Heráclito",
    category: "cambio"
  },
  {
    id: 10,
    text: "La sabiduría comienza en el asombro.",
    author: "Sócrates",
    category: "sabiduría"
  }
];

// Función para obtener una frase aleatoria
export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[randomIndex];
}

// Función para obtener frase por categoría
export function getQuoteByCategory(category: string): Quote | null {
  const filteredQuotes = QUOTES.filter(quote => 
    quote.category.toLowerCase() === category.toLowerCase()
  );
  
  if (filteredQuotes.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}
