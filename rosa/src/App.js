import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/shared/HeroSection";
import Services from "./components/shared/Services";
import Testimonial from "./components/Testimonial";
import Price from "./components/shared/Price";
import Footer from "./components/shared/Footer";
import ChooseUs from "components/shared/ChooseUs";
import OurService from "components/shared/OurService";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ChooseUs/> 
      <OurService />
      {/* {/* <Services />
      <Testimonial /> */}
      {/* <Price/> */}
      {/* <Footer/>   */}
    </div>
  );
}
export default App;
