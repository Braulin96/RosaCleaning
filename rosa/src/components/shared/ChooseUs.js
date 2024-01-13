// Note: components
import React from "react";
// Note: Images/Icons
import { BsShieldLockFill } from "react-icons/bs";
import { MdOutlineFlashOn } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import{ useState } from "react";

const Module = ({ icon, title, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    fontSize: 55,
    //color: isHovered ? "#325667" : "#0171E3",
    color: isHovered ? "#427087" : "#6dbadf",
    transition: "color 2.3s ease",
  };

  return (
    <>
      <div className="flex space-x-6 max-w-md" onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}>
        <div className="bg-white h-24 my-auto flex shrink-0 aspect-square rounded-full">
          {icon && (
            <div
              className="m-auto"
              style={iconStyle}
            >
              {React.createElement(icon)}
            </div>
          )}
        </div>
        <div className="my-auto">
          <p className="font-medium text-2xl"> {title} </p>
          <p className="mt-2">{children}</p>
        </div>
      </div>
    </>
  );
};

const ChooseUs = () => {
  return (
    <>
      <div className="bg-[#E6F1FC] sm:mx-4 mx-2 rounded-2xl">
        <div className="flex justify-around py-20 sm:py-36 max-w-7xl mx-auto px-4 flex-wrap">
          <div className="w-full my-auto">
            <h1 className="text-[40px] font-medium mx-auto flex justify-center sm:mb-20 mb-12">
              Why Choose Us
            </h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-20">
              <div className="col-span-1 m-auto">
                <Module title="Safe" icon={BsShieldLockFill}>
                  The concept of marketing support product range, regardless of
                  the cost market trends.
                </Module>
              </div>
              <div className="col-span-1 m-auto">
                <Module title="Fast" icon={MdOutlineFlashOn}>
                  The concept of marketing support product range, regardless of
                  the cost market trends.
                </Module>
              </div>
              <div className="col-span-1 m-auto">
                <Module title="Low Price" icon={RiMoneyDollarCircleFill}>
                  The concept of marketing support product range, regardless of
                  the cost market trends.
                </Module>
              </div>
              <div className="col-span-1 m-auto">
                <Module title="Quick Support" icon={MdOutlineSupportAgent}>
                  The concept of marketing support product range, regardless of
                  the cost market trends.
                </Module>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChooseUs;
