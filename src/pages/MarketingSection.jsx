import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

import hero from "../static/images/hero.jpg";
import OutlineButton from "../components/OutlineButton";

const MarketingSection = () => {
  return (
    <section className="relative w-full py-20 bg-slate-950 text-white overflow-hidden">
      <div className="absolute -top-[200px] -left-[200px] w-[400px] h-[400px] rounded-full bg-radial from-white to-transparent opacity-10"></div>
      <div className="absolute -bottom-[200px] -right-[200px] w-[400px] h-[400px] rounded-full bg-radial from-white to-transparent opacity-10"></div>

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT Content */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-cyan-600 text-slate-950 px-4 py-2 rounded-full mb-4">
              Marketing That Drives Results
            </span>

            <h2 className="text-4xl font-bold mb-4 !text-white">
              Elevate Your Brand with <br />
              <span className="!text-cyan-600">Data Driven Marketing</span>
            </h2>

            <p className="!text-gray-300 mb-6 max-w-md">
              We craft impactful marketing strategies powered by creativity, AI,
              and data analytics helping you scale faster and smarter.
            </p>

            <OutlineButton
              label="Explore Our Services"
              onClick={() => console.log("clicked")}
            />

            {/* Trust Badge */}
            <div className="flex items-center gap-4 mt-4 bg-slate-900 shadow-md border border-cyan-950 rounded-xl px-6 py-4 w-fit">
              <MdOutlineSupportAgent className="text-cyan-600" size={40} />

              <div>
                <p className="text-cyan-600 font-semibold text-sm">
                  900k+ Customers
                </p>
                <p className="text-gray-300 text-sm">
                  satisfied with our service
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT Content: Image Composition */}
          <div className="relative w-full">
            {/* Main image box */}
            <div className="bg-white border-4 border-black rounded-2xl p-2 relative z-10 shadow-xl">
              <img
                src={hero}
                alt="Marketing Girl"
                className="rounded-xl w-full object-cover"
              />
              {/* Yellow CTA inside the image */}
              <div className="absolute bottom-1 left-1 bg-cyan-400 text-black font-semibold px-4 py-2 rounded-full shadow-md"></div>
            </div>

            {/* Graph Overlay */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white border-4 border-black rounded-xl p-2 z-20 shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
                alt="Growth Chart"
                className="w-20 h-20"
              />
              <p className="text-sm font-semibold mt-2 text-center">Growth</p>
            </div>

            {/* Floating icons (Optional - static) */}
            <div className="absolute -top-6 right-4 flex gap-2">
              <span className="w-4 h-4 bg-cyan-600 rounded-full" />
              <span className="w-4 h-4 bg-cyan-600 rounded-full" />
              <span className="w-4 h-4 bg-yellow-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
