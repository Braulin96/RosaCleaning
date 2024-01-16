// Note: images/icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

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

const premiumFeatures = [
  {
    features: "access to 10% in premium",
  },
  {
    features: "access to 20% in premium",
  },
  {
    features: "access to 30% in premium",
  },
];

const Module = ({ title, className, serviceType, price }) => {
  return (
    <div className="border border-[#0171E3] border-opacity-20 w-72 h-96 flex justify-center my-auto px-4 rounded-xl shadow-md  hover:shadow-2xl transition-shadow duration-1000 ease-in-out">
      <div className="h-full my-auto flex items-center">
        <div>
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
            <p className="font-semibold mx-auto text-3xl text-[#00284F] mb-3">
              {price}
            </p>
          </div>
          <div className="w-full flex justify-center mx-auto">
            <a
             href="mailto:RosaCleaning@gmail.com"
              className={`${className} text-center font-semibold px-6 py-2 rounded-md md:w-auto w-full`}
            >
              Schedule Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <>
      <div className="flex h-fit py-20 sm:py-32 max-w-7xl mx-auto px-4 flex-wrap" id="pricing">
        <div className="w-full">
          <h1 className="text-[40px] font-medium flex sm:mb-24 mb-12 mr-auto text-[#00284F] sm:text-left text-center">
            We offer unparalleled <br />
            value for every category of service
          </h1>
          <div className="flex justify-between gap-x-4 gap-y-12 w-full flex-wrap">
            <div className="mx-auto">
              <Module
                serviceType={basicFeatures}
                title="Basic"
                price="200$"
                className="bg-[#E6F1FC] text-[#00284F] hover:text-opacity-80"
              />
            </div>
            <div className="mx-auto">
              <Module
                serviceType={generalFeatures}
                title="General"
                price="400$"
                className="bg-[#0171E3] text-white hover:bg-opacity-90"
              />
            </div>
            <div className="mx-auto">
              <Module
                serviceType={premiumFeatures}
                title="Premium"
                price="600$"
                className="bg-[#E6F1FC] text-[#00284F] hover:text-opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricing;
