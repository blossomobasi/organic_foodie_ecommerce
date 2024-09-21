import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { FiHeart } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";

import { useProducts } from "../hooks/useProduct";
import { useAddToCart } from "../hooks/useCart";
import { Product } from "../types/products";

import Button from "./Button";
import Spinner from "./Spinner";
import { RxDoubleArrowRight } from "react-icons/rx";
import clsx from "clsx";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {
    data: Product[] | undefined;
    title: string;
    description: string;
};

const DisplayProducts = ({ data, title, description }: Props) => {
    const userId = Cookies.get("userId") || "";
    const refreshToken = Cookies.get("refreshToken") || "";
    const { isLoading } = useProducts();
    const { addToCart, isPending: isAddingToCart } = useAddToCart();
    const [isScrolling, setIsScrolling] = useState(false);
    const navigate = useNavigate();
    const windowWidth = window.innerWidth;
    const mobileView = windowWidth < 500;
    const [wishlist, setWishlist] = useState<Product[]>();

    // Load wishlist from localstorage on initial render
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || "[]");
        setWishlist(storedWishlist);
    }, [userId]);

    function handleAddToCart(e: React.MouseEvent, productId: string) {
        e.stopPropagation();

        if (!userId || !refreshToken) {
            toast.error("Please login to add to cart");
            navigate("/login");
            return;
        }

        if (isAddingToCart) return;

        addToCart({ productId, count: 1, userId });
    }

    function handleAddToWishlist(e: React.MouseEvent, product: Product) {
        e.stopPropagation();

        const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || "[]");

        // Check if product already exists in the wishlist
        const isInWishlist = storedWishlist.some((item: Product) => item._id === product._id);

        let updatedWishlist;

        if (isInWishlist) {
            // Remove from wishlist if it already exists
            updatedWishlist = storedWishlist.filter((item: Product) => item._id !== product._id);
        } else {
            // Add product to wishlist
            updatedWishlist = [...storedWishlist, product];
        }

        localStorage.setItem(`wishlist_${userId}`, JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
    }

    const isProductInWishlist = (productId: string) =>
        wishlist?.some((item) => item._id === productId);

    return (
        <React.Fragment>
            <div className="pb-5">
                <h2 className="md:text-5xl text-4xl font-bold nichrome">{title}</h2>
                <div className="flex justify-between items-center py-5 space-x-5">
                    <p className="text-grey-600 md:text-base text-sm">
                        {mobileView
                            ? description.replace("<br />", " ")
                            : description.split("<br />")[0]}{" "}
                        <br /> {mobileView ? "" : description.split("<br />")[1]}
                    </p>
                    <div>
                        <Button
                            url="/products"
                            variant="primary-outline"
                            className="w-full whitespace-nowrap"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Browse All
                        </Button>
                    </div>
                </div>
            </div>

            {isLoading ? (
                <Spinner />
            ) : (
                <div
                    className="relative flex space-x-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-grey-900 scrollbar-track-grey-500"
                    onScroll={() => setIsScrolling(true)}
                >
                    {data?.map((product) => (
                        <div
                            key={product.title + crypto.randomUUID()}
                            className="w-[23.5rem] flex-shrink-0 cursor-pointer"
                            onClick={() => {
                                if (!userId || !refreshToken) {
                                    toast.error("Please login to view product details");
                                    navigate("/login");
                                    return;
                                }

                                navigate(`/products/${product._id}`);
                            }}
                        >
                            <img
                                src={product.images[0]}
                                alt={product.title}
                                className="w-full h-[15rem]"
                            />
                            <p className="flex justify-between items-center py-3">
                                <span className="text-grey-600">{product.category}</span>
                                {isProductInWishlist(product._id) ? (
                                    <FaHeart
                                        size={20}
                                        className="text-primaryGreen-700"
                                        onClick={(e) => handleAddToWishlist(e, product)}
                                    />
                                ) : (
                                    <FiHeart
                                        size={20}
                                        className="hover:text-primaryGreen-700"
                                        onClick={(e) => handleAddToWishlist(e, product)}
                                    />
                                )}
                            </p>
                            <h4 className="font-semibold text-xl nichrome capitalize">
                                {product.title}
                            </h4>
                            <p className="flex items-center justify-between py-3">
                                <span className="flex items-center space-x-2 text-grey-600">
                                    <IoStarSharp size={20} className="text-secondaryOrange-400" />
                                    <span>
                                        {product.totalRating}({product.rating.length})
                                    </span>
                                </span>
                                <span className="font-medium">${product.price}</span>
                            </p>
                            <Button
                                variant="primary-outline"
                                className="w-full mt-3"
                                onClick={(e) => handleAddToCart(e, product._id)}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    ))}
                    <span
                        className={clsx(
                            "absolute top-1/2 -translate-y-1/2 right-5 text-primaryGreen-700",
                            {
                                hidden: isScrolling,
                                "arrow-animate": !isScrolling,
                            }
                        )}
                    >
                        <RxDoubleArrowRight size={50} />
                    </span>
                </div>
            )}
        </React.Fragment>
    );
};

export default DisplayProducts;
