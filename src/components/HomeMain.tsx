import Button from "../ui/Button";
import OrganicSnacks from "../assets/images/main_image.png";
import FastDelivery from "../assets/images/fast_delivery.png";
import DineIn from "../assets/images/dine_in.png";
import PickUp from "../assets/images/pick_up.png";
import GreenDesign from "../assets/images/green_design.png";
import GreenDesign_1 from "../assets/images/green_design_1.png";
import GreenDesign_2 from "../assets/images/green_design_2.png";
import GreenDesignRectangle from "../assets/images/green_design_rectangle.png";
import ShopNow from "../assets/images/shop_now.png";
import Onions from "../assets/images/onions.png";
import GreenPepper from "../assets/images/green_pepper.png";
import Stars from "../assets/images/stars.png";

const HomeMain = () => {
    const TOTAL_PRODUCTS = 1975;
    const SATISFIED_CLIENTS = 2880;
    const PRODUCT_SALES = 3219;
    const GUARANTEE = 100;

    return (
        <section>
            <div className="flex justify-between items-center md:px-20 px-5 pt-10 max-w-[120rem]">
                <div className="w-1/2 flex flex-col items-start space-y-3">
                    <p>Discover the pure taste of Nature</p>
                    <h1 className="text-6xl font-bold text-primaryGreen-700 nichrome pb-5">
                        Organic <span className="text-secondaryOrange-400">Snacks</span> Made{" "}
                        <span className="text-secondaryOrange-400">with</span> Love, Just{" "}
                        <span className="text-secondaryOrange-400">for </span>
                        You
                    </h1>
                    <Button
                        icon={<img src={ShopNow} alt="Shop Now basket" />}
                        variant="secondary"
                        className="flex items-center gap-x-3"
                    >
                        Shop Now
                    </Button>
                </div>

                <div className="w-1/2 relative">
                    <img src={OrganicSnacks} alt="Organic Foodie snacks" className="mx-auto" />

                    <img src={Onions} alt="onions" className="absolute top-0 right-10" />
                    <img
                        src={GreenPepper}
                        alt="green pepper"
                        className="absolute bottom-28 right-5"
                    />
                    <img
                        src={Stars}
                        alt="stars"
                        className="absolute -bottom-10 right-1/2 translate-x-1/2"
                    />
                </div>
            </div>

            <div className="flex justify-end px-20 py-10 max-w-[120rem]">
                <div className="flex space-x-10 text-white">
                    <div className="flex items-center">
                        <img src={FastDelivery} alt="Fast Delivery" />
                        <div>
                            <h3 className="text-xl font-medium nichrome">Fast Delivery</h3>
                            <p className="text-sm">
                                Deliver within 30 <br /> minutes
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={DineIn} alt="Dine In" />
                        <div>
                            <h3 className="text-xl font-medium nichrome">Dine in</h3>
                            <p className="text-sm">
                                Enjoy you snacks <br /> fresh and healthy
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={PickUp} alt="Pick Up" />
                        <div>
                            <h3 className="text-xl font-medium nichrome">Pick Up</h3>
                            <p className="text-sm">
                                Delivery at your <br /> doorstep
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="shadow-2xl relative bg-primaryGreen-400 rounded-t-[3.5rem] h-[18rem] md:pt-20 pt-5 pb-20 px-5 flex flex-col justify-center"
                style={{
                    backgroundImage: `url(${GreenDesign})`,
                    boxShadow: "5rem 5rem 5rem 5rem rgba(255,255,255, 0.4)",
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${GreenDesign_1})`,
                        backgroundRepeat: "no-repeat",
                    }}
                    className="h-[15rem] w-full absolute -top-[12rem] -z-10"
                />
                <div
                    style={{
                        backgroundImage: `url(${GreenDesign_2})`,
                        backgroundRepeat: "no-repeat",
                    }}
                    className="h-[15rem] w-full absolute -top-[15rem] -z-10"
                />
                <div
                    style={{
                        backgroundImage: `url(${GreenDesignRectangle})`,
                        backgroundRepeat: "no-repeat",
                    }}
                    className="h-[5rem] w-full absolute -top-0 right-0 -z-10 bg-[#3CB018]"
                />

                <div className="sm:flex sm:justify-center grid grid-cols-2 gap-y-5 text-white text-center md:space-x-14 space-x-5">
                    <div>
                        <h2 className="md:text-5xl text-4xl font-medium nichrome">
                            {TOTAL_PRODUCTS + "+"}
                        </h2>
                        <p>Total Products</p>
                    </div>
                    <div>
                        <h2 className="md:text-5xl text-4xl font-medium nichrome">
                            {SATISFIED_CLIENTS + "+"}
                        </h2>
                        <p>Satisfied Clients</p>
                    </div>
                    <div>
                        <h2 className="md:text-5xl text-4xl font-medium nichrome">
                            {PRODUCT_SALES + "+"}
                        </h2>
                        <p>Product Sales</p>
                    </div>
                    <div>
                        <h2 className="md:text-5xl text-4xl font-medium nichrome">
                            {GUARANTEE + "%"}
                        </h2>
                        <p>Guarantee</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMain;
