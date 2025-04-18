import React from "react";

const WhyJoinus = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Why <span className="text-red-600">SIB Infotech</span>
        </h2>
        <p className="text-xl font-medium mt-2">
          Measurable Growth,
          <br />
          Proven Results.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black text-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">
              First Click to Final Conversion
            </h3>
            <p className="text-sm mb-4">
              Powered by Social, Paid, Creative & Influencers — We Build Bold
              Brands, Drive Results, and Spark Meaningful Connections.
            </p>
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded">
              GET A FREE ANALYSIS
            </button>
          </div>

          <div>
            <h3 className="text-red-600 font-semibold text-lg">
              What Sets Us Apart from Other Digital Agencies in India?
            </h3>
            <p className="text-sm mt-2">
              With a sea of digital agencies in India, what makes SIB Infotech
              the preferred choice for brands looking to scale? We don't just
              execute campaigns — we create impactful, data-driven strategies
              that drive measurable growth and long-term success.
            </p>
          </div>

          <div>
            <h3 className="text-red-600 font-semibold text-lg">
              Proven Track Record
            </h3>
            <p className="text-sm mt-2">
              With 19+ years in the industry, we have delivered outstanding
              results for startups, SMEs, and enterprises across multiple...
            </p>

            <h3 className="text-red-600 font-semibold text-lg mt-6">
              Google Premier Partner
            </h3>
            <p className="text-sm mt-2">
              As a Google Premier Partner, we have access to exclusive tools,
              trends, and strategies that keep our clients ahead of...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinus;
