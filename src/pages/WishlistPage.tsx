import Cookies from "js-cookie";
import { useAddToCart } from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

import { LiaTimesSolid } from "react-icons/lia";

import ScrollToTop from "../ui/ScrollToTop";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import { AxiosError } from "axios";

const WishlistPage = () => {
    const userId = Cookies.get("userId") || "";
    const {
        wishlist,
        isLoadingWishlist,
        error,
        addToWishlist: removeFromWishlist,
    } = useWishlist(userId);
    const { addToCart, isPending } = useAddToCart();

    if (isLoadingWishlist) return <Spinner />;
    if (error) {
        const err = error as AxiosError;
        const errorMessage = (err.response?.data as { message: string }).message;

        return (
            <h2 className="text-4xl font-medium text-stone-800 nichrome py-20 text-center">
                {errorMessage}
            </h2>
        );
    }
    const WISHLIST_LENGTH = wishlist?.products.length;
    const TOTAL_PRICE = wishlist?.products?.reduce((acc, item) => acc + item.price, 0);

    function handleAddToCart(productId: string) {
        if (isPending) return;

        addToCart({ productId, count: 1, userId });
    }
    function handleRemoveWishlistItem(prodId: string) {
        if (isPending) return;
        removeFromWishlist({ prodId, userId });
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
                                {wishlist?.products?.map((product, index) => (
                                    <tr key={index} className="border">
                                        <td className="p-5 flex items-center space-x-5">
                                            <span
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    handleRemoveWishlistItem(product.productId)
                                                }
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
                                        <td>${product.price}</td>
                                        <td>
                                            {Number(product.quantity) > 0
                                                ? "In Stock"
                                                : "Out of Stock"}
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => handleAddToCart(product.productId)}
                                            >
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
                        <h2 className="text-2xl font-bold">
                            ${Math.round(Number(TOTAL_PRICE) * 100) / 100}
                        </h2>
                        {/* <Button className="py-4 px-28">Add All to Cart</Button> */}
                    </div>
                </div>
            </section>
        </ScrollToTop>
    );
};

export default WishlistPage;
