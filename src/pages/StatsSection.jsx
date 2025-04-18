import PhoneImage from "../static/images/phone.jpg";

const StatsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400">Our Facts</p>
        <h2 className="text-4xl font-bold">
          Turning Clicks into{" "}
          <span className="text-cyan-600">Conversions.</span>
        </h2>
        <p className="mt-2">
          Optimized for <span className="text-cyan-600">Success</span>.
          Engineered for <span className="text-cyan-600">Growth</span>.
        </p>
      </div>

      <div className="relative flex flex-col items-center lg:flex-row lg:justify-center gap-10">
        {/* Left Stats */}
        <div className="flex flex-col gap-10">
          <StatBox
            number="200K"
            label="Keywords ranked on first page of Google "
            extraClass="mr-5"
          />
          <StatBox
            number="10M+"
            label="Cumulative website visits for clients per month"
            extraClass="mr-4"
          />
          <StatBox
            number="7X"
            label="Return on marketing investment"
            extraClass="mt-2"
          />
        </div>

        {/* Center Image */}
        <div className="relative z-10 w-[300px] h-[350px]">
          <img
            src={PhoneImage}
            alt="Phone"
            className="w-full h-full object-cover rounded-3xl border-[4px] border-gray-600 shadow-xl"
          />
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-10">
          <StatBox
            number="340%"
            label="Average More Impressions in Search engines"
            extraClass="mt-6"
          />
          <StatBox
            number="300%"
            label="Average increase in Inbound Leads"
            extraClass="mt-2"
          />
          <StatBox
            number="35%"
            label="Average reduction in Bounce Rate"
            extraClass="mt-5"
          />
        </div>
      </div>
    </section>
  );
};

// Updated StatBox to accept `extraClass`
const StatBox = ({ number, label, extraClass = "" }) => (
  <div
    className={`bg-[#1e1e1e] p-5 rounded-md w-56 text-center shadow-lg border border-gray-700 ${extraClass}`}
  >
    <h3 className="text-3xl font-bold text-cyan-600">{number}</h3>
    <p className="text-sm text-gray-300 mt-2">{label}</p>
  </div>
);

export default StatsSection;
