import Cookies from "js-cookie";
import Button from "../ui/Button";
import SimilarProduct from "../components/SimilarProduct";
import { useAddToCart, useCart } from "../hooks/useCart";
import ScrollToTop from "../ui/ScrollToTop";
import EmptyCart from "../components/EmptyCart";
import clsx from "clsx";
import currencyFormatter from "../utils/currencyFormatter";

const CartPage = () => {
    const { cart } = useCart();
    const { removeItemFromCart, addToCart, isPending } = useAddToCart();
    const userId = Cookies.get("userId") || "";

    const CART_LENGTH = cart?.userOrdersCart[0]?.products?.reduce(
        (acc, item) => acc + item.count,
        0
    );

    const totalPrice = cart?.userOrdersCart[0]?.cartTotal;

    function handleRemoveItem(productId: string) {
        if (isPending) return;
        removeItemFromCart({ productId, count: 1, userId });
    }

    function handleClearItem(productId: string, count: number) {
        if (isPending) return;
        removeItemFromCart({ productId, count, userId });
    }

    function handleAddItem(productId: string) {
        if (isPending) return;

        addToCart({ productId, count: 1, userId });
    }

    return (
        <ScrollToTop>
            <section className="lg:px-20 px-5 md:pt-14 pt-5 flex flex-col items-center">
                {!CART_LENGTH ? (
                    <EmptyCart />
                ) : (
                    <div className="flex md:flex-row flex-col w-full lg:gap-20 gap-10 pb-10 max-w-[110rem]">
                        <div className="w-full">
                            <h2 className="nichrome font-medium text-xl py-3">
                                Shopping Cart ({CART_LENGTH} {CART_LENGTH === 1 ? "item" : "items"})
                            </h2>

                            {cart?.userOrdersCart.map((item) =>
                                item.products.map((product, index) => (
                                    <div key={product._id}>
                                        <div className="flex justify-between py-3">
                                            <h6 className="lg:text-base text-sm">
                                                Item {index + 1}
                                            </h6>
                                            <div className="flex space-x-5 text-grey-600 lg:text-base text-sm">
                                                <p className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600">
                                                    Save for later
                                                </p>
                                                <p
                                                    className={clsx(
                                                        "relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600 cursor-pointer hover:text-red-600 before:hover:bg-red-600",
                                                        {
                                                            "cursor-not-allowed": isPending,
                                                        }
                                                    )}
                                                    onClick={() =>
                                                        handleClearItem(
                                                            product.productId._id,
                                                            product.count
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </p>
                                            </div>
                                            <div className="flex space-x-3 lg:text-base text-sm">
                                                <p>Qty: </p>
                                                <button
                                                    className={clsx(
                                                        "lg:h-6 lg:w-6 h-5 w-5 bg-grey-400",
                                                        {
                                                            "cursor-not-allowed opacity-50":
                                                                isPending,
                                                        }
                                                    )}
                                                    onClick={() =>
                                                        handleRemoveItem(product.productId._id)
                                                    }
                                                >
                                                    &mdash;
                                                </button>
                                                <span className="lg:h-6 px-2 h-5 border border-grey-400 text-center">
                                                    {product.count}
                                                </span>
                                                <button
                                                    className={clsx(
                                                        "lg:h-6 lg:w-6 h-5 w-5 bg-grey-400",
                                                        {
                                                            "cursor-not-allowed opacity-50":
                                                                isPending,
                                                        }
                                                    )}
                                                    onClick={() =>
                                                        handleAddItem(product.productId._id)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <hr className="border-[#C4D1D0] border-1" />

                                        <div className="flex items-center space-x-5 py-8">
                                            <img
                                                src={product.productId.images[0]}
                                                alt={product.productId.title}
                                                className="h-28 w-28 rounded-lg"
                                            />
                                            <div className="flex flex-col space-y-3">
                                                <h4 className="text-xl font-medium nichrome capitalize">
                                                    {product.productId.title}
                                                </h4>
                                                <span className="text-grey-600">
                                                    Cart ID: {product.productId._id}
                                                </span>
                                                <p className="text-xl font-semibold">
                                                    {currencyFormatter(product.productId.price)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="w-full pb-10">
                            <div>
                                <h2 className="font-medium nichrome text-xl py-3">Order Summary</h2>

                                <hr className="border-[#C4D1D0] border-1" />

                                <div className="py-5 flex flex-col space-y-3 text-grey-600">
                                    <div className="flex justify-between">
                                        <p>Original Price</p>
                                        <p>{currencyFormatter(Number(totalPrice))}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p>Shipping</p>
                                    <p>FREE</p>
                                </div>
                            </div>

                            <hr className="border-[#C4D1D0] border-1" />

                            <div className="flex justify-between py-5 text-2xl font-semibold">
                                <h2>Total</h2>
                                <h2>{currencyFormatter(Number(totalPrice))}</h2>
                            </div>
                            <Button
                                variant="secondary"
                                className="w-full py-3"
                                url="/checkout"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Proceed to Check Out
                            </Button>
                        </div>
                    </div>
                )}
                <SimilarProduct />
            </section>
        </ScrollToTop>
    );
};

export default CartPage;
