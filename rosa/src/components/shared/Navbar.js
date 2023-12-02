import { Navbar } from "flowbite-react";
import Logo from '../../assets/rosaLogo.png'

const Nav = () => {
  return (
    <>
    <Navbar fluid rounded className="max-w-7xl mx-auto">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <img width={240} src={Logo} alt="logo" />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Price</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};
export default Nav;
