// Note: components:
import { Navbar } from "flowbite-react";
//import { HashLink } from "react-router-hash-link";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
// Note: images:
import Logo from "../../assets/rosaLogo.png";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar fluid rounded>
        {/* <HashLink
						//onClick={showNavbar}
						smooth
						to="#features"
						className="lg:inline-flex flex items-center justify-center  text-[16px] px-1 font-medium text-gray-600 hover:text-gray-900
                                mb-lg-0 mb-4"
					>
						Features
					</HashLink> */}
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img width={300} src={Logo} alt="logo RosaCleaning" />
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 my-auto">
          {/* <button
            className="lg:flex hidden px-6 py-2 bg-[#0171E3] rounded-md font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4"
            style={{ margin: "auto" }}
          >
            Schedule Now
          </button> */}
          <Link
            to="steps"
            spy={true}
            smooth={true}
            duration={1000}
            //onclick={closeMenu}

            className="lg:flex hidden px-6 py-2 bg-[#0171E3] rounded-md font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4"
            style={{ margin: "auto" }}
          >
            Schedule Now Test
          </Link>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className="text-[#0171E3]"
            href="#"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              //onclick={closeMenu}
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
          <Link
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              //onclick={closeMenu}
            >
              Services
            </Link>
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
          <Link
              to="steps"
              spy={true}
              smooth={true}
              duration={1000}
              //onclick={closeMenu}
            >
              Steps
            </Link>
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
          <Link
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              //onclick={closeMenu}
            >
              Pricing
            </Link>
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
          <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              //onclick={closeMenu}
            >
              Contact
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Nav;
