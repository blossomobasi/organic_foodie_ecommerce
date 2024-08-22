import { useParams } from "react-router-dom";
import SimilarProduct from "../components/SimilarProduct";
import { useProduct } from "../hooks/useProduct";
import { IoStarSharp } from "react-icons/io5";
import Button from "../ui/Button";
import { useState } from "react";
import clsx from "clsx";
import Spinner from "../ui/Spinner";

const ProductsIdPage = () => {
    const params = useParams();
    const productId = params.productId;
    const { data, isLoading } = useProduct(productId || "");
    const [imageSrc, setImageSrc] = useState(data?.images[0]);

    return (
        <section className="lg:px-20 px-5 flex flex-col items-center">
            <div className="max-w-[110rem] w-full py-10">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <div className="flex space-x-20">
                        <div className="w-1/2 flex flex-col space-y-3">
                            <img
                                src={imageSrc || data?.images[0]}
                                alt={data?.title}
                                className="rounded-md h-[30rem] object-cover"
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

                        <div className="w-1/2">
                            <p className="text-sm text-grey-600 capitalize pb-5">
                                {data?.category}
                            </p>
                            <h2 className="nichrome text-5xl font-bold capitalize pb-5">
                                {data?.title}
                            </h2>
                            <p className="text-2xl font-bold text-secondaryOrange-500">
                                ${data?.price}
                            </p>

                            <span className="flex items-center space-x-2 text-grey-600 text-lg py-3">
                                <IoStarSharp size={23} className="text-secondaryOrange-400" />
                                <span>
                                    {data?.totalRating}({data?.rating.length})
                                </span>
                            </span>

                            <div className="flex space-x-3 text-lg">
                                <p className="font-semibold">Quantity: </p>
                                <button className="lg:h-6 lg:w-6 h-5 w-5 bg-grey-400">
                                    &mdash;
                                </button>
                                <input
                                    type="text"
                                    defaultValue={1}
                                    className="lg:h-6 lg:w-6 h-5 w-5 border border-grey-400 text-center"
                                />
                                <button className="lg:h-6 lg:w-6 h-5 w-5 bg-grey-400">+</button>
                            </div>

                            <p className="py-5 first-letter:capitalize text-grey-600">
                                {data?.description}
                            </p>

                            <div className="flex flex-col space-y-4">
                                <Button className="py-3.5">Add to Cart</Button>
                                <Button url="/checkout" variant="secondary" className="py-3.5">
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                <SimilarProduct />
            </div>
        </section>
    );
};

export default ProductsIdPage;
