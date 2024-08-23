// import OrganicSnacks from "../assets/images/black_friday_out_of_stock.png";
// import BerryBlissBites from "../assets/images/berry_bliss_bites.png";
// import CoconutCrunchies from "../assets/images/crispy_coconut_crunchies.png";
import Button from "../ui/Button";
import SimilarProduct from "../components/SimilarProduct";
import { useCart } from "../hooks/useCart";
import { useProduct } from "../hooks/useProduct";
import ScrollToTop from "../ui/ScrollToTop";

// const carts = [
//     {
//         image: OrganicSnacks,
//         title: "Coconut Date Energy Bars",
//         cartId: "1234567890",
//         price: 60,
//     },
//     {
//         image: BerryBlissBites,
//         title: "Organic Fruit Bites",
//         cartId: "12345678911",
//         price: 60,
//     },
//     {
//         image: CoconutCrunchies,
//         title: "Choco-chi Delight",
//         cartId: "12345678912",
//         price: 60,
//     },
// ];
// const totalPrice = carts.reduce((acc, cart) => acc + cart.price, 0);
// const SAVINGS = 82;
// const TAX = 3.5;

const CartPage = () => {
    const { cart } = useCart();
    const cartData = cart?.cartData;
    const cartKeys = Object.keys(cartData || {})[0];
    const { data } = useProduct(cartKeys);

    const cartLength = Object.keys(cartData || {}).length;

    return (
        <ScrollToTop>
            <section className="lg:px-20 px-5 mg:pt-20 pt-5 flex flex-col items-center">
                <div className="flex md:flex-row flex-col lg:space-x-28 md:space-x-10 md:space-y-0 space-y-5 max-w-[110rem] w-full">
                    <div className="w-full">
                        <h2 className="nichrome font-medium text-xl py-3">
                            Shopping Cart ({cartLength} {cartLength === 1 ? "item" : "items"})
                        </h2>

                        {/* {carts.map((cart, index) => ( */}
                        <div>
                            <div className="flex justify-between py-3">
                                <h6 className="lg:text-base text-sm">Item {1}</h6>
                                <div className="flex space-x-5 text-grey-600 lg:text-base text-sm">
                                    <p className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600">
                                        Save for later
                                    </p>
                                    <p className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600">
                                        Remove
                                    </p>
                                </div>
                                <div className="flex space-x-3 lg:text-base text-sm">
                                    <p>Qty: </p>
                                    <button className="lg:h-6 lg:w-6 h-5 w-5 bg-grey-400">
                                        &mdash;
                                    </button>
                                    <input
                                        type="text"
                                        defaultValue={data?.quantity}
                                        className="lg:h-6 lg:w-6 h-5 w-5 border border-grey-400 text-center"
                                    />
                                    <button className="lg:h-6 lg:w-6 h-5 w-5 bg-grey-400">+</button>
                                </div>
                            </div>

                            <hr className="border-[#C4D1D0] border-1" />

                            <div className="flex items-center space-x-5 py-8">
                                <img
                                    src={data?.images[0]}
                                    alt={data?.title}
                                    className="h-28 w-28 rounded-lg"
                                />
                                <div className="flex flex-col space-y-3">
                                    <h4 className="text-xl font-medium nichrome capitalize">
                                        {data?.title}
                                    </h4>
                                    <span className="text-grey-600">Cart ID: {data?._id}</span>
                                    <p className="text-xl font-semibold">${data?.price}</p>
                                </div>
                            </div>
                        </div>

                        {/* {carts.map((cart, index) => (
                        <div key={index}>
                            <div className="flex justify-between py-3">
                                <h6 className="lg:text-base text-sm">Item {index + 1}</h6>
                                <div className="flex space-x-5 text-grey-600 lg:text-base text-sm">
                                    <p className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600">
                                        Save for later
                                    </p>
                                    <p className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-grey-600">
                                        Remove
                                    </p>
                                </div>
                                <div className="flex space-x-3 lg:text-base text-sm">
                                    <p>Qty: </p>
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
                            </div>

                            <hr className="border-[#C4D1D0] border-1" />

                            <div className="flex items-center space-x-5 py-8">
                                <img
                                    src={cart.image}
                                    alt={cart.title}
                                    className="h-28 w-28 rounded-lg"
                                />
                                <div className="flex flex-col space-y-3">
                                    <h4 className="text-xl font-medium nichrome">{cart.title}</h4>
                                    <span className="text-grey-600">Cart ID: {cart.cartId}</span>
                                    <p className="text-xl font-semibold">${cart.price}</p>
                                </div>
                            </div>
                        </div>
                    ))} */}
                    </div>
                    <div className="w-full pb-10">
                        <h2 className="font-medium nichrome text-xl py-3">Order Summary</h2>

                        <hr className="border-[#C4D1D0] border-1" />

                        <div className="py-5 flex flex-col space-y-3 text-grey-600">
                            <div className="flex justify-between">
                                <p>Original Price</p>
                                <p>${data?.price}</p>
                            </div>
                            {/* <div className="flex justify-between">
                            <p>Savings</p>
                            <p>${SAVINGS.toFixed(2)}</p>
                        </div> */}
                            <div className="flex justify-between">
                                <p>Shipping</p>
                                <p>FREE</p>
                            </div>
                            {/* <div className="flex justify-between">
                            <p>Estimated Sales Tax</p>
                            <p>${TAX}</p>
                        </div> */}
                        </div>

                        <hr className="border-[#C4D1D0] border-1" />

                        <div className="flex justify-between py-5 text-2xl font-semibold">
                            <h2>Total</h2>
                            <h2>${data?.price}</h2>
                            {/* <h2>${(totalPrice - SAVINGS - TAX).toFixed(2)}</h2> */}
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

                <SimilarProduct />
            </section>
        </ScrollToTop>
    );
};

export default CartPage;
