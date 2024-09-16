import { useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";

import Button from "../ui/Button";

import React from "react";
import clsx from "clsx";
import { useCart } from "../hooks/useCart";
import EmptyCart from "./EmptyCart";

const CartPopUp = ({
    onOpen,
    openCart,
}: {
    onOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openCart: boolean;
}) => {
    const { cart } = useCart();
    const CART_LENGTH = cart?.userOrdersCart[0].products.length;

    const totalPrice = cart?.userOrdersCart[0].cartTotal;
    useEffect(() => {
        if (openCart) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [openCart]);

    return (
        <section
            className={clsx(
                "absolute md:pt-28 pt-14 top-0 left-0 w-full h-screen lg:px-20 px-2 transition-transform duration-300 flex flex-col items-center",
                {
                    "transform translate-y-0": openCart,
                    "transform translate-y-[calc(100vh+5rem)] invisible": !openCart,
                }
            )}
        >
            {/* Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-screen bg-primaryGreen-700/80"
                onClick={() => onOpen(false)}
            />

            <div
                className={clsx(
                    "relative w-full max-w-[110rem] flex md:flex-row flex-col justify-between lg:space-x-28 md:space-x-10 space-y-10 md:space-y-0 bg-white lg:px-14 px-8 py-8 h-full overflow-y-auto"
                )}
            >
                {!CART_LENGTH ? (
                    <EmptyCart />
                ) : (
                    <div className="flex justify-between md:flex-row flex-col w-full gap-10">
                        {cart.userOrdersCart.map((item) => (
                            <div className="w-full" key={item._id}>
                                {item.products.map((product, index) => (
                                    <div className="w-full">
                                        <div className="flex justify-between py-3">
                                            <h6>Item {index + 1}</h6>
                                            {/* <div className="flex space-x-5 text-grey-600">
                                                <p className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600 before:hover:bg-primaryGreen-900 hover:text-primaryGreen-900 cursor-pointer">
                                                    Edit
                                                </p>
                                                <p
                                                    className={
                                                        "relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600 before:hover:bg-red-600 hover:text-red-600 cursor-pointer"
                                                    }
                                                >
                                                    Remove
                                                </p>
                                            </div> */}
                                        </div>

                                        <hr className="border-[#C4caD1D0] border-1 " />

                                        <div className="flex items-center space-x-5 py-8">
                                            <img
                                                src={product.productId.images[0]}
                                                alt={product?.productId.title}
                                                className="h-28 w-28 rounded-lg"
                                            />
                                            <div className="flex flex-col space-y-3">
                                                <h4 className="text-xl font-medium nichrome">
                                                    {product.productId.title}
                                                </h4>
                                                <span className="text-grey-600">
                                                    Cart ID: {item._id}
                                                </span>
                                                <p className="text-xl font-semibold">
                                                    ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                        <div className="w-full">
                            <div className="flex flex-col">
                                <div className="flex justify-between font-bold text-xl py-3">
                                    <h3>Cart Order Total ({CART_LENGTH})</h3>
                                    <h3>${totalPrice}</h3>
                                </div>

                                <hr className="border-[#C4D1D0] border-1 " />

                                <div className="py-5 text-grey-600">
                                    <p className="text-lg">Congrats! You Get Free Shipping.</p>
                                    <p className="text-sm">Being your first purchase.</p>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <Button
                                        url="cart"
                                        className="py-3"
                                        onClick={() => {
                                            onOpen(false);
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        View Cart
                                    </Button>
                                    <Button
                                        url="checkout"
                                        variant="secondary"
                                        className="py-3"
                                        onClick={() => {
                                            onOpen(false);
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        Check Out
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className="absolute md:top-0 -top-10 right-0 bg-secondaryOrange-400 p-2 text-white cursor-pointer"
                    onClick={() => onOpen(false)}
                >
                    <LiaTimesSolid size={25} />
                </div>
            </div>
        </section>
    );
};

export default CartPopUp;
