export default function Header() {
    return (
      <header className="bg-[#0A2540] text-white py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">Whitespace</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Solutions</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </nav>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>
    );
  }