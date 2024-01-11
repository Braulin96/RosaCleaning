import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import Andrea from "../../assets/andreaProfile.jpeg";

const Module = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="border-2 flex flex-col border-[#e0e1e0] rounded-lg w-80 h-72 overflow-hidden shadow-md">
        <div className="flex space-x-4 px-6 py-8">
          <div className="w-1/3">
            <RiDoubleQuotesL color="#e0e1e0" size={60} />
          </div>
          <div className="flex-grow">
            <p className="text-[#414241]">
              Is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
          </div>
        </div>
        <div className="mt-auto bg-gray-100 p-4 flex justify-between border-t-2 border-[#e0e1e0] py-3">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm font-semibold"> Mr Jason Mraz</p>
            <p className="text-xs"> CEO at Curbside Prophet Inc.</p>
          </div>
          <div className="w-20 h-20 overflow-hidden rounded-full -mt-10 border-2 border-white">
            <img
              className="w-full h-full object-cover"
              src={Andrea}
              alt="andrea profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Testimonials() {
  return (
    <div className=" ">
      <div className="flex h-fit py-20 sm:py-32 max-w-7xl mx-auto px-4 flex-wrap">
        <div className="w-full">
          <h1 className="text-[40px] font-medium flex sm:mb-24 mb-12 mr-auto text-[#00284F] sm:text-left text-center">
            What Our Clients Says
          </h1>
        </div>
        <div className="mx-auto">
          <div className="flex gap-x-24">
            <div className="ml-20">
              <Module />
            </div>
            <div className="mt-20">
              <Module />
            </div>
          </div>
          <div className="flex gap-x-24">
            <div>
              <Module />
            </div>
            <div className="mt-20">
              <Module />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
