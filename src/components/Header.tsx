import { APP_CONFIG } from '@/lib/constants';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg 
                className="h-8 w-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">{APP_CONFIG.NAME}</h1>
              <p className="text-blue-100 text-sm">{APP_CONFIG.DESCRIPTION}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-blue-100">
              v{APP_CONFIG.VERSION}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
