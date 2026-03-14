import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import QuickServices from "../components/home/QuickServices";
import PermissionAdvisorPreview from "../components/home/PermissionAdvisorPreview";
import TrackerPreview from "../components/home/TrackerPreview";
import HowItWorks from "../components/home/HowItWorks";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QuickServices />
      <PermissionAdvisorPreview />
      <TrackerPreview />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Home;