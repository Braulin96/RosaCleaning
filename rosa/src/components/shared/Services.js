import React from "react";
import { useState } from "react";


import FirstHouse from "../../assets/house.jpeg";


const cleaningService = [
  {
    name: "Residencial Cleaning",
    description:
      "Our house service doesn’t just cover one or two rooms, we cover the whole house or apartment, from top to bottom. This means that not only will your kitchen be hygienic and safe for cooking, your dining room a healthier place for eating, and your living room a comfier, cleaner place for relaxing, but we will also make sure that the stairs, landing, bathrooms, and bedrooms are all spotless, too.",
  },
  {
    name: "Office Cleaning",
    description:
      "Our Office service doesn’t just cover one or two rooms, we cover the whole house or apartment, from top to bottom. This means that not only will your kitchen be hygienic and safe for cooking, your dining room a healthier place for eating, and your living room a comfier, cleaner place for relaxing, but we will also make sure that the stairs, landing, bathrooms, and bedrooms are all spotless, too.",
  },
  {
    name: "Deep Cleaning",
    description:
      "Our Deep service doesn’t just cover one or two rooms, we cover the whole house or apartment, from top to bottom. This means that not only will your kitchen be hygienic and safe for cooking, your dining room a healthier place for eating, and your living room a comfier, cleaner place for relaxing, but we will also make sure that the stairs, landing, bathrooms, and bedrooms are all spotless, too.",
  },
  {
    name: "Moving in/out Cleaning",
    description:
      "Our Moving service doesn’t just cover one or two rooms, we cover the whole house or apartment, from top to bottom. This means that not only will your kitchen be hygienic and safe for cooking, your dining room a healthier place for eating, and your living room a comfier, cleaner place for relaxing, but we will also make sure that the stairs, landing, bathrooms, and bedrooms are all spotless, too.",
  },
  {
    name: "Special Event Cleaning",
    description:
      "Our Special service doesn’t just cover one or two rooms, we cover the whole house or apartment, from top to bottom. This means that not only will your kitchen be hygienic and safe for cooking, your dining room a healthier place for eating, and your living room a comfier, cleaner place for relaxing, but we will also make sure that the stairs, landing, bathrooms, and bedrooms are all spotless, too.",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex relative bg-gradient-to-t from-[#f8e4e5] via-white to-white mx-auto flex-wrap h-[600px] ">
      <div
        className="flex mx-auto max-w-7xl flex-col mt-8 w-full"
        style={{ width: "100%" }}
      >
        <h1 className="text-4xl my-4 text-gray-700 w-full">Our services</h1>
        <div className="flex justify-between w-full" style={{ width: "100%" }}>
          <ul className="ml-8 text-gray-700 text-center w-1/3 mt-10">
            {cleaningService.map((service, index) => (
              <li
                className={
                  index === currentIndex
                    ? "cursor-pointer font-semibold text-xl border-gray-300 mb-6 rounded-lg p-2 bg-gray-100"
                    : "cursor-pointer mb-6 text-xl border-2 border-gray-300 rounded-lg p-2"
                }
                //onClick={() => setCurrentIndex(index)}
                onMouseEnter={() => setCurrentIndex(index)}
                key={index}
              >
                {service.name}
              </li>
            ))}
          </ul>

          <div className="my-auto w-1/2">
            <h1 className="text-2xl text-center mb-4">
              What does the house cleaning
            </h1>
            <div className="font-semibold rounded-2xl overflow-hidden gap-4 ">
              <div className="flex justify-between gap-8">
                <p className="text-gray-600 p-2">
                  {cleaningService[currentIndex].description}
                </p>
                <img className="w-1/2 " src={FirstHouse} />
              </div>
              <button className="bg-white w-full mt-auto py-2 text-[#675a5b] text-lg font-bold">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
