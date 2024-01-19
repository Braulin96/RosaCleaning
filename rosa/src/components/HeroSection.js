//Note: components
import Lottie from "lottie-react";
import { Link } from "react-scroll";
//Note: images, lottie:
import Vector from "assets/vector.png";
import { ImCheckboxChecked } from "react-icons/im";
import WomanCleaningAnimation from "assets/cleanLottie.json";
import ScrollAnimation from "./shared/animation/ScrollAnimation";

const HeroSection = () => {
  return (
    <div className="bg-white" id="hero">
      <div className="flex justify-around sm:py-32 py-20 max-w-7xl mx-auto px-4 flex-wrap space-y-12">
        <div className="my-auto space-y-4">
          <ScrollAnimation
            data="fade-in"
            easing="ease-in-sine"
            duration="500"
            delay="500"
          >
            <h1 className="text-[40px] font-semibold text-[#00284F]">
              The best
              <span className="text-[#0171E3] ml-2">Cleaning Service</span>
              <br />
              Transforming Spaces, Elevating Lives
            </h1>

            <div className="flex space-x-10">
              <a
                href="mailto:RosaCleaning@gmail.com"
                className="px-6 py-2 bg-[#0171E3] rounded-md font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4"
              >
                Let's Talk
              </a>
              <Link
                className="px-6 py-2 cursor-pointer bg-[#E6F1FC] rounded-md font-bold text-[#0171E3] hover:text-opacity-80  sm:w-auto w-full mt-4"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </div>

            <div className="pt-6 text-[#00284F]">
              <div className="flex gap-x-2">
                <ImCheckboxChecked className="my-auto" color="#E6F1FC" />
                <p className="text-sm">
                  We’re Local - Family Owned and Operated
                </p>
              </div>
              <div className="flex gap-x-2 mt-2">
                <ImCheckboxChecked className="my-auto" color="#E6F1FC" />
                <p className="text-sm">
                  We’re Quick - Same Day Pick Up and Drop Off
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
            data="fade-in"
            easing="ease-in-sine"
            duration="500"
            delay="1000"
          >
          <div className="my-auto relative">
            <img
              className="sm:w-[30rem] sm:min-w-[20rem] sm:max-w-[30rem] max-w-[20rem] hover:opacity-90"
              src={Vector}
              alt="painting"
            />
            <div className="absolute top-0">
              <Lottie animationData={WomanCleaningAnimation} loop={true} />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
export default HeroSection;
