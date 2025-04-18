import React, { useState } from "react";
import PhoneImage from "../static/images/phone.jpg";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-3 text-left font-semibold text-lg"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="pb-4 text-gray-600">{content}</p>}
    </div>
  );
};

const StrategySection = () => {
  return (
    <div className="p-6 md:p-16 bg-white text-black">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-cyan-800 text-4xl font-bold leading-snug mb-4">
            Strategy. Creativity. Performance.
          </h2>
          <h3 className="text-2xl font-bold mb-2">
            How to Create a Successful Digital Marketing Strategy?
          </h3>
          <p className="text-gray-700 mb-6">
            Success in the digital world isn’t just about being seen—it’s about
            making an impact. We blend <strong>strategy</strong>,{" "}
            <strong>creativity</strong>, and{" "}
            <strong>data-driven insights</strong> to craft campaigns that
            captivate audiences and drive <strong>real business growth</strong>.
          </p>

          <div className="space-y-4">
            <AccordionItem
              title="Strategic Vision"
              content="Develop a roadmap with long-term goals that align with your brand’s mission."
            />
            <AccordionItem
              title="Creative Excellence"
              content="Create impactful and visually appealing content that resonates with your audience."
            />
            <AccordionItem
              title="Insight-Driven Research"
              content="Use analytics and market research to guide every marketing decision."
            />
            <AccordionItem
              title="Brand Identity & Design"
              content="Craft a strong brand presence with consistent and professional design."
            />
            <AccordionItem
              title="High-Impact Digital Marketing"
              content="Run campaigns that engage, convert, and retain customers."
            />
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2">
          <img
            src={PhoneImage}
            alt="Google map on phone"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StrategySection;
