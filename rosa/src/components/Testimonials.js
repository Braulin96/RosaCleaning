//Note: components:
import { useState } from "react";
//Note: images, icons:
import { RiDoubleQuotesL } from "react-icons/ri";
import Andrea from "assets/andreaProfile.jpeg";
import John from "assets/johnProfile.jpeg";
import Juan from "assets/juanProfile.jpeg";
import Anna from "assets/profile.jpeg";

const Module = ({ name, text, role, profilePicture }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    transition: "transform 1s ease",
    transform: isHovered ? "translateY(-15px)" : "translateY(0)",
  };

  return (
    <div className="w-full flex justify-center relative">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        className="border-2 flex flex-col border-[#e0e1e0] rounded-lg w-72 h-64 overflow-hidden"
      >
        <div className="flex space-x-4 px-6 py-8">
          <div className="w-1/3">
            <RiDoubleQuotesL color="#e0e1e0" size={40} />
          </div>
          <div className="flex-grow">
            <p className="text-[#414241]">{text}</p>
          </div>
        </div>
        <div className="mt-auto bg-gray-100 p-4 flex justify-between border-t-2 border-[#e0e1e0] py-3">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs">{role}</p>
          </div>
          <div
            className="w-20 h-20 overflow-hidden rounded-full -mt-10 border-2 border-white"
            style={imageStyle}
          >
            <img
              className="w-full h-full object-cover opacity-90"
              src={profilePicture}
              alt="andrea profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="flex h-fit pt-24 pb-32 sm:pt-32 sm:pb-36 max-w-7xl mx-auto px-4 flex-wrap">
      <div className="w-full flex justify-center">
        <h1 className="text-[40px] font-medium flex sm:mb-20 mb-12 text-[#00284F] text-center">
          What Our Clients Say
        </h1>
      </div>
      <div className="mx-auto relative md:gap-y-0 gap-y-12 flex flex-col">
        <div className="flex md:flex-row flex-col gap-x-10 z-10 md:gap-y-0 gap-y-12 md:ml-10 ml-0">
          <div className="md:ml-10 ml-0">
            <Module
              text=" Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's."
              name="Mr Jason Mraz"
              role="CEO at Curbside Prophet Inc."
              profilePicture={Andrea}
            />
          </div>
          <div className="md:mt-10 mt-0">
            <Module
              text=" Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's."
              name="Mr Jason Mraz"
              role="CEO at Curbside Prophet Inc."
              profilePicture={John}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-x-10 z-10 md:gap-y-0 gap-y-12">
          <div className="md:ml-10 ml-0">
            <Module
              text=" Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's."
              name="Mr Jason Mraz"
              role="CEO at Curbside Prophet Inc."
              profilePicture={Juan}
            />
          </div>
          <div className="md:mt-10 mt-0">
            <Module
              text=" Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's."
              name="Mr Jason Mraz"
              role="CEO at Curbside Prophet Inc."
              profilePicture={Anna}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
