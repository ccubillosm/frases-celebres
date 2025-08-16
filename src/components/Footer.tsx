export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Frases Célebres. Inspírate con las mejores frases de la historia.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
            <span>Imágenes de Unsplash</span>
            <span>•</span>
            <span>Desarrollado con Next.js</span>
            <span>•</span>
            <span>Estilizado con Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
