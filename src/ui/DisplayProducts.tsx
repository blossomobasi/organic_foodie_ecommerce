import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { FiHeart } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";

import { useProducts } from "../hooks/useProduct";
import { useAddToCart } from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";
import { Product } from "../types/products";

import Button from "./Button";
import Spinner from "./Spinner";
// import { FaHeart } from "react-icons/fa";

type Props = {
    data: Product[] | undefined;
    title: string;
    description: string;
};

const DisplayProducts = ({ data, title, description }: Props) => {
    const userId = Cookies.get("userId");
    const { isLoading } = useProducts();
    const { addToCart, isPending: isAddingToCart } = useAddToCart();
    const { isAddingToWishlist, addToWishlist } = useWishlist();
    const navigate = useNavigate();
    const windowWidth = window.innerWidth;
    const mobileView = windowWidth < 500;

    function handleAddToCart(e: React.MouseEvent, productId: string) {
        e.stopPropagation();
        if (isAddingToCart) return;

        addToCart(productId);
    }

    function handleAddToWishlist(e: React.MouseEvent, prodId: string) {
        e.stopPropagation();
        if (isAddingToWishlist) return;

        addToWishlist({
            prodId,
            userId: userId || "",
        });
    }

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
                <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-grey-900 scrollbar-track-grey-500">
                    {data?.map((product) => (
                        <div
                            key={product.title + crypto.randomUUID()}
                            className="w-[23.5rem] flex-shrink-0 cursor-pointer"
                            onClick={() => navigate(`/products/${product._id}`)}
                        >
                            <img
                                src={product.images[0]}
                                alt={product.title}
                                className="w-full h-[15rem]"
                            />
                            <p className="flex justify-between items-center py-3">
                                <span className="text-grey-600">{product.category}</span>
                                <FiHeart
                                    size={20}
                                    className="hover:text-red-600"
                                    onClick={(e) => handleAddToWishlist(e, product._id)}
                                />
                                {/* <FaHeart size={20} /> */}
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
                </div>
            )}
        </React.Fragment>
    );
};

export default DisplayProducts;
