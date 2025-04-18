import React from "react";
import TeamPageImage from "../static/images/sib-team.jpg";
import PrimaryButton from "../components/PrimaryButton";
import OutlineButt from "../components/OutlineButt";

const TeamPage = () => {
  return (
    <section className="bg-white py-16" id="team">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-xl mb-4">Our Team</h3>
          <h2 className="text-4xl font-bold text-[#06132b] mb-6">
            Meet the Team Behind
            <br className="hidden md:block" /> Your Digital Success
          </h2>
          <p className="text-gray-600 mb-8">
            At SIB Infotech, we believe data-driven strategy and creative
            excellence go hand in hand. When you partner with us, you gain
            access to a powerhouse team of digital marketing experts, designers,
            developers, and strategists—all under one roof. We blend passion,
            precision, and performance to turn your vision into results that
            drive real business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <PrimaryButton
              label="Start Growing Now"
              onClick={() => console.log("clicked")}
            />
            <OutlineButt
              label="Explore Our Services"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={TeamPageImage}
            alt="Team working illustration"
            className="w-full h-auto object-cover rounded-[40px] shadow-md shadow-gray-800"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
