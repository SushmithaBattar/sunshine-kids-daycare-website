import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-500">© 2024 Sunshine Kids Day Care. All rights reserved.</p>
        <p className="text-gray-500">
          Contact us:{" "}
          <a href="mailto:info@sunshinekidsdaycare.com" className="text-blue-500">
            info@sunshinekidsdaycare.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
