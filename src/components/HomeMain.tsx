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
            <div className="flex flex-col items-center">
                <div className="flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-14 lg:px-20 px-5 pt-10 max-w-[110rem]">
                    <div className="lg:w-1/2 flex flex-col items-start space-y-3 lg:text-start text-center">
                        <p className="lg:self-start self-center">
                            Discover the pure taste of Nature
                        </p>
                        <h1 className="md:text-6xl text-5xl font-bold text-primaryGreen-700 nichrome pb-5">
                            Organic <span className="text-secondaryOrange-400">Snacks</span> Made
                            <span className="text-secondaryOrange-400"> with</span> Love, Just
                            <span className="text-secondaryOrange-400"> for </span>
                            You
                        </h1>
                        <Button
                        url="/products"
                            icon={<img src={ShopNow} alt="Shop Now basket" />}
                            variant="secondary"
                            className="flex items-center gap-x-3 lg:self-start self-center"
                        >
                            Shop Now
                        </Button>
                    </div>

                    <div className="relative">
                        <img src={OrganicSnacks} alt="Organic Foodie snacks" className="mx-auto" />

                        <img src={Onions} alt="onions" className="absolute top-0 right-0" />
                        <img
                            src={GreenPepper}
                            alt="green pepper"
                            className="absolute bottom-28 md:-right-8 -right-5"
                        />
                        <img
                            src={Stars}
                            alt="stars"
                            className="absolute -bottom-10 right-1/2 translate-x-1/2"
                        />
                    </div>
                </div>

                <div className="flex justify-end md:px-20 px-5 pt-10 sm:pb-10 pb-16 max-w-[110rem] w-full md:bg-transparent bg-primaryGreen-100">
                    <div className="flex flex-row items-center justify-center flex-wrap md:w-fit w-full md:space-x-10 gap-5 md:text-white text-primaryGreen-700">
                        <div className="flex items-center flex-row">
                            <img src={FastDelivery} alt="Fast Delivery" />
                            <div>
                                <h3 className="text-xl font-medium nichrome">Fast Delivery</h3>
                                <p className="text-sm">
                                    Deliver within 30 <br /> minutes
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center flex-row">
                            <img src={DineIn} alt="Dine In" />
                            <div>
                                <h3 className="text-xl font-medium nichrome">Dine in</h3>
                                <p className="text-sm">
                                    Enjoy you snacks <br /> fresh and healthy
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center flex-row">
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
            </div>

            <div
                className="shadow-2xl sm:-mt-0 -mt-12 relative bg-primaryGreen-400 rounded-t-[3.5rem] h-[18rem] md:pt-20 pt-5 pb-20 px-5 flex flex-col justify-center"
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
                    className="h-[15rem] w-full absolute -top-[12rem] -z-10 left-0 2xl:right-1/2 2xl:translate-x-1/2 md:flex hidden"
                />
                <div
                    style={{
                        backgroundImage: `url(${GreenDesign_2})`,
                        backgroundRepeat: "no-repeat",
                    }}
                    className="h-[15rem] w-full absolute -top-[15rem] -z-10 2xl:left-0 md:flex hidden"
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
