import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { LiaTimesSolid } from "react-icons/lia";

import { Product } from "../types/products";
import { useAddToCart } from "../hooks/useCart";

import ScrollToTop from "../ui/ScrollToTop";
import Button from "../ui/Button";
import currencyFormatter from "../utils/currencyFormatter";

const WishlistPage = () => {
    const userId = Cookies.get("userId") || "";
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const { addToCart, isPending } = useAddToCart();

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || "[]");
        setWishlist(storedWishlist);
    }, [userId]);

    const WISHLIST_LENGTH = wishlist.length;
    const TOTAL_PRICE = wishlist.reduce((acc, item) => acc + item.price, 0);

    function handleAddToCart(productId: string) {
        if (isPending) return;

        addToCart({ productId, count: 1, userId });
    }

    if (!WISHLIST_LENGTH) {
        return (
            <div className="text-center h-[70vh] flex items-center justify-center flex-col">
                <h2 className="text-6xl font-bold nichrome md:pb-5 pb-3">Wish List</h2>
                <p>No product in your wishlist</p>
            </div>
        );
    }

    function handleRemoveWishlistItem(product: Product) {
        const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || "[]");
        const updatedWishlist = storedWishlist.filter((item: Product) => item._id !== product._id);

        // Update the wishlist in the state
        setWishlist(updatedWishlist);

        // Update localStorage
        localStorage.setItem(`wishlist_${userId}`, JSON.stringify(updatedWishlist));
    }

    return (
        <ScrollToTop>
            <section className="flex flex-col items-center">
                <div className="md:py-14 py-5 text-center lg:px-20 px-5 max-w-[110rem] w-full">
                    <h2 className="text-5xl font-bold nichrome md:pb-5 pb-3">Wish List</h2>
                    <p className="md:mb-10 mb-7 text-grey-600">
                        {WISHLIST_LENGTH} {Number(WISHLIST_LENGTH) > 1 ? "items" : "item"} in your
                        wishlist
                    </p>

                    <div className=" overflow-x-auto">
                        <table className="lg:w-full w-[70rem]">
                            <thead>
                                <tr className="border">
                                    <th className="w-[40%] p-2">Product Name</th>
                                    <th className="w-[20%]">Unit Price</th>
                                    <th className="w-[20%]">Stock Status</th>
                                    <th className="w-[20%]"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {wishlist.map((product, index) => (
                                    <tr key={index} className="border">
                                        <td className="p-5 flex items-center space-x-5">
                                            <span
                                                className="cursor-pointer"
                                                onClick={() => handleRemoveWishlistItem(product)}
                                            >
                                                <LiaTimesSolid size={25} />
                                            </span>
                                            <img
                                                src={product.images[0]}
                                                alt={product.title}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                            <h3 className="font-medium text-start">
                                                {product.title}
                                            </h3>
                                        </td>
                                        <td>{currencyFormatter(Number(product.price))}</td>
                                        <td>
                                            {Number(product.quantity) > 0
                                                ? "In Stock"
                                                : "Out of Stock"}
                                        </td>
                                        <td>
                                            <Button onClick={() => handleAddToCart(product._id)}>
                                                Add to Cart
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="py-14 text-end flex flex-col items-end space-y-3">
                        <p className="text-lg text-grey-600">Estimated Total:</p>
                        <h2 className="text-2xl font-bold">{currencyFormatter(TOTAL_PRICE)}</h2>
                    </div>
                </div>
            </section>
        </ScrollToTop>
    );
};

export default WishlistPage;
