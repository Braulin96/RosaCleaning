import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/shared/HeroSection";
import Services from "./components/shared/Services";
import Testimonial from "./components/Testimonial";
import Price from "./components/shared/Price";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonial />
      <Price/>
    </div>
  );
}
export default App;
