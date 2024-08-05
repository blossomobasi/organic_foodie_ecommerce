import { popularProductsData } from "../data/productsData";
import Button from "../ui/Button";
import { IoStarSharp } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

import OrganicSnacks from "../assets/images/organic_snacks.png";

const PopularProducts = () => {
    const popularProducts = popularProductsData;
    return (
        <section className="px-[5rem] rounded-t-[3.5rem] absolute -translate-y-14 bg-white w-full pt-24">
            <div>
                <div>
                    <h2 className="text-5xl font-bold">Our Popular Products</h2>
                    <div className="flex justify-between items-center py-5">
                        <p className="text-grey-600">
                            Browse our most popular snacks and make your day <br /> more beautiful
                            and glorious.
                        </p>
                        <Button url="products" variant="primary-outline">
                            Browse All
                        </Button>
                    </div>
                </div>

                <div className="flex space-x-6 overflow-x-auto pb-8">
                    {popularProducts.map((product) => (
                        <div key={product.title} className="w-[23.5rem] flex-shrink-0">
                            <img src={product.image} alt={product.title} className="w-full" />
                            <p className="flex justify-between items-center py-3">
                                <span className="text-grey-600">{product.category}</span>
                                <span>
                                    <FiHeart size={20} />
                                </span>
                            </p>
                            <h4 className="font-semibold text-lg">{product.title}</h4>
                            <p className="flex items-center justify-between py-3">
                                <span className="flex items-center space-x-2 text-grey-600">
                                    <IoStarSharp size={20} className="text-secondaryOrange-400" />
                                    <span>
                                        {product.totalReview}({product.averageReview})
                                    </span>
                                </span>
                                <span className="font-medium">${product.price}</span>
                            </p>
                            <Button variant="primary-outline" className="w-full mt-3">
                                Add to Cart
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between py-20">
                    <div className="w-full flex flex-col items-center space-y-5">
                        <img src={OrganicSnacks} alt="Organic Snacks" />
                        <Button className="rounded-full shadow-sm shadow-primaryGreen-700">
                            100% Organic
                        </Button>
                    </div>
                    <div className="w-full">
                        <h1 className="uppercase text-6xl text-primaryGreen-700 font-bold">
                            High Quality <br />{" "}
                            <span className="text-secondaryOrange-400">Organic Snacks</span>
                        </h1>
                        <p className="text-sm pt-4">
                            At Foodie Amazon, we believe in the power of nature to provide
                            wholesome, delicious snacks. Our journey began with a simple mission: to
                            bring the pure taste of nature to your doorstep. We are dedicated to
                            creating snacks that are not only delicious but also healthy and free
                            from artificial additives. Our major focus is on providing organic
                            snacks that are made with the finest ingredients sourced from
                            sustainable farms.
                            <br />
                            <br />
                            Our commitment to quality means that you won't find any gums,
                            preservatives, or artificial sugars in our products. Instead, we use
                            natural sweeteners and preservatives to ensure that every bite is as
                            healthy as it is tasty.
                        </p>

                        <p className="text-grey-600 italic text-sm py-5 relative before:absolute before:w-1 before:h-[calc(100%-2.2rem)] before:top-1/2 before:-left-3 before:-translate-y-1/2 before:bg-[#82CB0C] before:rounded-full">
                            Our vision is to become a household name in organic snacks, known for
                            our commitment to quality and sustainability.
                        </p>

                        <span>John Doe</span>
                        <p className="text-xs text-grey-600">Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
