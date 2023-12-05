import React from "react";

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
  return (
    <div className="flex flex-col h-[700px] max-w-7xl mx-auto px-4 flex-wrap bg-red-500">
      <div className="my-4">
        <h1 className="text-3xl text-white my-4">Our services</h1>
      </div>

      <ul className="list-disc mx-auto">
        {cleaningService.map((service, index) => (
          <li key={index}> {service.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Services;
