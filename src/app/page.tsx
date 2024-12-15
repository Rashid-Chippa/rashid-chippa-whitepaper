import React from "react";
import Header from "./components/Header";
import Herosec from "./components/Herosec";
import Projectmeg from "./components/Projectmeg";
import Worktog from "./components/Worktog";
import Workeve from "./components/Workeve";
import Sponsor from "./components/Sponsor";
import Footer from "./Footer";




// export default function Home() {
//   return (
//     <div className="font-sans">
//       {/* Header */}
//       <header className="bg-[#0A2540] text-white py-6">
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <div className="text-2xl font-bold">Whitespace</div>
//           <nav>
//             <ul className="flex space-x-4">
//               <li><a href="#" className="hover:underline">Features</a></li>
//               <li><a href="#" className="hover:underline">Solutions</a></li>
//               <li><a href="#" className="hover:underline">Resources</a></li>
//               <li><a href="#" className="hover:underline">Pricing</a></li>
//             </ul>
//           </nav>
//           <button className="bg-yellow-400 text-black px-4 py-2 rounded">Sign Up</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-[#0A2540] text-white py-20">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0">
//             <h1 className="text-4xl font-bold mb-4">Get More Done with whitespace</h1>
//             <p className="text-lg mb-4">
//               Collaborate with your team and stay on top of tasks seamlessly.
//             </p>
//             <button className="bg-blue-600 px-4 py-2 rounded">Get Started</button>
//           </div>
//           <div className="w-full md:w-1/2">
//             <div className="h-64 bg-gray-300 rounded-lg"></div>
//           </div>
//         </div>
//       </section>

//       {/* Project Management */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0">
//             <h2 className="text-3xl font-bold mb-4">Project Management</h2>
//             <p className="text-gray-600 mb-4">
//               Manage your team’s tasks, timelines, and progress effortlessly.
//             </p>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
//           </div>
//           <div className="w-full md:w-1/2">
//             <div className="h-64 bg-gray-300 rounded-lg"></div>
//           </div>
//         </div>
//       </section>

//       {/* Work Together */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 text-center">
//           <div className="relative w-48 h-48 mx-auto mb-6">
//             {/* Placeholder circles */}
//             <div className="absolute inset-0 flex justify-center items-center">
//               <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
//             </div>
//             <div className="absolute top-0 right-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
//             <div className="absolute bottom-0 left-10 w-4 h-4 bg-green-400 rounded-full"></div>
//           </div>
//           <h2 className="text-3xl font-bold mb-4">Work Together</h2>
//           <p className="text-gray-600 mb-4">
//             Collaborate in real-time to achieve your goals faster and smarter.
//           </p>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded">Try It Now</button>
//         </div>
//       </section>

//       {/* Work Everywhere */}
//       <section className="py-20 bg-[#0A2540] text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">Your work, everywhere you are</h2>
//           <p className="mb-6">
//             Access your projects anytime, anywhere, on any device.
//           </p>
//           <button className="bg-blue-600 px-4 py-2 rounded">Sign Up Now</button>
//         </div>
//       </section>

//       {/* Sponsors */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-6 text-center">
//           <h3 className="text-2xl font-bold mb-6">Our Sponsors</h3>
//           <div className="flex justify-center space-x-8">
//             <span className="text-gray-600 text-lg">Apple</span>
//             <span className="text-gray-600 text-lg">Microsoft</span>
//             <span className="text-gray-600 text-lg">Slack</span>
//             <span className="text-gray-600 text-lg">Google</span>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#0A2540] text-white py-6">
//         <div className="container mx-auto px-6 text-center">
//           <p>© 2024 Whitespace. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <Header />
      <Herosec />
      <Projectmeg />
      <Worktog />
      <Workeve />
      <Sponsor />
      <Footer />
    </div>
  );
}
