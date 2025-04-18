import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PrimaryButton from "../components/PrimaryButton";
import OutlineButton from "../components/OutlineButton";

// Simple button component
const Button = ({ text, link }) => (
  <a
    href={link}
    className="mt-6 inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
  >
    {text}
  </a>
);

const ThreeBanner = () => {
  const particleCount = 2000;
  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 200;
    }
    return arr;
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-black">
      {/* Canvas with 3D Particles */}
      <Canvas camera={{ position: [0, 10, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} autoRotate />
        <gridHelper args={[100, 50, "#00ffff", "#00ffff"]} />
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="#00ffff" size={0.5} />
        </points>
      </Canvas>

      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#0008_30%,#0003)]"></div>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full overflow-y-auto z-10 text-white py-24 md:py-32 px-6 md:px-12">
        {/* Hero Content */}
        <div className="text-center">
          <span className="text-sm uppercase tracking-widest text-cyan-400 border border-cyan-500 px-6 py-2 rounded-full mb-6 inline-block">
            India’s Premier Digital Marketing Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Get More Traffic, Leads & Sales <br />
            <span className="text-gray-300">with Strategic, AI-Powered</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-12">
            Digital Marketing Solutions to Skyrocket Your Growth
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <PrimaryButton
              label="Start Growing Now"
              onClick={() => console.log("clicked")}
            />
            <OutlineButton
              label="Explore Our Services"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBanner;
