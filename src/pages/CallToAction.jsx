import React from "react";
import BgImage from "../static/images/bgimage.jpg";

const CallToAction = () => {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImage})` }} // Use the imported image directly
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Darken the overlay more for better visibility of text */}
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          We've done it for them,
          <br />
          We'll do it for you.
        </h2>
        <button className="mt-6 px-6 py-3 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
          LET'S MAKE YOU FAMOUS
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
