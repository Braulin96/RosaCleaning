import { Navbar } from "flowbite-react";
import Logo from '../../assets/rosaLogo.png'

const Nav = () => {
  return (
    <>
    <Navbar fluid rounded className="max-w-7xl mx-auto">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <img width={300} src={Logo} alt="logo" />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-lg" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="#">Services</Navbar.Link>
        <Navbar.Link className="text-lg" href="#">Price</Navbar.Link>
        <Navbar.Link className="text-lg" href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};
export default Nav;
