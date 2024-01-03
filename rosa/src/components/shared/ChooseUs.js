import React from "react";
import { BsShieldLockFill } from "react-icons/bs";

const Module = ({ icon, title, children }) => {
  return (
    <>
      <div className="flex space-x-6 max-w-md">
        <div className="bg-white h-24 my-auto flex shrink-0 aspect-square rounded-full">
          {icon &&
            React.createElement(icon, {
              className: "m-auto",
              size: 55,
              color: "#0171E3",
            })}
        </div>
        <div className="my-auto">
          <p className="font-medium text-2xl"> {title} </p>
          <p className="mt-2">
            {/* The concept of marketing support product range, regardless of the
            cost market trends */}
            {children}
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
        <div className="flex justify-around h-[600px] max-w-7xl mx-auto px-4 flex-wrap">
          <div className="w-full my-auto">
            <h1 className="text-[40px] font-medium mx-auto flex justify-center mb-16">
              Why Choose Us
            </h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-16">
              <div className="col-span-1 m-auto">
                <Module title="Testing" icon={BsShieldLockFill}>
                  The concept of marketing support product range, regardless of
                  the cost market trends
                </Module>
              </div>
              <div className="col-span-1 m-auto">
                <Module title="Testing" icon={BsShieldLockFill}>
                  The concept of marketing support product range, regardless of
                  the cost market trends
                </Module>
              </div>
              <div className="col-span-1 m-auto">
                <Module title="Testing" icon={BsShieldLockFill}>
                  The concept of marketing support product range, regardless of
                  the cost market trends
                </Module>
              </div>
              <div className="col-span-1 m-auto">
                <Module title="Testing" icon={BsShieldLockFill}>
                  The concept of marketing support product range, regardless of
                  the cost market trends
                </Module>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChooseUs;
