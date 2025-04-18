import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Swiper1 from "../static/images/slider1.jpg";
import Swiper2 from "../static/images/slider2.jpg";
import Swiper3 from "../static/images/slider3.jpg";
import Swiper4 from "../static/images/slider4.jpg";

const industries = [
  {
    title: "Online Learning",
    img: Swiper1,
    backText: "Grow your online learning brand!",
  },
  {
    title: "Beauty & Fashion",
    img: Swiper2,
    backText: "Boost your fashion empire!",
  },
  {
    title: "Real Estate & Projects",
    img: Swiper3,
    backText: "Attract serious buyers!",
  },
  {
    title: "E-commerce & Retail",
    img: Swiper4,
    backText: "Maximize your digital sales!",
  },
  {
    title: "E-commerce & Retail",
    img: Swiper2,
    backText: "Maximize your digital sales!",
  },
  {
    title: "E-commerce & Retail",
    img: Swiper1,
    backText: "Maximize your digital sales!",
  },
];

export default function IndustrySwiper() {
  return (
    <section className="bg-white py-15 px-4">
      <div className="text-center mb-15">
        <h2 className="text-4xl font-bold text-cyan-800">
          Digital Marketing{" "}
          <span className="font-extrabold">for Every Industry</span>
        </h2>
        <p className="text-gray-700 mt-2 max-w-3xl mx-auto">
          We deliver custom digital marketing solutions tailored to your
          industry.
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {industries.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front  bg-cyan-900 rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-70 object-cover"
                  />
                  <div className="p-4 text-center font-semibold text-lg">
                    {item.title}
                  </div>
                </div>
                <div className="flip-card-back rounded-xl p-4 bg-black text-cyan-400 flex items-center justify-center text-center">
                  <p className="text-white">{item.backText}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
