import Cookies from "js-cookie";
import TextInput from "../ui/TextInput";
// import Visa from "../assets/images/visa.png";
// import MasterCard from "../assets/images/masters_card.png";
// import Paypal from "../assets/images/paypal.png";
import Button from "../ui/Button";
import ScrollToTop from "../ui/ScrollToTop";
import { useCart } from "../hooks/useCart";
import { useOrder } from "../hooks/useOrder";
import { useForm } from "react-hook-form";
import MiniSpinner from "../ui/MiniSpinner";
import currencyFormatter from "../utils/currencyFormatter";
import { useQuery } from "@tanstack/react-query";
import { getAllDistributors as getAllDistributorsApi } from "../services";
import { useState } from "react";

const CheckoutPage = () => {
    const userId = Cookies.get("userId");
    const [distEmail, setDistEmail] = useState("");

    const { register, formState, handleSubmit } = useForm<{
        address: string;
        distributor: string;
    }>();
    const { errors } = formState;

    const { cart } = useCart(userId as string);
    const { placeOrder, isPlacingOrder } = useOrder();

    const totalPrice = cart?.userOrdersCart[0]?.cartTotal;

    const { data: distributors } = useQuery({
        queryKey: ["distributor"],
        queryFn: getAllDistributorsApi,
    });

    function onSubmit(data: { address: string; distributor: string }) {
        if (isPlacingOrder) return;
        const payload = {
            address: data.address,
            userId: userId as string,
            distEmail,
            location: data.distributor,
        };

        placeOrder(payload);
    }

    return (
        <ScrollToTop>
            <section className="lg:py-14 py-5 lg:px-20 px-5 flex flex-col items-center">
                <div className="flex md:flex-row flex-col justify-between lg:space-x-28 md:space-x-10 w-full max-w-[110rem]">
                    <div className="w-full">
                        <h2 className="font-medium text-xl nichrome mb-8">Billing Details</h2>

                        <div className="flex flex-col space-y-4">
                            {/* <TextInput placeholder="Your email address" type="email" />
                            <TextInput
                                placeholder="Residence"
                                label="Deliver to"
                                inputId="deliver-to"
                            />
                            <TextInput placeholder="Country" label="Nigeria" inputId="country" />

                            <div className="flex space-x-5">
                                <div className="flex-1">
                                    <TextInput placeholder="Your first name" />
                                </div>

                                <div className="flex-1">
                                    <TextInput placeholder="Your last name" />
                                </div>
                            </div> */}

                            <TextInput
                                label="Address"
                                error={errors.address?.message}
                                className="rounded-none"
                                placeholder="Your address"
                                {...register("address", {
                                    required: "This field is required!",
                                })}
                            />

                            <>
                                <label htmlFor="distributor" className="font-medium text-lg">
                                    Distributor
                                </label>
                                <select
                                    id="distributor"
                                    defaultValue=""
                                    {...register("distributor", {
                                        required: "This field is required",
                                    })}
                                    className={`w-full p-3 bg-white border border-gray-300 text-stone-500 ${
                                        errors?.distributor?.message && "border-secondaryOrange-500"
                                    }`}
                                    onChange={(e) => {
                                        const selectedDistributor = distributors?.distributors.find(
                                            (d) => d.location === e.target.value
                                        );
                                        setDistEmail(selectedDistributor?.email || "");
                                    }}
                                >
                                    <option
                                        value=""
                                        defaultValue="Select location close to you"
                                        disabled
                                    >
                                        Select location close to you
                                    </option>
                                    {distributors?.distributors?.map((d) => (
                                        <option key={d._id} value={d.location}>
                                            {d.location} - {d.address}
                                        </option>
                                    ))}
                                </select>
                                {errors?.distributor && (
                                    <span className="text-secondaryOrange-500">
                                        {errors.distributor.message}
                                    </span>
                                )}
                            </>

                            {/* <div className="flex space-x-5">
                                <div className="flex-1">
                                    <TextInput placeholder="City" className="rounded-none" />
                                </div>
                                <div className="flex-1">
                                    <TextInput placeholder="Ikeja" className="rounded-none" />
                                </div>
                                <div className="flex-1">
                                    <TextInput placeholder="Zip code" className="rounded-none" />
                                </div>
                            </div> */}

                            {/* <TextInput
                                placeholder="Phone number"
                                type="number"
                                className="rounded-none"
                            /> */}

                            {/* <div className="flex flex-col space-y-3">
                                <label htmlFor="orderNote" className="text-lg font-medium">
                                    Order Note <span className="text-[#566363]">(optional)</span>
                                </label>

                                <textarea
                                    placeholder="Tell us what do you think"
                                    id="orderNote"
                                    cols={30}
                                    rows={6}
                                    className="border px-2 py-3 w-full placeholder:text-[#566363] text-[#566363] focus-within:outline-none"
                                />
                            </div> */}
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="w-full pb-8">
                            <h2 className="font-medium nichrome text-xl py-3">Order Summary</h2>

                            <hr className="border-[#C4D1D0] border-1" />

                            <div className="py-5 flex flex-col space-y-3 text-grey-600">
                                <div className="flex justify-between">
                                    <p>Original Price</p>
                                    <p>{currencyFormatter(Number(totalPrice))}</p>
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
                                {/* <h2>${(totalPrice - SAVINGS - TAX).toFixed(2)}</h2> */}
                                <h2>{currencyFormatter(Number(totalPrice))}</h2>
                            </div>
                        </div>

                        <Button
                            variant="secondary"
                            className="w-full py-3 flex items-center justify-center gap-x-2"
                            onClick={handleSubmit(onSubmit)}
                            disabled={isPlacingOrder}
                        >
                            Place Order {isPlacingOrder && <MiniSpinner />}
                        </Button>

                        {/* <div>
                            <h2 className="text-2xl font-semibold nichrome">Pay With</h2>

                            <div className="flex justify-between py-5">
                                <div className="flex items-center space-x-3">
                                    <input type="radio" id="card" name="payment" />
                                    <label htmlFor="card" className="text-lg">
                                        Card
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <img src={Visa} alt="Visa" />
                                    <img src={MasterCard} alt="master card" />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-5">
                                <TextInput
                                    placeholder="Card Number"
                                    className="md:w-[calc(50%-10px)]"
                                />

                                <div className="flex space-x-5">
                                    <div className="flex-1">
                                        <TextInput placeholder="Expiration date" />
                                    </div>
                                    <div className="flex-1">
                                        <TextInput placeholder="Security code" />
                                    </div>
                                </div>

                                <div className="flex space-x-5">
                                    <div className="flex-1">
                                        <TextInput placeholder="First name" />
                                    </div>
                                    <div className="flex-1">
                                        <TextInput placeholder="Last name" />
                                    </div>
                                </div>
                            </div>

                            <div className="py-5 flex items-center space-x-3">
                                <input type="checkbox" id="saveCard" />
                                <label htmlFor="saveCard" className="text-grey-600">
                                    Remember this card for future order
                                </label>
                            </div>

                            <div className="flex space-x-5 pb-5">
                                <Button className="px-10">Done</Button>
                                <Button variant="primary-outline" className="px-10">
                                    Cancel
                                </Button>
                            </div>

                            <hr className="border-[#C4D1D0] border-1" />

                            <div className="flex justify-between py-5 items-center">
                                <div className="flex items-center space-x-3">
                                    <input type="radio" id="paypal" name="payment" />
                                    <label htmlFor="paypal" className="text-lg">
                                        Paypal
                                    </label>
                                </div>

                                <img src={Paypal} alt="Paypal" />
                            </div>

                            <Button
                                variant="secondary"
                                className="w-full py-3"
                                onClick={() => handlePlaceOrder}
                            >
                                Place Order
                            </Button>
                        </div> */}
                    </div>
                </div>
            </section>
        </ScrollToTop>
    );
};

export default CheckoutPage;
