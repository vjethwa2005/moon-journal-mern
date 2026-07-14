import Features from "../../components/Features";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar1 from "../../components/Navbar1";
import View from "../../components/View";
import Why from "../../components/Why";
function Home() {
  return (
    <>
      <Navbar1 />
      <HeroSection />
      <div id="features"><Features /></div>
      <div id="about"><View /></div>
      <div id="pricing"><Why /></div>
      <Footer />
    </>
  );
}

export default Home;
