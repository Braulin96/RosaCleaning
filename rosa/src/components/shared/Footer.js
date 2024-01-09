import React from "react";
import WomanCalling from "../assets/images/womanCalling.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="pt-24 pb-12 bg-[#F7F7F7]">
      <div className="flex w-full ">
        <div className="flex-grow">
          <h1 className="text-[40px] font-bold flex justify-center text-[#00284F] mb-6">
            Get In Touch!
          </h1>
          <div className="flex mb-4">
            <div className="mx-auto flex space-x-4">
              <FaSquareFacebook size={40} color="#78ccf5" />
              <RiInstagramFill size={40} color="#78ccf5" />
              <IoLogoLinkedin size={40} color="#78ccf5" />
            </div>
          </div>
          <div className="flex">
            <div className="mx-auto flex space-x-32 mt-8">
              <div>
                <p className="text-lg font-semibold mb-2">Quick Links :</p>
                <ul className="flex flex-col gap-y-2">
                  <li>Home</li>
                  <li>How it works</li>
                  <li>Pricing</li>
                  <li>Faq's</li>
                </ul>
              </div>
              <div className="">
                <div>
                  <p className="text-lg font-semibold mb-2">Business Hours :</p>
                  <p>7:30 am - 8:30 pm, Mon-Sat</p>
                  <p>8 am - 5 pm, Sun</p>
                </div>
                <div>
                  <p className="text-lg font-semibold mt-4 mb-2">Location</p>
                  <p>70 M31 Piccadilly Manchester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3">
          <img width={350} src={WomanCalling} />
        </div>
      </div>
      <div className="px-10">
      <div className="flex border-t border-opacity-70 border-[#D1D2D1] max-w-7xl  mt-12 mx-auto">
        <div className="mx-auto flex justify-between w-full mt-4">
          <p className="text-sm">
            @2023 - Rosa Cleaning Services - All righths reserved
          </p>
          <button className="text-sm">Terms and Privacy</button>
        </div>
      </div>

      </div>
      
    </div>
  );
};
export default Footer;
