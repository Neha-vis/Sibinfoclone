import logo from "../static/images/image.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="col-span-1 md:col-span-3">
            <img
              src={logo}
              alt="Logo"
              className="bg-white p-3 rounded-lg w-[200px]"
            />
            <p className="mb-2 mt-5 font-medium">
              Subscribe to our Digital Marketing Agency
            </p>
            <form className="flex items-center bg-white rounded-full overflow-hidden max-w-sm">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 text-black w-full outline-none"
              />
              <button
                type="submit"
                className="bg-cyan-400 text-black px-5 py-2 rounded-full"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="col-span-1">
            <ul className="space-y-2">
              <li className="hover:text-cyan-600 cursor-pointer">Home</li>
              <li className="hover:text-cyan-600 cursor-pointer">Portfolio</li>
              <li className="hover:text-cyan-600 cursor-pointer">Services</li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Privacy policy
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="space-y-2">
              <li className="hover:text-cyan-600 cursor-pointer">About us</li>
              <li className="hover:text-cyan-600 cursor-pointer">Blog</li>
              <li className="hover:text-cyan-600 cursor-pointer">Contacts</li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Terms of use
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 bg-gray-500 h-0.5 opacity-25" />

        <div className="flex items-center justify-between gap-5 flex-wrap">
          <p>&copy; 2025 SibInfotech. All rights reserved</p>
          <p>Designed by Neha Vishwakarma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
