//Note: components
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import ChooseUs from "components/ChooseUs.js";
import OurService from "components/OurService";
import Steps from "components/Steps";
import Pricing from "components/Pricing";
import Features from "components/Features";
//import Dedicating from "components/shared/Dedicating";
import Footer from "components/Footer";
import Testimonials from "components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ChooseUs />
      <OurService />
      <Steps />
      <Pricing />
      <Features />
      {/* <Dedicating /> */}
      <Testimonials/>
      <Footer />
    </div>
  );
}
export default App;
