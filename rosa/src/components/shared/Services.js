import React from "react";
import { useState } from "react";
import phone from "../../assets/iPhone.png";
import background from "../../assets/background.png";
import rosa from "../../assets/rosaLogo.png";
const cleaningService = [
  {
    name: "Residencial",
    description:
      "Typical residential cleaning tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
  {
    name: "Office",
    description:
      "Typical office cleaning tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
  {
    name: "Deep",
    description:
      "Typical events Deep cleaning tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
  {
    name: "Moving in/out ",
    description:
      "Typical office moving tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
  {
    name: "Special Event",
    description:
      "Typical events cleaning tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex relative max-w-7xl bg-gradient-to-br from-[#78CCF5] via-[#d5effc] to-white mx-auto px-4 flex-wrap h-[600px] justify-center gap-8">
      <div className="sm:flex hidden w-1/3 my-auto  h-full p-10">
        <div className=" bg-cyan-400 rounded-lg flex h-full justify-center">
          image goes here
        </div>
      </div>

      <div className="z-20 flex flex-col w-1/2 my-auto">
        <h1 className="text-3xl  my-4">Our services</h1>
        <div className="flex mr-24">
          <ul className="list-disc mt-4 w-60 ml-4">
            {cleaningService.map((service, index) => (
              <li
                className={
                  index === currentIndex
                    ? "text-[#DF66A7] cursor-pointer font-semibold text-3xl mb-4"
                    : "cursor-pointer mb-4 text-xl"
                }
                onClick={() => setCurrentIndex(index)}
                key={index}
              >
                {service.name}
              </li>
            ))}
          </ul>
          <div>
            <div className="w-56 bg-[#5591AE] text-white font-semibold rounded-2xl overflow-hidden ">
              <div className="p-4 h-56 w-56">
                <p className="text-white">
                  {cleaningService[currentIndex].description}
                </p>
              </div>

              <button className="bg-[#DF66A7] w-full mt-auto py-2 text-white font-bold">
                Request
              </button>
            </div>

            <div className="w-60 h-4 mt-10 bg-black rounded-full blur-xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
