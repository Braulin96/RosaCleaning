// Note: components:
import { Navbar } from "flowbite-react";
import { useState } from "react";
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
  const [hideNavbar, setHideNavbar] = useState(false);
  const handleHideNavbar = () => setHideNavbar(!hideNavbar)

  const hideNavbarStyle = {
    // ... other styles
    transform: hideNavbar ? "translate(0px, -70px)" : "translate(0px, 0px)",
    transition: "transform 0.3s ease-in-out", // Adjust the duration and timing function as needed
    // ... other styles
  };
  {console.log ('hideNavbar:', hideNavbar)}

  return (
    <div className="max-w-7xl mx-auto fixed w-full" style={hideNavbarStyle}>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img width={300} src={Logo} alt="logo RosaCleaning" />
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 my-auto">
          <Link
            //to="steps"
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
          <Navbar.Link className="text-[#0171E3]" href="#">
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
      <button onClick={handleHideNavbar} className="text-red-500"> hide nav </button>
    </div>
  );
};
export default Nav;
