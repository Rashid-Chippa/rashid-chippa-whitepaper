export default function WorkTogether() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Work Together</h2>
          <p className="text-gray-600 mb-4">
            Collaborate in real-time to achieve your goals faster and smarter.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Try It Now</button>
        </div>
      </section>
    );
  }