import { FiHeart } from "react-icons/fi";
import Button from "./Button";
import { IoStarSharp } from "react-icons/io5";
import { ProductsType } from "../types/products";

type Props = {
    data: ProductsType[];
    title: string;
    description: string;
};

const DisplayProducts = ({ data, title, description }: Props) => {
    return (
        <div>
            <div className="pb-5">
                <h2 className="text-5xl font-bold nichrome ">{title}</h2>
                <div className="flex justify-between items-center py-5">
                    <p className="text-grey-600">
                        {description.split("<br />")[0]} <br /> {description.split("<br />")[1]}
                    </p>
                    <Button url="products" variant="primary-outline">
                        Browse All
                    </Button>
                </div>
            </div>

            <div className="flex space-x-6 overflow-x-auto pb-8">
                {data.map((product) => (
                    <div
                        key={product.title + crypto.randomUUID()}
                        className="w-[23.5rem] flex-shrink-0"
                    >
                        <img src={product.image} alt={product.title} className="w-full" />
                        <p className="flex justify-between items-center py-3">
                            <span className="text-grey-600">{product.category}</span>
                            <span>
                                <FiHeart size={20} />
                            </span>
                        </p>
                        <h4 className="font-semibold text-xl nichrome">{product.title}</h4>
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
    );
};

export default DisplayProducts;
