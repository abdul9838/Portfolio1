import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("/");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const isLinkActive = (link) => {
        return activeLink === link ? "text-blue-400" : "hover:text-blue-400 text-black";
    };

    return (
        <section
            className=" flex justify-between bg-slate-300 items-center md:py-4 py-2 px-4 md:px-8 lg:px-16 shadow-lg">
            <Link to="/" onClick={() => handleLinkClick("/")} className="text-2xl font-bold">
                <i className="md:text-4xl text-3xl text-[#43A7FF] fa-brands fa-react"></i>
            </Link>
            <div className="items-center space-x-8 hidden lg:block">
                <Link
                    to="/"
                    className={`${isLinkActive("/")} text-[12px] font-bold`}
                    onClick={() => handleLinkClick("/")}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className={`${isLinkActive("/intro")} text-[12px] font-bold`}
                    onClick={() => handleLinkClick("/intro")}
                >
                    About
                </Link>
                <Link
                    to="/experties"
                    className={`${isLinkActive("/experties")} text-[12px] font-bold`}
                    onClick={() => handleLinkClick("/experties")}
                >
                    Experties
                </Link>
                <Link
                    to="/contact"
                    className={`${isLinkActive("/contact")} text-[12px] font-bold`}
                    onClick={() => handleLinkClick("/contact")}
                >
                    Contact
                </Link>
            </div>
            <button
                className="md:hidden"
                onClick={() => toggleMobileMenu()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            <ul className={`md:hidden ${isMobileMenuOpen ? "absolute  right-0 text-right z-30 top-[45px] h-[230px] bg-white bg-opacity-[0.8] w-full py-2 px-5 flex flex-col space-y-8" : "hidden"}`}>
                <li>
                    <Link
                        to="/"
                        className={`${isLinkActive("/")} text-[14px] font-bold`}
                        onClick={() => handleLinkClick("/")}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={`${isLinkActive("/intro")} text-[14px] font-bold`}
                        onClick={() => handleLinkClick("/intro")}
                    >
                        Intro
                    </Link>
                </li>
                <li>

                    <Link
                        to="/experties"
                        className={`${isLinkActive("/experties")} text-[14px] font-bold`}
                        onClick={() => handleLinkClick("/experties")}
                    >
                        Experties
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={`${isLinkActive("/contact")} text-[14px] font-bold`}
                        onClick={() => handleLinkClick("/contact")}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Navbar;
