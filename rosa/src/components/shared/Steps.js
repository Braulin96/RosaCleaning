import React from "react";
import { RiPlantFill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";

const Module = ({ title, description, icon }) => {
  return (
    <>
      <div className="relative md:w-auto w-full">
        <div className="flex">
          <div className="bg-white h-16 my-auto flex shrink-0 aspect-square rounded-full">
            {icon &&
              React.createElement(icon, {
                className: "m-auto",
                size: 30,
                color: "#0171E3",
              })}
            {/* <RiPlantFill className="m-auto" color="#0171E3" size={40} /> */}
          </div>
          <div className="ml-4">
            <p className="font-medium text-2xl text-[#00284F] mb-1">{title}</p>
            <p> {description} </p>
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
        <div>
          <h1 className="text-[40px] font-medium flex sm:mb-16 mb-12 mr-auto text-[#00284F]">
            Unlocking the magic behind our <br />
            commitment is as easy as 1-2-3-4.
          </h1>
          <div>
            <div className="flex flex-col">
              <Module
                title="Order Service"
                icon={RiShoppingCartFill}
                description="Order our service by calling (here) or by email (here)"
              />
              {/* <div className="my-2">
            <HiOutlineDotsVertical
              color="#0171E3"
              size={24}
              className="ml-5 opacity-50"
            />
             <HiOutlineDotsVertical
              color="#0171E3"
              size={24}
              className="ml-5 -mt-0.5 opacity-50"
            />

            </div> */}
              <HiOutlineDotsVertical
                color="#0171E3"
                size={24}
                className="ml-5 my-2 opacity-60"
              />

              <Module
                title="Confirmation Call"
                icon={IoCallSharp}
                description="Call you to confirm the service request and the data)"
              />
              <HiOutlineDotsVertical
                color="#0171E3"
                size={24}
                className="ml-5 my-2 opacity-60"
              />
              <Module
                title="Payment"
                icon={GiPayMoney}
                description="After confirmation the client will make the payment"
              />
              <HiOutlineDotsVertical
                color="#0171E3"
                size={24}
                className="ml-5 my-2 opacity-60"
              />
              <Module
                title="Service day"
                icon={MdCleaningServices}
                description="Proceed to service request"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Steps;
