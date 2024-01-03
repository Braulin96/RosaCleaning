import React from "react";
import { BsShieldLockFill } from "react-icons/bs";

const Module = () => {
  return (
    <>
      <div className="flex space-x-6 max-w-md">
        <div className="bg-white h-24 my-auto flex shrink-0 aspect-square rounded-full">
        <BsShieldLockFill className="m-auto" size={55} color="#0171E3" />
        </div>
        <div className="my-auto">
          <p className="font-medium text-2xl"> Title </p>
          <p className="mt-2">
            The concept of marketing support product range, regardless of the
            cost market trends
          </p>
        </div>
      </div>
    </>
  );
};

const ChooseUs = () => {
  return (
    <>
      <div className="bg-[#E6F1FC]">
        <div className="flex justify-around h-[700px] max-w-7xl mx-auto px-4 flex-wrap py-20">
          <div>
            <h1 className="text-[40px] font-medium">Why Choose Us</h1>
            <Module />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChooseUs;
