import { Navbar } from "flowbite-react";
import Logo from "../../assets/rosaLogo.png";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      {/* <Navbar fluid rounded className="max-w-7xl mx-auto">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <img width={240} src={Logo} alt="logo" />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="" />
      <Navbar.Collapse className="">
        <Navbar.Link className="" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className= " "href="#">
          About Us
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Promotions</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar> */}
      <Disclosure as="nav" className="md:mx-5 mx-0 lg:px-8 md:px-5">
        {({ open }) => (
          <>
            <div className="lg:mx-5 mx-0 px-0 sm:px-2 lg:px-6">
              <div className="relative flex h-16 justify-between">
                <div className="relative inset-y-0 left-0 flex items-center md:hidden ml-2">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-7 w-7"
                        aria-hidden="false"
                      />
                    ) : (
                      <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center sm:items-stretch overflow-x-hidden ">
                  <a href="/" className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto ml-2"
                      src={Logo}
                      alt="Wellbeing Logo"
                    />
                  </a>
                </div>
                <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:block hidden">
                  <div className="flex sm:items-stretch sm:justify-end py-3">
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      <div className="ml-auto flex space-x-10">
                        <a
                          href="#"
                          className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        >
                          Home
                        </a>
                        <Link
                          to="/Business"
                          className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                          Business
                        </Link>
                        <a
                          href="https://app.thewellbeingdoctors.com/auth?redirect=/dashboard/"
                          className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                          Individual
                        </a>
                        <a
                          href="https://app.thewellbeingdoctors.com/auth?redirect=/dashboard/"
                          className="inline-flex items-center relative"
                        >
                          <span
                            className="pr-10"
                            style={{ fontSize: "20px", fontWeight: "lighter" }}
                          >
                            |
                          </span>
                          <span className=" border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            Sign in
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 pb-4 pt-2">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Business
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Individual
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Sign in
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
export default Nav;
