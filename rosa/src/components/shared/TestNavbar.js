import { useRef } from 'react'
import Logo from "../../assets/rosaLogo.png";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import Close from "../../assets/rosaLogo.png";
import { RxHamburgerMenu } from 'react-icons/rx'

const TestNavbar = () => {
	const navRef = useRef()
	const showNavbar = () => {
		const navElement = navRef.current
		navElement.classList.toggle('responsive_nav')
	}

	return (
		<header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex py-3">
			<Link to="/">
				<img className="w-[235px]" src={Logo} alt="The Wellbeing Doctors Logo" />
			</Link>

			<nav ref={navRef} className="lg:flex z-50 grow">
				<div className="lg:pl-10 lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center lg:items-start lg:pt-2">
					<HashLink
						onClick={showNavbar}
						smooth
						to="#features"
						className="lg:inline-flex flex items-center justify-center  text-[16px] px-1 font-medium text-gray-600 hover:text-gray-900
                                mb-lg-0 mb-4"
					>
						Features
					</HashLink>
					<HashLink
						onClick={showNavbar}
						smooth
						to="#pricing"
						className="lg:inline-flex flex items-center justify-center  text-[16px] px-1 font-medium text-gray-600 hover:text-gray-900
                                mb-lg-0 mb-4"
					>
						Pricing
					</HashLink>
					<HashLink
						onClick={showNavbar}
						smooth
						to="#faq"
						className="lg:inline-flex flex items-center justify-center  text-[16px] px-1 font-medium text-gray-600 hover:text-gray-900
                                mb-lg-0 mb-4"
					>
						FAQs
					</HashLink>

					<a
						href="https://shop.thewellbeingdoctors.com/"
						className="lg:inline-flex flex items-center justify-center text-[16px] px-1 font-medium text-gray-600  hover:text-gray-900"
					>
						Shop
					</a>
				</div>
				<a
					href="https://app.thewellbeingdoctors.com/manager/"
					className="lg:ml-auto lg:inline-flex flex justify-center items-center text-[16px] flex-shrink-0 rounded-full w-36 h-12 lg:bg-white 
                                px-4 font-normal text-gray-700 hover:text-gray-500 lg:shadow-sm"
				>
					Sign in
				</a>

				<button className="p-1.5 top-2 absolute right-2 lg:hidden" onClick={showNavbar}>
					<img src={Close} className="text-gray-800 opacity-70 w-8" />
				</button>
			</nav>
			<button className="lg:hidden ml-auto" onClick={showNavbar}>
				<RxHamburgerMenu size={30} className="text-black opacity-60" />
			</button>
		</header>
	)
}
export default TestNavbar

