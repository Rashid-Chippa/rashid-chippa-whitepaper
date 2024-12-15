export default function Hero() {
    return (
      <section className="bg-[#0A2540] text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Get More Done with whitespace</h1>
            <p className="text-lg mb-4">Collaborate with your team and stay on top of tasks seamlessly.</p>
            <button className="bg-blue-600 px-4 py-2 rounded">Get Started</button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }