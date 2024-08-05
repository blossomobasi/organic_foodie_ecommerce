import Button from "../ui/Button";
import OrganicAlmondDelight from "../assets/images/organic_almond_delight.png";
import BerryBlissBites from "../assets/images/berry_bliss_bites.png";
import CoconutCrunchies from "../assets/images/coconut_crunchies.png";
import BlackFridaySales from "../assets/images/black_friday_sales.png";
import BlackFridayOutOfStock from "../assets/images/black_friday_out_of_stock.png";

import { FiHeart } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";

const Offers = () => {
    const blackFriday = [
        {
            image: BlackFridayOutOfStock,
            title: "Organic Almond Delight",
            category: "Coconut Flakes",
            price: 110,
            totalReview: 18,
            averageReview: 5,
            stock: "Out of stock",
        },
        {
            image: OrganicAlmondDelight,
            title: "Organic Almond Delight",
            category: "Coconut Flakes",
            price: 110,
            totalReview: 18,
            averageReview: 5,
        },
        {
            image: BerryBlissBites,
            title: "Berry Bliss Bites",
            category: "Coconut Flakes",
            price: 139,
            totalReview: 28,
            averageReview: 5,
        },
        {
            image: CoconutCrunchies,
            title: "Coconut Crunchies",
            category: "Coconut Flakes",
            price: 399,
            totalReview: 102,
            averageReview: 5,
        },
    ];

    return (
        <section className="mx-[5rem]">
            <div className="flex justify-between items-end">
                <h3 className="text-3xl font-bold">
                    Hurry Do not Miss Out On <br /> This Offers
                </h3>
                <Button className="rounded-none">Browse All</Button>
            </div>

            <div className="grid grid-cols-3 gap-5">
                <img
                    src={BlackFridaySales}
                    alt="Black Friday Sales"
                    className="h-full w-full col-span-2"
                />
                {blackFriday.map((product) => (
                    <div key={product.title} className="w-[23.5rem]">
                        <div className="relative w-full">
                            <img src={product.image} alt={product.title} className="w-full" />

                            {product.stock && (
                                <div className="bg-secondaryOrange-500 text-white absolute top-1/2 -translate-y-1/2 py-2 text-center font-semibold w-full uppercase">
                                    Out Of Stock
                                </div>
                            )}
                        </div>

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
        </section>
    );
};

export default Offers;
