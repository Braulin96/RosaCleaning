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
    <div className="flex mb-44 flex-col relative max-w-7xl mx-auto px-4 flex-wrap h-[600px] justify-center">
      <div className="z-20 flex flex-col">
        <div className="my-4">
          <h1 className="text-3xl  my-4">Our services</h1>
        </div>
        <div className="flex mx-auto space-x-10">
          <ul className="list-disc mt-4 w-40">
            {cleaningService.map((service, index) => (
              <li
                className={
                  index === currentIndex
                    ? "text-[#DF66A7] cursor-pointer font-semibold text-2xl mb-4"
                    : "cursor-pointer mb-4 text-lg"
                }
                onClick={() => setCurrentIndex(index)}
                key={index}
              >
                {service.name}
              </li>
            ))}
          </ul>
          <div className=" my-auto ">
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
      <div className="absolute top-1/5 z-10">
        <img width={1200} style={{ fontSize: "10px" }} src={background} />
      </div>
    </div>
  );
};
export default Services;
