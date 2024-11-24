import OrganicAlmondDelight from "../assets/images/organic_almond_delight.png";
import BerryBliss from "../assets/images/berry_bliss_bites.png";
import CoconutCrunchies from "../assets/images/crispy_coconut_crunchies.png";
import imageTools from "../assets/images/tools.png";
import Button from "../ui/Button";
import { FaAngleRight } from "react-icons/fa";

const BulkOrders = () => {
    const bulkOrders = [
        {
            image: OrganicAlmondDelight,
            title: "Organic Almond Delight",
            description:
                "Crunchy almonds coated with a touch of organic honey, perfect for a healthy snack.",
        },
        {
            image: BerryBliss,
            title: "Berry Bliss Bites",
            description:
                "A delightful mix of organic berries and nuts, offering a burst of flavor in every bite.",
        },
        {
            image: CoconutCrunchies,
            title: "Coconut Crunchies",
            description:
                "Light and crispy coconut flakes, naturally sweet and utterly delicious taste.",
        },
    ];
    return (
        <section className="bg-primaryGreen-100 lg:px-20 px-5 md:py-20 py-10 flex flex-col items-center">
            <div className="text-center max-w-[110rem]">
                <div className="flex items-center flex-col space-y-3 lg:w-[70%] w-full mx-auto mb-10">
                    <h1 className="md:text-6xl text-5xl nichrome tracking-wide relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:bg-primaryGreen-700 w-fit font-bold">
                        Bulk Orders
                    </h1>
                    <p>
                        Our snacks are free from artificial additives, providing a pure and
                        wholesome snacking experience. Discover our range of delightful organic
                        treats designed to satisfy your cravings while supporting a healthy
                        lifestyle.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {bulkOrders.map((product) => (
                        <div
                            className="p-5 shadow-xl w-full rounded-lg"
                            key={product.title + crypto.randomUUID()}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-[13rem] object-cover rounded-md"
                            />
                            <h4 className="font-bold pt-5 mb-3 text-xl nichrome">
                                {product.title}
                            </h4>
                            <p className="pb-7">{product.description}</p>
                            <Button
                                className="uppercase flex items-center gap-x-3 group w-fit mx-auto whitespace-nowrap"
                                icon={
                                    <FaAngleRight className="group-hover:translate-x-2 transition-all duration-100" />
                                }
                                variant="primary-outline"
                            >
                                Order Now
                            </Button>
                        </div>
                    ))}

                    <div
                        className="bg-primaryGreen-700 shadow-xl w-full rounded-lg text-white flex flex-col items-start justify-center p-5 md:h-full h-[25rem]"
                        style={{
                            backgroundImage: `url(${imageTools})`,
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="mx-auto grid place-content-center">
                            <h4 className="text-lg font-bold">Others</h4>
                            <p className="pb-5">Milk, Tools, Spice, e.t.c</p>
                            <Button
                                variant="primary-outline"
                                icon={
                                    <FaAngleRight className="group-hover:translate-x-2 transition-all duration-100" />
                                }
                                className="border border-white flex items-center gap-x-3 group text-white hover:bg-transparent whitespace-nowrap"
                            >
                                See Others
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BulkOrders;
