import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

const Module = () => {
  return (
    <>
      <div className="relative">
        <div className="border border-[#B0D3F6] h-48 w-60 flex items-center px-6 rounded-xl">
          <div className="">
            <p className="font-medium text-2xl text-[#00284F]"> Home Cleaning</p>
            <p className="mt-2">
              Elevate your space, embrace the grace of a spotless home.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] -top-5 h-14 my-auto flex shrink-0 aspect-square rounded-full absolute">
          <MdOutlineSupportAgent color="#0171E3" className="m-auto" size={40} />
        </div>
      </div>
    </>
  );
};

const OurService = () => {
  return (
    <div className="rounded-2xl">
      <div className="flex justify-around sm:h-[600px] h-fit sm:py-0 py-20 max-w-7xl mx-auto px-4 flex-wrap">
        <div className="w-full my-auto">
          <h1 className="text-[40px] font-medium mx-auto text-center flex justify-center sm:mb-16 mb-12 text-[#00284F]">
            We Work Many Fields To Clean
            <br /> Your Surrounding Area
          </h1>

          <Module />
        </div>
      </div>
    </div>
  );
};
export default OurService;
