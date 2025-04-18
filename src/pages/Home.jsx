import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurFact from "../pages/OurFact";

import ServiceCard from "../pages/ServiceCard";

import ThreeBanner from "../pages/ThreeBanner";
import MarketingSection from "../pages/MarketingSection";
import VisibilitySection from "../pages/VisibilitySection";
import TeamPage from "../pages/TeamPage";
import StrategySection from "../pages/StrategySection";
import WhyJoinus from "../pages/WhyJoinus";
import StatsSection from "../pages/StatsSection";
import CallToAction from "../pages/CallToAction";

import StatsBanner from "../pages/StatsBanner";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <ThreeBanner />
      <VisibilitySection />
      <MarketingSection />
      <StrategySection />
      <OurFact />
      <TeamPage />
      <StatsSection />

      <TeamPage />
      <WhyJoinus />
      <StatsSection />
      <ServiceCard />
      <StatsBanner />
      <CallToAction />

      <Footer />
    </>
  );
};

export default Home;
