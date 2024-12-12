const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="animate-pulse">
          {/* Hero Image Section */}
          <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
            <div className="w-full h-[400px]" />
            
            {/* View Gallery Button */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-gradient-to-r from-blue-200 to-cyan-200 h-10 w-36 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white/60 mr-2" />
                <div className="h-4 w-24 bg-white/60 rounded" />
              </div>
            </div>

            {/* Booking Card */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl w-80">
              {/* Available Packages */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded-full bg-gray-200" />
                <div className="h-4 w-40 bg-gray-200 rounded" />
              </div>

              {/* Price */}
              <div className="h-8 bg-gray-200 rounded w-32 mb-2" />
              <div className="h-4 w-24 bg-gray-200 rounded mb-4" />

              {/* Book Now Button */}
              <div className="h-12 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg mb-4" />

              {/* Need Help Section */}
              <div className="text-center space-y-2">
                <div className="h-4 w-28 bg-gray-200 rounded mx-auto" />
                <div className="h-8 bg-gray-200 rounded-lg mx-auto" />
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-4 h-4 rounded-full bg-gray-200" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Title */}
            <div className="h-10 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg w-3/4 mb-6" />

            {/* Stats */}
            <div className="flex items-center gap-6 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-200" />
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {/* Overview */}
              <section className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-32" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                  <div className="h-4 bg-gray-200 rounded w-4/6" />
                </div>
              </section>

              {/* Itinerary */}
              <section className="space-y-6">
                <div className="h-6 bg-gray-200 rounded w-48" />
                {[1, 2, 3].map((day) => (
                  <div key={day} className="flex gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 mt-2" />
                    <div className="flex-grow space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-20" />
                      <div className="h-5 bg-gray-200 rounded w-48" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-5/6" />
                    </div>
                  </div>
                ))}
              </section>

              {/* Inclusions */}
              <section className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-36" />
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-200" />
                      <div className="h-4 bg-gray-200 rounded flex-grow" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Exclusions */}
              <section className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-36" />
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-200" />
                      <div className="h-4 bg-gray-200 rounded flex-grow" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Cancellation Policy */}
              <section className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-48" />
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-yellow-200" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shimmer; 