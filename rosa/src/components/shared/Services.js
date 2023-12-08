import React from "react";
import { useState } from "react";
import phone from "../../assets/iPhone.png";
import background from "../../assets/background.png";
import rosa from "../../assets/rosaLogo.png";
import IMac from '../../assets/iMac.png'
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
    <div className="flex relative bg-gradient-to-t from-[#f8e4e5] via-white to-white mx-auto flex-wrap h-[600px] ">
      <div className="flex max-w-7xl justify-around w-full mx-auto">
        <div className="sm:flex hidden w-1/3 my-auto  h-full p-10">
          <div className="rounded-lg flex h-full justify-center">
            <img  src={IMac} />
          </div>
        </div>

        <div className="flex flex-col my-auto">
          <h1 className="text-4xl my-4 text-gray-700">Our services</h1>
          <div className="flex mr-24">
            <ul className="list-disc mt-4 w-60 ml-4 text-gray-700">
              {cleaningService.map((service, index) => (
                <li
                  className={
                    index === currentIndex
                      ? "cursor-pointer font-semibold text-2xl mb-4"
                      : "cursor-pointer mb-4 text-xl"
                  }
                  //onClick={() => setCurrentIndex(index)}
                  onMouseEnter={() => setCurrentIndex(index)}
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

                <button className="bg-white w-full mt-auto py-2 text-[#675a5b] text-lg font-bold">
                  Request
                </button>
              </div>

              <div className="w-60 h-4 mt-10 bg-black rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
