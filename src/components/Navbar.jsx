import { Menu, Phone } from "lucide-react"; // Import the Phone icon
import logo from "../static/images/image.png";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-16" /> {/* Adjust logo size */}
      </div>

      {/* Right: Contact Info, WhatsApp, and Phone */}
      <div className="hidden md:flex items-center space-x-5">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919222260000"
          className="bg-green-600 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="h-6 w-6"
          />
          <span className="text-white">WhatsApp</span>
        </a>

        {/* Phone Number with Icon */}
        <div className="text-right flex items-center space-x-2">
          <Phone className="text-gray-600 w-5 h-5" />
          <p className="text-red-600 font-bold text-xl">92222-60000</p>
        </div>

        {/* Email */}
        <p className="text-sm text-gray-600">contact@sibinfotech.com</p>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </header>
  );
}
