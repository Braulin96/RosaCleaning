//Note: components:
import { Link, animateScroll as scroll } from "react-scroll";
//Note: images, icons:
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-24 pb-6 bg-[#00284F] text-[#d1d2d1]" id="contact">
      <div className="px-4">
        <div className="flex flex-wrap w-full space-x-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between w-full gap-x-4 gap-y-8">
            <div className="mx-auto sm:mx-0">
              <h1 className="text-[40px] font-bold flex justify-center mb-6">
                Get In Touch!
              </h1>
              <div className="flex mb-4">
                <div className="mx-auto flex space-x-4">
                  <FaSquareFacebook size={40} />
                  <RiInstagramFill size={40} />
                  <IoLogoLinkedin size={40} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Contact:</p>
              <ul className="flex flex-col gap-y-2">
                <div className="flex gap-x-2">
                  <li className="my-auto">
                    <FaPhoneAlt color="" />
                  </li>
                  <p>(+44) 07908993213</p>
                </div>
                <div className="flex gap-x-2">
                  <li className="my-auto">
                    <MdEmail />
                  </li>
                  <p>RosaCleaning@gmail.com</p>
                </div>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Quick Links:</p>
              <ul className="flex flex-col gap-y-2">
                <li>
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer"
                    //onclick={handleScroll}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer"
                    //onclick={handleScroll}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="pricing"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer"
                    //onclick={handleScroll}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="faqs"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer"
                    //onclick={handleScroll}
                  >
                    Faq's
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <p className="text-lg font-semibold mb-2">Business Hours:</p>
                <p>7:30am - 8:30pm, Mon-Sat</p>
                <p>8am - 5pm, Sun</p>
              </div>
              <div>
                <p className="text-lg font-semibold mt-4 mb-2">Location</p>
                <p>70, M31 Piccadilly Manchester</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-t border-opacity-70 border-[#D1D2D1] max-w-7xl mt-24 mx-auto">
          <div className="mx-auto flex flex-wrap gap-y-2 justify-between w-full mt-4">
            <p className="text-sm">
              @2023 - Rosa Cleaning Services - All rights reserved
            </p>
            <button className="text-sm">Terms and Privacy</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
