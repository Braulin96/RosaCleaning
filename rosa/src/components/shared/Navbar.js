import { Navbar, Button } from "flowbite-react";
import Logo from "../../assets/rosaLogo.png";

const Nav = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img width={300} src={Logo} alt="logo RosaCleaning" />
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 my-auto">
          <button
            className="lg:flex hidden px-6 py-2 bg-[#0171E3] rounded-md font-bold text-white hover:bg-opacity-90 sm:w-auto w-full mt-4"
            style={{ margin: "auto" }}
          >
            Schedule Now
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className="text-[#0171E3]"
            href="#"
            //active
          >
            Home
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
            Services
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
            Pricing
          </Navbar.Link>
          <Navbar.Link className="text-black hover:!text-[#0171E3]" href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Nav;
