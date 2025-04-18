import React from "react";
import CountUp from "react-countup";

const StatsBanner = () => {
  return (
    <div className="relative w-full py-20 bg-slate-950 text-white overflow-hidden">
      <div className="absolute -top-[200px] -left-[200px] w-[400px] h-[400px] rounded-full bg-radial from-white to-transparent opacity-10"></div>
      <div className="absolute -bottom-[200px] -right-[200px] w-[400px] h-[400px] rounded-full bg-radial from-white to-transparent opacity-10"></div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="col-span-2">
            <h2 className="text-4xl font-semibold">Our Digital Achievements</h2>
          </div>
          <div className="col-span-1">
            <div className="flex items-baseline gap-1">
              <CountUp
                start={0}
                end={20}
                duration={2}
                separator=","
                className="text-[60px] font-medium bg-gradient-to-r from-white via-gray-400 to-gray-700 inline-block text-transparent bg-clip-text"
              />
              <span className="text-[30px] font-light text-cyan-400">+</span>
            </div>
            <h6 className="text-lg text-gray-300 mb-2">Projects Completed</h6>
          </div>
          <div className="col-span-1">
            <div className="flex items-baseline gap-1">
              <CountUp
                start={0}
                end={100}
                duration={2}
                separator="x"
                className="text-[60px] font-medium bg-gradient-to-r from-white via-gray-400 to-gray-700 inline-block text-transparent bg-clip-text"
              />
              <span className="text-[30px] font-light text-cyan-400">%</span>
            </div>
            <h6 className="text-lg text-gray-300 mb-2">Growth Rate</h6>
          </div>
          <div className="col-span-1">
            <div className="flex items-baseline gap-1">
              <CountUp
                start={0}
                end={570}
                duration={2}
                separator=","
                className="text-[60px] font-medium bg-gradient-to-r from-white via-gray-400 to-gray-700 inline-block text-transparent bg-clip-text"
              />
              <span className="text-[30px] font-light text-cyan-400">+</span>
            </div>
            <h6 className="text-lg text-gray-300 mb-2">Happy Clients</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
