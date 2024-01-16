//Note: components
import Navbar from "components/shared/Navbar";
import HeroSection from "components/shared/HeroSection";
import Testimonial from "components/Testimonial";
import ChooseUs from "components/shared/ChooseUs.js";
import OurService from "components/shared/OurService";
import Steps from "components/shared/Steps";
import Pricing from "components/shared/Pricing";
import Features from "components/shared/Features";
//import Dedicating from "components/shared/Dedicating";
import Footer from "components/shared/Footer";
import Testimonials from "components/shared/Testimonials";

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
