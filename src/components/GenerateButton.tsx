'use client';

interface GenerateButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function GenerateButton({ 
  onClick, 
  isLoading = false, 
  disabled = false,
  children 
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        relative inline-flex items-center justify-center px-8 py-4 
        text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 
        dark:from-blue-500 dark:to-purple-500
        rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 
        transition-all duration-300 ease-in-out
        ${disabled || isLoading 
          ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-lg' 
          : 'hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 active:transform-none active:scale-95'
        }
        focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring-opacity-50
        ${isLoading ? 'animate-pulse' : ''}
      `}
    >
      {isLoading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Generando...
        </>
      ) : (
        <>
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          </svg>
          {children || 'Generar Nueva Frase'}
        </>
      )}
    </button>
  );
}
