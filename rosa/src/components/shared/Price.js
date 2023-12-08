import Promo from "../../assets/promoEffect.png";

const ModulePrice = () => {
  return (
    <div className="bg-[#5591AE] bg-opacity-30 rounded-md p-4">
      <p>Refresh Your Space, Refresh Your Savings - Basic Cleaning</p>
      <p className="underline flex justify-end ">Know more</p>
    </div>
  );
};

const Price = () => {
  return (
    <div className="flex relative bg-gradient-to-t from-[#fbddd2] via-white to-white mx-auto flex-wrap h-[600px]">
      <div className="flex max-w-7xl w-full mx-auto my-20 gap-20">
        <div className="rounded-md w-1/2 h-full">
          <img src={Promo} />
        </div>
        <div className="rounded-md w-1/2 h-full">
          <h1 className="text-4xl my-4 text-gray-700 w-full">Our services</h1>
          <ModulePrice/>
        </div>
      </div>
    </div>
  );
};
export default Price;
