export default function Loading() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-300 aspect-square rounded-lg"></div>
            <div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
              <div className="flex space-x-4">
                <div className="h-10 bg-gray-300 rounded flex-1"></div>
                <div className="h-10 bg-gray-300 rounded flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }