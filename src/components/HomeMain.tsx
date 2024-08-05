import Button from "../ui/Button";
import OrganicSnacks from "../assets/images/main_image.png";
import FastDelivery from "../assets/images/fast_delivery.png";
import DineIn from "../assets/images/dine_in.png";
import PickUp from "../assets/images/pick_up.png";
import GreenDesign from "../assets/images/green_design.png";
import GreenDesign_1 from "../assets/images/green_design_1.png";
import GreenDesign_2 from "../assets/images/green_design_2.png";
import GreenDesignRectangle from "../assets/images/green_design_rectangle.png";

const HomeMain = () => {
    const TOTAL_PRODUCTS = 1975;
    const SATISFIED_CLIENTS = 2880;
    const PRODUCT_SALES = 3219;
    const GUARANTEE = 100;
    return (
        <section>
            <div className="flex justify-between items-center px-[5rem] pt-10 max-w-[120rem]">
                <div className="w-1/2 flex flex-col items-start space-y-3">
                    <p>Discover the pure taste of Nature</p>
                    <h1 className="text-6xl font-bold text-primaryGreen-700">
                        Organic <span className="text-secondaryOrange-400">Snacks</span> Made{" "}
                        <span className="text-secondaryOrange-400">with</span> Love, Just{" "}
                        <span className="text-secondaryOrange-400">for </span>
                        You
                    </h1>
                    <Button icon={"i"} variant="secondary">
                        Shop Now
                    </Button>
                </div>

                <div className="w-1/2">
                    <img src={OrganicSnacks} alt="Organic Foodie snacks" className="mx-auto" />
                </div>
            </div>
            <div className="flex justify-end px-[5rem] py-5 max-w-[120rem]">
                <div className="flex space-x-10 text-white">
                    <div className="flex items-center">
                        <img src={FastDelivery} alt="Fast Delivery" />
                        <div>
                            <h3 className="text-xl font-semibold">Fast Delivery</h3>
                            <p className="text-sm">
                                Deliver within 30 <br /> minutes
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={DineIn} alt="Dine In" />
                        <div>
                            <h3 className="text-xl font-semibold">Dine in</h3>
                            <p className="text-sm">
                                Enjoy you snacks <br /> fresh and healthy
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={PickUp} alt="Pick Up" />
                        <div>
                            <h3 className="text-xl font-semibold">Pick Up</h3>
                            <p className="text-sm">
                                Delivery at your <br /> doorstep
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="shadow-2xl relative bg-primaryGreen-400 rounded-t-[3.5rem] h-60 text-white flex items-center justify-center text-center space-x-14"
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
                <span>
                    <h2 className="text-5xl font-semibold">{TOTAL_PRODUCTS + "+"}</h2>
                    <p>Total Products</p>
                </span>
                <span>
                    <h2 className="text-5xl font-semibold">{SATISFIED_CLIENTS + "+"}</h2>
                    <p>Satisfied Clients</p>
                </span>
                <span>
                    <h2 className="text-5xl font-semibold">{PRODUCT_SALES + "+"}</h2>
                    <p>Product Sales</p>
                </span>
                <span>
                    <h2 className="text-5xl font-semibold">{GUARANTEE + "%"}</h2>
                    <p>Guarantee</p>
                </span>
            </div>
        </section>
    );
};

export default HomeMain;
