import React from "react";
import { useState } from "react";
const cleaningService = [
  {
    name: "Residencial Cleaning",
    description:
      "Typical residential cleaning tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
  {
    name: "Office Cleaning",
    description:
      "Typical office cleaning tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
  {
    name: "Deep Cleaning",
    description:
      "Typical events Deep cleaning tasks include dusting, vacuuming, mopping floors, cleaning kitchen appliances, sanitizing bathrooms, and tidying up common areas",
  },
  {
    name: "Moving in/out Cleaning",
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
    <div className="flex flex-col h-[700px] max-w-7xl mx-auto px-4 flex-wrap bg-cyan-500 ">
      <div className="my-4">
        <h1 className="text-3xl text-white my-4">Our services</h1>
      </div>
      <div className="flex mx-auto space-x-10">
        <ul className="list-disc mx-auto">
          {cleaningService.map((service, index) => (
            <li
              className={index === currentIndex ? "text-red-500 cursor-pointer text-xl" : "cursor-pointer"}
              onClick={() => setCurrentIndex(index)}
              key={index}
            >
              {service.name}
            </li>
          ))}
        </ul>
        <div>
          <div className="w-56 bg-green-800 rounded-2xl overflow-hidden">
            <div className="p-4">
              <p className="text-white">
                {cleaningService[currentIndex].description}
              </p>
            </div>

            <button className="bg-red-500 w-full mt-auto py-2 text-white">
              Request
            </button>
          </div>
          <div className="w-48 h-4 mt-10 bg-black rounded-full blur-xl "></div>
        </div>
      </div>
    </div>
  );
};
export default Services;
