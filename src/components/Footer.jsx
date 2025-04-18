const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Links */}
        <div className="space-x-4 mb-4">
          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="/services" className="hover:text-blue-400 transition">
            Services
          </a>
          <a href="/contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} SIB Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
