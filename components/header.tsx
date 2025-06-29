import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-800">
          Sunshine Kids Day Care
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-800 hover:text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/programs" className="text-gray-800 hover:text-gray-600">
                Programs
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
