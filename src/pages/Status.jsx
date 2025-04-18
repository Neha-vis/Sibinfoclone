import { motion } from "framer-motion";
import Service from "../pages/Service";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Status = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#707a8a] via-[#5b6380] to-[#4a5161]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white flex items-center justify-between">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Transform Your Business with Cutting-Edge Solutions
            </h2>
            <p className="text-lg mb-4">
              We provide tailor-made solutions to fuel your growth. Explore our
              services and join the digital revolution.
            </p>
            <button className="bg-yellow-500 text-black py-3 px-6 rounded-full hover:bg-yellow-400 transition">
              Get Started
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Business Growth"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* count up */}

        <div className="flex justify-start space-x-8 mr-8">
          <motion.div
            className="text-5xl font-bold flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <CountUp start={0} end={1000} duration={3} />
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </motion.div>
          <motion.div
            className="text-5xl font-bold flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <CountUp start={0} end={500} duration={3} />
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </motion.div>
          <motion.div
            className="text-5xl font-bold flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <CountUp start={0} end={200} duration={3} />
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Status;
