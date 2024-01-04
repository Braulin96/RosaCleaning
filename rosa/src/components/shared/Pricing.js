import React from "react";
// Note: images/icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";

const basicFeatures = [
  {
    features: "access to 10% in basic",
  },
  {
    features: "access to 20% in basic",
  },
  {
    features: "access to 30% in basic",
  },
];

const generalFeatures = [
  {
    features: "access to 10% in general",
  },
  {
    features: "access to 20% in general",
  },
  {
    features: "access to 30% in general",
  },
];

const Module = ({ title, className, serviceType }) => {
  return (
    <div className="border border-[#0171E3] border-opacity-20 h-fit py-12 px-10 rounded-xl">
      <p className="font-medium text-2xl text-[#00284F] text-center mb-6">
        {title}
      </p>

      <div className="mb-6 flex flex-col gap-y-2">
        {serviceType.map((advantage, index) => (
          <div key={index} className="flex space-x-2">
            <IoIosCheckmarkCircleOutline
              color="#0171E3"
              size={20}
              className="my-auto opacity-40"
            />
            <p>{advantage.features}</p>
          </div>
        ))}
      </div>

      <div className="flex mb-3">
        <p className="font-semibold mx-auto text-3xl text-[#00284F] mb-1">
          200 $
        </p>
      </div>
      <div className="w-full flex justify-center mx-auto">
        <a
          className={`${className} text-center font-semibold px-3 py-1 rounded-md md:w-auto w-full`}
        >
          Schedule now
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <>
      <div className="flex sm:h-[700px] h-fit py-20 max-w-7xl mx-auto px-4 flex-wrap">
        <h1 className="text-[40px] font-medium flex sm:mb-16 mb-12 mr-auto text-[#00284F]">
          We offer unparalleled <br />
          value for every category of service
        </h1>
        <Module
          serviceType={basicFeatures}
          title="Basic"
          className="bg-[#E6F1FC] text-[#00284F]"
        />
        {/* <Module title="General" className="bg-[#0171E3] text-white" />
        <Module title="Premium" className="bg-[#E6F1FC] text-[#00284F]" /> */}
      </div>
    </>
  );
};
export default Pricing;
