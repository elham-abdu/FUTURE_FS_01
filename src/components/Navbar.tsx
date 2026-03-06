function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      {/* Logo */}
      <h1 className="text-xl font-bold">Elham.dev</h1>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-gray-300">
        <li><a href="#home" className="hover:text-white">Home</a></li>
        <li><a href="#projects" className="hover:text-white">Projects</a></li>
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>

      {/* Hero Buttons */}
      <div className="hidden md:flex gap-4">
        <a
          href="#projects"
          className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-700 px-6 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Contact Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar