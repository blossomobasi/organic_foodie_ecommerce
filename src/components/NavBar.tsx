import { NavLink, useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Logo from "./Logo";

import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

const NavBar = () => {
    const navigate = useNavigate();

    const navlinks = [
        { name: "Home", url: "/" },
        { name: "Our Products", url: "products" },
        { name: "Health Benefits", url: "health-benefits" },
        { name: "Blogs", url: "blogs" },
        { name: "FAQs", url: "faq" },
    ];

    return (
        <header className="sticky top-0 z-[100] bg-white shadow-md flex flex-col items-center lg:px-20 px-5">
            <div className="flex items-center justify-between py-3 max-w-[110rem] w-full">
                <div className="flex-[0.5]">
                    <Logo />
                </div>

                <nav className="flex-[1.8]">
                    <ul className="flex justify-between">
                        {navlinks.map((link) => (
                            <li key={link.name} className="hover:font-bold">
                                <NavLink to={link.url}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex-[0.5]">
                    <span className="border-x border-grey-200 flex items-center w-fit justify-center mx-auto px-2">
                        <SlMagnifier size={25} className="cursor-pointer" />
                    </span>
                </div>

                <span className="flex items-center gap-x-4">
                    <FiHeart size={25} className="cursor-pointer" />
                    <BsHandbag
                        size={25}
                        className="cursor-pointer"
                        onClick={() => navigate("/cart")}
                    />
                    <Button>Contact Us</Button>
                </span>
            </div>
        </header>
    );
};

export default NavBar;
