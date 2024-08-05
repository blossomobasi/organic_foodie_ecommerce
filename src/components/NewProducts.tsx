import { FiHeart } from "react-icons/fi";
import { newProductsData } from "../data/productsData";
import Button from "../ui/Button";
import { IoStarSharp } from "react-icons/io5";

const NewProducts = () => {
    const newProducts = newProductsData;
    return (
        <section className="px-[5rem] bg-white w-full pt-24">
            <div>
                <div>
                    <h2 className="text-5xl font-bold">Our New Products</h2>
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
                    {newProducts.map((product) => (
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
            </div>
        </section>
    );
};

export default NewProducts;
