import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Contact from '../../assets/contact.png'

const Footer = () => {
  return (
    <div className="flex bg-gray-900 relative mx-auto flex-wrap h-[600px]">
      <div className="flex  max-w-7xl w-full mx-auto my-20 gap-8">
        <div className="w-1/2 rounded-md h-full my-auto">
          <h1 className="text-4xl mt-4 mb-8 text-gray-700 w-full">
            Get in touch!
          </h1>
          <div className="flex flex-col space-y-4">
          <div className="">
            <div className="flex gap-x-2">
              <MdOutlineMail size={25} className="my-auto" />
              <p className="text-lg"> Email</p>
            </div>
            <p className="ml-6">RosaCleaning@hotmail.com</p>
          </div>
          <div>
            <div className="flex gap-x-2">
              <FaPhoneAlt size={20} className="my-auto" />
              <p className="text-lg "> Contact Number</p>
            </div>
            <p className="ml-6">07809222182</p>
          </div>
          </div>
        </div>
        <div className="w-1/2 rounded-md h-full mx-auto flex -mt-36">
            <img width={400} src={Contact} alt="woman calling mx-auto flex"/> 
        </div>
      </div>
    </div>
  );
};
export default Footer;
