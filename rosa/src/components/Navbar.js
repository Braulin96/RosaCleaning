//Note: hooks:
import { useState, useEffect } from "react";
// Note: components:
import { Navbar } from "flowbite-react";
import { Link, animateScroll as scroll } from "react-scroll";
// Note: images:
import Logo from "assets/rosaLogo.png";

const Nav = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine the scrolling direction
    const isScrollingDown = currentScrollY > prevScrollY;

    // Check the scroll position and update hideNavbar accordingly
    if (currentScrollY > 100) {
      setHideNavbar(isScrollingDown);
    } else {
      setHideNavbar(false);
    }

    // Update the previous scroll position
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    // Attach the event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]); // Include prevScrollY in the dependency array

  // style to set the position of the navbar
  const hideNavbarStyle = {
    width: "100%",
    transform: hideNavbar ? "translate(0px, -100px)" : "translate(0px, 0px)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      className="flex justify-center z-50 w-full"
      style={{ width: "100%" }}
    >
      <div
        className="fixed z-50 flex justify-between w-full bg-white"
        style={hideNavbarStyle}
      >
        <div className="max-w-7xl w-full mx-auto">
          <Navbar fluid rounded className="w-full" style={{ width: "100%" }}>
            <Navbar.Brand>
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                <img width={300} src={Logo} alt="logo RosaCleaning" />
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2 my-auto">
              <a
                href="mailto:RosaCleaning@gmail.com"
                className="lg:flex hidden px-6 py-2 bg-[#0171E3] rounded-md font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4"
                style={{ margin: "auto" }}
              >
                Schedule Now
              </a>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <Navbar.Link className="text-[#0171E3] cursor-pointer" href="#">
                <Link to="hero" spy={true} smooth={true} duration={1000}>
                  Home
                </Link>
              </Navbar.Link>
              <Navbar.Link className="text-[#00284F] hover:!text-[#0171E3] cursor-pointer">
                <Link to="services" spy={true} smooth={true} duration={1000}>
                  Services
                </Link>
              </Navbar.Link>
              <Navbar.Link className="text-[#00284F] hover:!text-[#0171E3] cursor-pointer">
                <Link to="pricing" spy={true} smooth={true} duration={1000}>
                  Pricing
                </Link>
              </Navbar.Link>
              <Navbar.Link className="text-[#00284F] hover:!text-[#0171E3] cursor-pointer">
                <Link to="contact" spy={true} smooth={true} duration={1000}>
                  Contact
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
export default Nav;
