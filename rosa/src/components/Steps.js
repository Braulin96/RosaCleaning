// Note: component
import React from "react";
import ScrollAnimation from "./shared/animation/ScrollAnimation";
// Note: images/icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import Iphone from "assets/iPhone.png";

const Module = ({ title, description, icon }) => {
  return (
    <div className="relative md:w-auto w-full text-[#00284F]">
      <div className="flex">
        <div className="bg-white h-16 my-auto flex shrink-0 aspect-square rounded-full">
          {icon &&
            React.createElement(icon, {
              className: "m-auto",
              size: 30,
              color: "#0171E3",
            })}
        </div>
        <div className="ml-4">
          <p className="font-medium text-2xl text-[#00284F] mb-1">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <div
      className="bg-[#fef4f0] bg-opacity-30 sm:mx-4 mx-2 rounded-2xl"
      id="steps"
    >
      <div className="flex sm:py-32 py-20 max-w-7xl mx-auto px-4 flex-wrap">
        <div className="flex">
          <div>
            <div className="flex justify-between">
              <div>
                <div>
                  <h1 className="text-[40px] font-medium flex sm:mb-20 mb-12 mr-auto text-[#00284F]">
                    Unlocking the magic behind our <br />
                    commitment is as easy as 1-2-3-4.
                  </h1>
                </div>
                <div className="flex flex-col">
                  <ScrollAnimation
                    data="fade-in"
                    easing="ease-in-sine"
                    duration="500"
                    delay="600"
                  >
                    <Module
                      title="Order Service"
                      icon={RiShoppingCartFill}
                      description="Order our service by calling (here) or by email (here)"
                    />
                    <HiOutlineDotsVertical
                      color="#0171E3"
                      size={24}
                      className="ml-5 my-4 opacity-60"
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    data="fade-in"
                    easing="ease-in-sine"
                    duration="500"
                    delay="600"
                  >
                    <Module
                      title="Confirmation Call"
                      icon={IoCallSharp}
                      description="Call you to confirm the service request and the data)"
                    />
                    <HiOutlineDotsVertical
                      color="#0171E3"
                      size={24}
                      className="ml-5 my-4 opacity-60"
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    data="fade-in"
                    easing="ease-in-sine"
                    duration="500"
                    delay="600"
                  >
                    <Module
                      title="Payment"
                      icon={GiPayMoney}
                      description="After confirmation the client will make the payment"
                    />
                    <HiOutlineDotsVertical
                      color="#0171E3"
                      size={24}
                      className="ml-5 my-4 opacity-60"
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    data="fade-in"
                    easing="ease-in-sine"
                    duration="500"
                    delay="600"
                  >
                    <Module
                      title="Service day"
                      icon={MdCleaningServices}
                      description="Proceed to service request"
                    />
                  </ScrollAnimation>
                </div>
              </div>
              <ScrollAnimation
                data="fade-in"
                easing="ease-in-sine"
                duration="600"
                delay="2200"
              >
                <div className="my-auto h-full text-center justify-center lg:flex hidden shadow-xl ml-8">
                  <img
                    className="my-auto h-full flex"
                    width={500}
                    src={Iphone}
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Steps;
