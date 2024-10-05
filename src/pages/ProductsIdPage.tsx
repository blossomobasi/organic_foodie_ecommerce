import { useState } from "react";
import clsx from "clsx";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

import { IoStarSharp } from "react-icons/io5";

import { useAddToCart, useCart } from "../hooks/useCart";
import Button from "../ui/Button";
import SimilarProduct from "../components/SimilarProduct";
import Spinner from "../ui/Spinner";
import ReviewStats from "../components/ReviewStats";
import CreateReview from "../components/CreateReview";
import ShowReview from "../components/ShowReview";
import ScrollToTop from "../ui/ScrollToTop";
import currencyFormatter from "../utils/currencyFormatter";

const ProductsIdPage = () => {
    const params = useParams();
    const productId = params.productId;
    const userId = Cookies.get("userId") || "";

    const { data, isLoading } = useProduct(productId || "");
    const { addToCart, isPending } = useAddToCart();
    const { cart } = useCart(userId as string);

    const [imageSrc, setImageSrc] = useState(data?.images[0]);

    const price = data?.price;

    function handleAddToCart(productId: string) {
        if (isPending) return;

        addToCart({ productId, count: 1, userId });
    }

    function isProductInCart(productId: string) {
        return cart?.userOrdersCart[0]?.products.some((item) => item.productId._id === productId);
    }

    return (
        <ScrollToTop>
            <section className="lg:px-20 px-5 flex flex-col items-center">
                <div className="max-w-[110rem] w-full py-10">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <div className="flex md:space-x-20 sm:space-x-10 sm:space-y-0 space-y-14 sm:flex-row flex-col sm:items-start items-center">
                            <div className="sm:w-1/2 flex flex-col space-y-3">
                                <img
                                    src={imageSrc || data?.images[0]}
                                    alt={data?.title}
                                    className="rounded-md sm:h-[30rem] w-full object-cover"
                                />

                                <div className="flex space-x-3 justify-center">
                                    {data?.images.map((image, index) => (
                                        <img
                                            onClick={() => setImageSrc(image)}
                                            key={index}
                                            src={image}
                                            alt={data?.title}
                                            className={clsx("h-28 w-28 rounded-md", {
                                                "opacity-85": imageSrc !== image,
                                            })}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="sm:w-1/2 w-full">
                                <p className="text-sm text-grey-600 capitalize pb-5">
                                    {data?.category}
                                </p>
                                <h2 className="nichrome text-5xl font-bold capitalize pb-5">
                                    {data?.title}
                                </h2>
                                <p className="text-2xl font-bold text-secondaryOrange-500">
                                    {currencyFormatter(Number(price))}
                                </p>

                                <span className="flex items-center space-x-2 text-grey-600 text-lg py-3">
                                    <IoStarSharp size={23} className="text-secondaryOrange-400" />
                                    <span>
                                        {data?.totalRating}({data?.rating.length})
                                    </span>
                                </span>

                                {/* <div className="flex space-x-3 text-lg">
                                    <p className="font-semibold">Quantity: </p>
                                    <button
                                        className={clsx("lg:h-6 lg:w-6 h-5 w-5 bg-grey-400", {
                                            "cursor-not-allowed opacity-50": isPending,
                                        })}
                                        onClick={() => handleRemoveItemFromCart(data?._id || "")}
                                    >
                                        &mdash;
                                    </button>
                                    <span className="lg:h-6 lg:w-6 h-5 w-5 border border-grey-400 text-center">
                                        {data?.quantity}
                                    </span>
                                    <button
                                        disabled={isPending}
                                        className={clsx("lg:h-6 lg:w-6 h-5 w-5 bg-grey-400", {
                                            "cursor-not-allowed opacity-50": isPending,
                                        })}
                                        onClick={() => handleAddToCart(data?._id || "")}
                                    >
                                        +
                                    </button>
                                </div> */}

                                <p className="py-5 first-letter:capitalize text-grey-600">
                                    {data?.description}
                                </p>

                                <div className="flex flex-col space-y-4">
                                    <Button
                                        className="py-3.5"
                                        onClick={() => handleAddToCart(data?._id || "")}
                                        isLoading={isPending}
                                        disabled={isProductInCart(data?._id || "")}
                                    >
                                        {/* Add to Cart */}
                                        {isProductInCart(data?._id || "")
                                            ? "In Cart"
                                            : "Add to Cart"}
                                    </Button>
                                    <Button url="/checkout" variant="secondary" className="py-3.5">
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Review */}
                    <section className="pt-20">
                        <div className="flex md:flex-row flex-col md:space-y-0 space-y-10">
                            <div className="w-full">
                                <h3 className="text-xl font-bold">Customer Reviews</h3>

                                <ReviewStats rating={data?.rating} />
                            </div>

                            <div className="md:w-full sm:w-2/3 w-full">
                                <CreateReview />
                            </div>
                        </div>

                        <ShowReview review={data?.rating} />
                    </section>

                    <SimilarProduct />
                </div>
            </section>
        </ScrollToTop>
    );
};

export default ProductsIdPage;
