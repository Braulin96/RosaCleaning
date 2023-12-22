import Hero from "../../assets/heroSection.png";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-[#d5effc]">
      <div className="flex justify-around h-[700px] max-w-7xl mx-auto px-4 flex-wrap">
        <div className="my-auto space-y-4">
         {
          <p> Testing</p> ||   <Skeleton />

         } 
        
          <h1 className=" sm:text-3xl md:text-4xl text-2xl sm:leading-relaxed">
            Welcome to RosaCleaning <br />
            Where Cleanliness Meets Excellence!
          </h1>
          <div className="sm:pt-0 pt-4 sm:flex hidden">
            <button className="px-6 py-2 bg-[#DF66A7] rounded-full font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4">
              Request Service
            </button>
          </div>
        </div>
        <div className="sm:mt-auto">
          {
            <img
            className="sm:w-[30rem] sm:min-w-[20rem] sm:max-w-[30rem] max-w-[20rem] hover:opacity-90"
            src={Hero}
            alt="painting"
          /> || <Skeleton />

          }
          
        </div>
        <div className="sm:hidden w-full -mt-20">
            <button className="px-6 py-2 w-full bg-[#DF66A7] rounded-full font-bold text-white hover:bg-opacity-90">
              Request Service
            </button>
          </div>
      </div>
    </div>
  );
};
export default HeroSection;
