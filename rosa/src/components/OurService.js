// Note: hooks
import React, { useState } from "react";
// Note: components:
import ScrollAnimation from "./shared/animation/ScrollAnimation";
// Note: images/icons
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { RiPlantFill } from "react-icons/ri";


const Module = ({ title, description, icon }) => {
  //state to add styles to icon when hover the module
  const [isHovered, setIsHovered] = useState(false);
   
  const iconStyle = {
    fontSize: 40,
     color: isHovered ? "#0171E3" : "#a5ddf8",
    transition: "color 2.3s ease",
  };

  return (
    <>
      <div className="relative md:w-auto w-full">
        {/*setIsHovered to change the icon color */}
        <div
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          className="border border-[#a5ddf8] h-52 md:w-72 w-full flex items-center px-8 rounded-xl"
        >
          <div>
            <p className="font-medium text-2xl text-[#00284F]">{title}</p>
            <p className="mt-2">{description}</p>
          </div>
        </div>
        <div className="border border-[#a5ddf8] bg-white -top-5 h-16 my-auto flex shrink-0 aspect-square rounded-full absolute">
          {icon &&
            React.createElement(icon, {
              className: "m-auto",
              style: iconStyle,
            })}
        </div>
      </div>
    </>
  );
};

const OurService = () => {
  return (
    <div className="rounded-2xl" id="services">
      <div className="flex justify-around sm:py-36 py-20 max-w-7xl mx-auto px-4 flex-wrap">
        <div className="w-full my-auto">
          <h1 className="text-[40px] font-medium mx-auto text-center flex justify-center sm:mb-20 mb-12 text-[#00284F]">
            We Work Many Fields To Clean
            <br /> Your Surrounding Area
          </h1>
          <div className="flex justify-around lg:gap-2 gap-8 flex-wrap">
            <ScrollAnimation data="fade-right" duration="1500" delay="1000">
            <Module
              title="Home Cleaning"
              description="Elevate your space, embrace the grace of a spotless home."
              icon={MdOutlineSupportAgent}
            />
            </ScrollAnimation>
            <Module
              title="Office Cleaning"
              description="Elevate your space, embrace the grace of a spotless home."
              icon={HiBuildingOffice}
            />
             <ScrollAnimation data="fade-left" duration="1500" delay="1000">
            <Module
              title="Garden Cleaning"
              description="Elevate your space, embrace the grace of a spotless home."
              icon={RiPlantFill}
            />
            </ScrollAnimation>
          </div>
          <div className="w-full flex justify-center md:my-12 sm:my-6 my-10 mx-auto">
            <a href="mailto:RosaCleaning@gmail.com" className="bg-[#0171E3] hover:bg-opacity-90 text-center px-6 py-2 rounded-md text-white font-bold md:w-auto w-full">
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurService;
