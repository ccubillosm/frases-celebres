// Tipos principales de la aplicación
export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
}

export interface QuoteDisplayProps {
  quote: Quote;
  imageUrl: string;
  isLoading?: boolean;
  onGenerateNew?: () => void;
}

export interface GenerateButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
    username: string;
  };
}
