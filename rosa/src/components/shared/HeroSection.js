import Hero from "../../assets/heroSection.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-around h-[700px] max-w-7xl mx-auto">
        <div className="my-auto space-y-4">
          <h1 className="text-4xl leading-relaxed">Welcome to RosaCleaning <br/>Where Cleanliness Meets Excellence!</h1>
          <button className="px-6 py-2 bg-[#DF66A7] rounded-full font-bold text-white hover:bg-opacity-90"> Request Service </button>
        </div>
        <div className="my-auto">
          <img className="max-w-[600px]" src={Hero} alt="painting" />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
