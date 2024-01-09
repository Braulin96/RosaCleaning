import Promo from "../../assets/promoEffect.png";
import { FaCaretDown } from "react-icons/fa";

const promo = [
  {
    name: "Refresh Your Space, Refresh Your Savings - Basic Cleaning",
  },
  {
    name: "Spruce Up Your Space with Our Cleaning Service Specials",
  },
  {
    name: "Shine Brighter for Less: Limited Premium Cleaning Services",
  },
];

const ModulePrice = ({ description }) => {
  return (
    <div className="bg-[#5591AE] bg-opacity-30 rounded-md p-4">
      <p> {description} </p>
      <div className="flex justify-end ">
        <p className="mr-1">Know more</p>
        <FaCaretDown className="my-auto" />
      </div>
    </div>
  );
};

const Price = () => {
  return (
    <div className="flex relative bg-gradient-to-t from-[#cddee7] via-white to-white mx-auto flex-wrap h-[600px]">
      <div className="flex max-w-7xl w-full mx-auto my-20 gap-20">
        <div className="rounded-md w-1/2 h-full">
          <img src={Promo} />
        </div>
        <div className="rounded-md w-1/2 h-full">
          <h1 className="text-4xl mt-4 mb-8 text-gray-700 w-full">
            Prices & Promotions
          </h1>
          <div className="gap-y-8 flex flex-col">
            {promo.map((service, index) => (
              <ModulePrice key={index} description={service.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Price;
