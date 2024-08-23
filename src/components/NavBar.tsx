import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";

import Button from "../ui/Button";
import Logo from "./Logo";

import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { GrMenu } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import CartPopUp from "./CartPopUp";
import { useCart } from "../hooks/useCart";

const NavBar = () => {
    const { cart } = useCart();
    const [showNav, setShowNav] = useState(false);
    const [openCart, setOpencart] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (showNav) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [showNav]);

    const navlinks = [
        { name: "Home", url: "/" },
        { name: "Our Products", url: "products" },
        { name: "Health Benefits", url: "health-benefits" },
        { name: "Blogs", url: "blogs" },
        { name: "FAQs", url: "faq" },
    ];

    const carts = cart?.cartData;
    const CART_LENGTH = Object.keys(carts || {}).length;

    function scrollUp() {
        window.scrollTo(0, 0);
    }

    return (
        <header className="sticky top-0 z-[100] bg-white shadow-md flex flex-col items-center lg:px-20 px-5">
            <div className="flex items-center lg:justify-between py-3 max-w-[110rem] w-full">
                <div className="sm:flex-[0.5] w-full">
                    <Logo />
                </div>

                <nav className="flex-[1.8] lg:block hidden 2xl:flex flex-col items-center">
                    <ul className="flex justify-between max-w-[50rem] w-full">
                        {navlinks.map((link) => (
                            <li key={link.name} className="hover:font-bold" onClick={scrollUp}>
                                <NavLink to={link.url}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile navigation */}
                <nav
                    className={clsx(
                        "p-5 lg:hidden absolute bg-white sm:w-1/2 w-full h-[calc(100vh+5rem)] top-0 left-0 z-[100] transition-transform duration-300",
                        {
                            "transform translate-x-0": showNav,
                            "transform -translate-x-full": !showNav,
                        }
                    )}
                >
                    {/* close */}
                    <span
                        className="absolute right-7 top-8 cursor-pointer p-2 hover:bg-primaryGreen-100"
                        onClick={() => setShowNav(false)}
                    >
                        <FaArrowLeft size={25} />
                    </span>

                    <div className="mb-14">
                        <Logo />
                    </div>

                    <ul className="flex flex-col space-y-6 divide-y divide-primaryGreen-300">
                        {navlinks.map((link) => (
                            <li
                                key={link.name}
                                className="hover:font-bold pt-5"
                                onClick={() => setShowNav(false)}
                            >
                                <NavLink to={link.url}>{link.name}</NavLink>
                            </li>
                        ))}

                        <Button className="sm:hidden">Contact Us</Button>
                    </ul>
                </nav>

                {/* Overlay */}
                {showNav && (
                    <div
                        className="bg-black/20 absolute top-0 left-0 h-screen w-full lg:hidden"
                        onClick={() => setShowNav(false)}
                    />
                )}

                <div className="flex-[0.5] hidden sm:block">
                    <span className="border-x border-grey-200 flex items-center w-fit justify-center mx-auto px-2">
                        <SlMagnifier size={25} className="cursor-pointer" />
                    </span>
                </div>

                <span className="flex items-center gap-x-4">
                    <FiHeart
                        size={25}
                        className={clsx("cursor-pointer", {
                            "text-primaryGreen-700": pathname === "/wishlist",
                        })}
                        onClick={() => {
                            navigate("/wishlist");
                            scrollUp();
                        }}
                    />
                    <span
                        onClick={() => {
                            if (pathname !== "/cart") setOpencart(true);
                        }}
                        className="cursor-pointer relative"
                    >
                        {!CART_LENGTH ? (
                            ""
                        ) : (
                            <div className="h-5 w-5 bg-secondaryOrange-400 text-white rounded-full absolute -top-1.5 -right-1.5 flex items-center justify-center">
                                {CART_LENGTH}
                            </div>
                        )}
                        <BsHandbag size={25} />
                    </span>

                    <Button className="hidden sm:block" url="/signup">
                        Contact Us
                    </Button>
                </span>

                {/* Menu */}
                <span
                    className="border border-primaryGreen-700 p-2 cursor-pointer lg:hidden ml-5 hover:bg-primaryGreen-100"
                    onClick={() => setShowNav(true)}
                >
                    <GrMenu size={25} className="text-primaryGreen-400" />
                </span>

                <CartPopUp onOpen={setOpencart} openCart={openCart} />
            </div>
        </header>
    );
};

export default NavBar;
