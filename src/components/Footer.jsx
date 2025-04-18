// import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">hello@SibInfotech.com</h2>
          <p className="text-gray-400 mb-8">
            456 Creative Avenue, Brooklyn, NY 11201
          </p>

          <div>
            <p className="mb-2 font-medium">
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
                className="bg-cyan-400 text-white px-5 py-2 rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-32 h-32 rounded-full border border-cyan-500 flex items-center justify-center">
            <FiArrowDownRight className="text-4xl rotate-[45deg] text-cyan-400 " />

            <div className="absolute top-1/2 left-1/2 text-[10px] text-center text-gray-400 transform -translate-x-1/2 -translate-y-1/2 rotate-[20deg] w-28">
              SibInfoTech • TURNING IDEAS INTO PIXELS •
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap justify-between gap-6">
          <div>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 cursor-pointer">Portfolio</li>
              <li className="hover:text-cyan-400 cursor-pointer">Services</li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Privacy policy
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 cursor-pointer">About us</li>
              <li className="hover:text-cyan-400 cursor-pointer">Blog</li>
              <li className="hover:text-cyan-400 cursor-pointer">Contacts</li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Terms of use
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        © 2025 SibInfotech. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
