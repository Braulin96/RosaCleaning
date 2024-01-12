//Note: Components
import Lottie from "lottie-react";
import { ImCheckboxChecked } from "react-icons/im";
//Note: Images, Lottie:
import Vector from "../../assets/vector.png";
import womanCleaningAnimation from "../../assets/cleanLottie.json";


const HeroSection = () => {
  return (
    <div className="bg-white" id="hero">
      <div className="flex justify-around sm:py-32 py-20 max-w-7xl mx-auto px-4 flex-wrap space-y-12">
        <div className="my-auto space-y-4">
          <h1 className="text-[40px] font-semibold">
            The best
            <span className="text-[#0171E3] ml-2">Cleaning Service</span>
            <br />
            Transforming Spaces, Elevating Lives
          </h1>
          <div className="flex space-x-10">
            <button className="px-6 py-2 bg-[#0171E3] rounded-md font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4">
              Let's Talk
            </button>
            <button className="px-6 py-2 bg-[#E6F1FC] rounded-md font-bold text-[#0171E3] hover:text-opacity-80  sm:w-auto w-full mt-4">
              Services
            </button>
          </div>
          <div className="pt-6">
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
        </div>
        <div className="my-auto relative">
          <img
            className="sm:w-[30rem] sm:min-w-[20rem] sm:max-w-[30rem] max-w-[20rem] hover:opacity-90"
            src={Vector}
            alt="painting"
          />
          <div className="absolute top-0">
            <Lottie animationData={womanCleaningAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
