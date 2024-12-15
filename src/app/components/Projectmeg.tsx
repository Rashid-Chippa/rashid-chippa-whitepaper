export default function ProjectManagement() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Project Management</h2>
            <p className="text-gray-600 mb-4">
              Manage your team’s tasks, timelines, and progress effortlessly.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }