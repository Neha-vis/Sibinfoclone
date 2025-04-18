import React from "react";
import CountUp from "react-countup";

const StatsBanner = () => {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-r from-blue-800 to-purple-900 text-white">
      {/* Grid Background with subtle effect */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-opacity-30 bg-cover"
          style={{ backgroundImage: "url(https://via.placeholder.com/1500)" }}
        >
          <div className="grid grid-cols-12 gap-2 h-full">
            <div className="col-span-2 border-r border-white opacity-20"></div>
            <div className="col-span-2 border-r border-white opacity-20"></div>
            <div className="col-span-2 border-r border-white opacity-20"></div>
            <div className="col-span-2 border-r border-white opacity-20"></div>

            {/* You can adjust the number of columns based on your preference */}
          </div>
        </div>
      </div>

      {/* Banner Content with centered stats */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-6">
        <h2 className="text-4xl font-semibold mb-6">
          Our Digital Achievements
        </h2>
        <div className="flex justify-around items-center space-x-6">
          {/* Stats Boxes */}
          <div className="p-6 bg-opacity-60 bg-black rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
            <CountUp
              start={0}
              end={20}
              duration={2}
              separator=","
              className="text-4xl font-bold text-yellow-400"
            />
          </div>
          <div className="p-6 bg-opacity-60 bg-black rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Growth Rate</h3>
            <CountUp
              start={0}
              end={3}
              duration={2}
              suffix="x"
              className="text-4xl font-bold text-yellow-400"
            />
          </div>
          <div className="p-6 bg-opacity-60 bg-black rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-2">Happy Clients</h3>
            <CountUp
              start={0}
              end={120}
              duration={2}
              separator=","
              className="text-4xl font-bold text-yellow-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
