import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import Button from "../ui/Button";
import { SlMagnifier } from "react-icons/sl";

const NavBar = () => {
    const navlinks = [
        { name: "Home", url: "/" },
        { name: "Our Products", url: "products" },
        { name: "Health Benefits", url: "health-benefits" },
        { name: "Blogs", url: "blogs" },
        { name: "FAQs", url: "faq" },
    ];

    return (
        <header className="sticky top-0 z-[100] bg-white">
            <div className="flex items-center justify-between px-[5rem] py-3 max-w-[120rem] ">
                <span className="flex-[0.5]">
                    <Logo />
                </span>

                <nav className="flex-[1.8]">
                    <ul className="flex justify-between">
                        {navlinks.map((link) => (
                            <li key={link.name} className="hover:font-bold">
                                <Link to={link.url}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex-[0.5]">
                    <span className="border-x border-grey-200 flex items-center w-fit justify-center mx-auto px-2">
                        <SlMagnifier size={25} />
                    </span>
                </div>

                <span className="flex items-center gap-x-4">
                    <FiHeart size={25} />
                    <BsHandbag size={25} />
                    <Button>Contact Us</Button>
                </span>
            </div>
        </header>
    );
};

export default NavBar;
