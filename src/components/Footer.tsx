import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

import Logo from "./Logo";

import WhiteStar from "../assets/images/white_star.png";
import GreenStar from "../assets/images/green_star.png";
import Starcut from "../assets/images/star_cut.png";
import Paypal from "../assets/images/paypal.png";
import Visa from "../assets/images/visa.png";
import MastersCard from "../assets/images/masters_card.png";

const Footer = () => {
    const REVIEWS = 13586;
    const YEAR = new Date().getFullYear();

    const customerService = [
        { name: "Order Lookup", href: "/" },
        { name: "Bulk Order", href: "/" },
        { name: "Shipping & Delivery", href: "/" },
        { name: "Discounts", href: "/" },
    ];

    const aboutUs = [
        { name: "News & Blog", href: "/" },
        { name: "Suppliers", href: "/" },
        { name: "Terms & Conditions", href: "/" },
        { name: "Privacy & Policy", href: "/" },
    ];

    const help = [
        { name: "Contact Us", href: "/" },
        { name: "FAQs", href: "/faq" },
    ];
    const privacy = [
        { name: "Terms & Conditions", href: "/" },
        { name: "Privacy Policy", href: "/" },
    ];

    return (
        <section>
            <div className="bg-darkBlue lg:px-20 px-5 py-10 text-white">
                <div className="flex flex-col items-center text-center pb-10">
                    <h3 className="text-3xl font-medium md:pb-5 mb-3 nichrome">Excellent</h3>

                    <div className="flex space-x-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-primaryGreen-300 md:w-10 md:h-10 p-1 flex items-center justify-center rounded-sm"
                            >
                                <img src={WhiteStar} alt="White Star" className="w-6 h-6" />
                            </div>
                        ))}
                    </div>

                    <p className="py-3 font-light relative before:absolute before:bottom-3 before:right-3 before:bg-white before:w-24 before:h-px">
                        Based on {REVIEWS} reviews
                    </p>

                    <span className="flex items-center space-x-1">
                        <span className="relative">
                            <img src={GreenStar} alt="Green Star" />
                            <img
                                src={Starcut}
                                alt="Star Cut"
                                className="absolute bottom-1.5 right-2"
                            />
                        </span>
                        <h4>Trustpilot</h4>
                    </span>
                </div>

                <hr className="border-[#404B4B] border-1 " />

                {/* Footer */}
                <footer className="flex flex-col items-center">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 gap-y-6 max-w-[110rem] w-full">
                        <div>
                            <h4 className="text-xl font-medium mb-5 nichrome">Customer Service</h4>
                            <ul className="text-[#A6B6B6] font-light flex flex-col space-y-3">
                                {customerService.map((item, index) => (
                                    <li key={index} className="hover:underline w-fit">
                                        <Link to={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:justify-self-center">
                            <h4 className="text-xl font-medium mb-5 nichrome">About Us</h4>
                            <ul className="text-[#A6B6B6] font-light flex flex-col space-y-3">
                                {aboutUs.map((item, index) => (
                                    <li key={index} className="hover:underline w-fit">
                                        <Link to={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:justify-self-center">
                            <h4 className="text-xl font-medium mb-5 nichrome">Need Help?</h4>
                            <ul className="text-[#A6B6B6] font-light flex flex-col space-y-3">
                                {help.map((item, index) => (
                                    <li key={index} className="hover:underline w-fit">
                                        <Link to={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:justify-self-center">
                            <h4 className="text-xl font-medium mb-5 nichrome">Privacy</h4>
                            <ul className="text-[#A6B6B6] font-light flex flex-col space-y-3">
                                {privacy.map((item, index) => (
                                    <li key={index} className="hover:underline w-fit">
                                        <Link to={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:justify-self-center">
                            <h4 className="text-xl font-medium mb-5 nichrome">Follow us</h4>
                            <ul className="flex space-x-3">
                                <li className="bg-secondaryOrange-400 w-8 h-8 grid place-content-center">
                                    <TiSocialFacebook size={20} />
                                </li>
                                <li className="bg-secondaryOrange-400 w-8 h-8 grid place-content-center">
                                    <FaLinkedinIn />
                                </li>
                                <li className="bg-secondaryOrange-400 w-8 h-8 grid place-content-center">
                                    <FaTwitter />
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Copyright */}
            <div className="bg-grey-300 text-grey-900 flex flex-col items-center lg:px-20 px-5 py-3">
                <div className="flex justify-between items-center md:flex-row flex-col space-y-5 max-w-[110rem] w-full">
                    <div className="md:w-full">
                        <Logo />
                    </div>
                    <div className="flex items-center space-x-8 md:w-full justify-center">
                        <img src={Paypal} alt="Paypal" />
                        <img src={Visa} alt="Visa" />
                        <img src={MastersCard} alt="Masters card" />
                    </div>

                    <p className="text-sm md:w-full text-end">
                        Copyright &copy; {YEAR} FoodieAmazon. All Rights Reserved
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
