import React from "react";
import heroImage from "../static/images/sib-team.jpg"; // Apna image path yahan do
import Image from "../static/images/image.png"; //
import PrimaryButton from "../components/PrimaryButton";
import OutlineButton from "../components/OutlineButton";

const OurFact = () => {
  return (
    <section className="bg-black/90 text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left: Image with Logo Badge */}
        <div className="relative w-[450px] h-[500px] mx-auto">
          <img
            src={heroImage}
            alt="Team using tablet"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />

          {/* Badge with Logo centered at the top-right corner */}
          <div className="absolute top-4 right-2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg border-4 border-white">
            <img
              src={Image}
              alt="Company Logo"
              className="w-15 h-15 object-contain mb-1"
            />
            <span className="text-xs text-cyan-600 font-semibold text-center mb-2">
              Premium Services
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-cyan-400 uppercase text-sm font-semibold tracking-wider mb-2">
            Who we are at Buzz Digital Agency
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Unleash Your Potential in the Digital Realm with{" "}
            <span className="text-white">Buzz Digital Agency.</span>
          </h1>
          <p className="text-gray-300 mb-4">
            Welcome to Buzz Digital Agency, where your business growth is
            powered by precision and creativity. As a premier B2B marketing
            agency, we specialize in transforming your digital landscape.
          </p>
          <p className="text-gray-300 mb-4">
            We believe in building partnerships, not just client lists. We’re
            committed to transparency, collaboration, and results-driven
            strategies tailored to ensure maximum impact and ROI.
          </p>
          <p className="text-gray-300 mb-6">
            Trust us to be the catalyst for your digital success. Let’s create
            something remarkable together.
          </p>
          <PrimaryButton
            label="Start Growing Now"
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
    </section>
  );
};

export default OurFact;
