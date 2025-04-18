const Items = [
  {
    id: "01",
    title: "Proven Track Record",
    content:
      "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple",
  },
  {
    id: "02",
    title: "Proven Track Record",
    content:
      "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple",
  },
  {
    id: "03",
    title: "Proven Track Record",
    content:
      "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple",
  },
  {
    id: "04",
    title: "Proven Track Record",
    content:
      "With 19+ years in the industry, we have delivered outstanding results for startups, SMEs, and enterprises across multiple",
  },
];

const WhyJoinus = () => {
  return (
    <section className="min-h-screen bg-white px-4 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
          <div className="col-span-3">
            <div className="sticky top-0 pt-8">
              <h2 className="text-3xl font-semibold">
                Why <span className="text-red-600">SIB Infotech</span>
              </h2>
              <p className="text-xl font-medium mt-2 mb-10">
                Measurable Growth,
                <br />
                Proven Results.
              </p>

              <div className="bg-black text-white p-6 rounded shadow-md">
                <h3 className="text-xl font-bold mb-2">
                  First Click to Final Conversion
                </h3>
                <p className="text-sm mb-4">
                  Powered by Social, Paid, Creative & Influencers — We Build
                  Bold Brands, Drive Results, and Spark Meaningful Connections.
                </p>
                <button className="bg-red-600 text-white font-bold py-2 px-4 rounded">
                  GET A FREE ANALYSIS
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="sticky top-0 mb-10 bg-white pb-5 pt-8 z-10">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {Items.map((item) => (
                <div
                  key={item.id}
                  className="col group p-4 hover:shadow-lg rounded bg-light duration-500 transition-all"
                >
                  <h5 className="transition-all duration-500 group-hover:text-red-600 font-semibold text-lg flex items-center justify-between">
                    {item.title}
                    <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] text-white text-2xl">
                      {item.id}
                    </span>
                  </h5>
                  <p className="text-sm mt-2">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinus;
