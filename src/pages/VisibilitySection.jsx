import React from "react";
import Pic from "../static/images/pic2.jpg";
import Picture from "../static/images/pic3.jpg";

const VisibilitySection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image Stack */}
        <div className="relative w-full h-full">
          {/* Top Image */}
          <div className="rounded-xl overflow-hidden shadow-lg w-90 h-90 mb-4 relative z-20">
            <img src={Pic} alt="Team" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Image (slightly behind) */}
          <div className="rounded-xl overflow-hidden shadow-xl w-90 h-90 absolute top-50 left-16 z-10">
            <img
              src={Picture}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h3 className="text-xl font-medium text-gray-500 mb-2">
            Welcome to SIB Infotech
          </h3>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
            Guaranteed Visibility Through <br />
            <span className="text-cyan-600">
              Our Digital Marketing Services
            </span>
          </h1>
          <p className="text-gray-700 mb-6">
            <strong>SIB Infotech</strong> is a{" "}
            <span className="font-semibold">
              leading digital marketing agency in India
            </span>
            , with offices in Mumbai and New Delhi. As a Google Premier Partner,
            we specialize in{" "}
            <strong>
              SEO services, PPC management, social media marketing, website
              design, graphic design, and branding
            </strong>
            .
          </p>
          <p className="text-gray-700 mb-6">
            <strong>
              Our expertise helps businesses in India, the US, the UK, Canada,
              Australia
            </strong>{" "}
            and beyond boost online visibility, engagement, and conversions
            while delivering measurable ROI.
          </p>
          <p className="text-gray-700 mb-8">
            <strong>With 20+ years of experience</strong>, we leverage AI-driven
            marketing strategies, data analytics, and result-oriented campaigns
            to maximize growth. Whether you’re a startup or an enterprise, our
            customized digital marketing solutions ensure higher rankings,
            increased traffic, and improved lead generation to help you stay
            ahead of the competition.
          </p>

          {/* CTA Section */}
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-cyan-600 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition">
              Let’s Grow Your Business?
              <span className="bg-white text-cyan-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>

            <div className="flex items-center gap-3 text-gray-800">
              <div className="bg-cyan-60 text-cyan-400 p-2 rounded-full border border-cyan-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m0 12v2m0-6h6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Need Help</p>
                <p className="font-bold text-black">+91 92222–60000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilitySection;
