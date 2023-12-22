// Images
import Hero from "../../assets/heroSection.png";
import Vector from "../../assets/vector.png";

import animationData from "../../assets/cleanLottie.json";

import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-around h-[700px] max-w-7xl mx-auto px-4 flex-wrap">
        <div className="my-auto space-y-4">
          <h1 className="text-[40px] font-semibold">
            The best{" "}
            <span className="text-[#0171E3] mr-2">Cleaning Service</span>
            <br />
            Transforming Spaces, Elevating Lives
          </h1>
          <div className="sm:flex hidden space-x-10">
            <button className="px-6 py-2 bg-[#0171E3] rounded-md font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4 text-xl">
              Let's Talk
            </button>
            <button className="px-6 py-2 bg-[#E6F1FC] rounded-md font-bold text-[#0171E3] hover:text-opacity-80  sm:w-auto w-full mt-4 text-xl">
              Our Services
            </button>
          </div>
        </div>
        <div className="my-auto relative">
          <img
            className="sm:w-[30rem] sm:min-w-[20rem] sm:max-w-[30rem] max-w-[20rem] hover:opacity-90"
            src={Vector}
            alt="painting"
          />
          <div className="absolute top-0">
            <DotLottiePlayer src={animationData} autoplay loop>
              {/* <Controls /> */}
            </DotLottiePlayer>
          </div>
        </div>

        <div className="sm:hidden w-full -mt-20">
          <button className="px-6 py-2 w-full bg-[#DF66A7] rounded-full font-bold text-white hover:bg-opacity-90">
            Request Service
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
