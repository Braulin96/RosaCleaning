import React from "react";
import { RiPlantFill } from "react-icons/ri";

const Module = ({ title, description, icon }) => {
  return (
    <>
      <div className="relative md:w-auto w-full">
        <div className="flex">
          <div className="bg-white h-16 my-auto flex shrink-0 aspect-square rounded-full">
            {/* {icon &&
              React.createElement(icon, {
                className: "m-auto",
                size: 40,
                color: "#0171E3",
              })} */}
            <RiPlantFill className="m-auto" color="#0171E3" size={40} />
          </div>
          <div className="ml-4">
            <p className="font-medium text-2xl text-[#00284F] mb-1"> Order Service </p>
            <p> Order our service by calling (here) or by email (here) </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Steps = () => {
  return (
    <div className="bg-[#F7F7F7] sm:mx-4 mx-2 rounded-2xl">
      <div className="flex h-[700px] max-w-7xl mx-auto px-4 flex-wrap py-20">
        <h1 className="text-[40px] font-medium flex sm:mb-16 mb-12 mr-auto text-[#00284F]">
          Unlocking the magic behind our <br />
          commitment is as easy as 1-2-3-4.
        </h1>
        <Module />
      </div>
    </div>
  );
};
export default Steps;
