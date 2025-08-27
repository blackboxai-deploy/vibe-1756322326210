export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hello World
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Welcome to your first Next.js application! This is a simple, clean, and modern Hello World page.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="px-6 py-3 bg-white rounded-lg shadow-lg border border-gray-200">
              <span className="text-gray-700 font-medium">Built with Next.js</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-lg border border-gray-200">
              <span className="text-gray-700 font-medium">Styled with Tailwind CSS</span>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl">
              <span className="text-white text-lg font-semibold">Ready to build amazing things!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}