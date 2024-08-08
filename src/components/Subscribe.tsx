import { FaPaperPlane } from "react-icons/fa";
import GREEN_DESIGN from "../assets/images/green_design.png";
import Triangle from "../assets/images/triangle.png";
import HalfCircle from "../assets/images/half_circle.png";

const Subscribe = () => {
    return (
        <section className="md:py-20 py-10 md:px-20 px-5 bg-primaryGreen-100">
            <div
                className="bg-primaryGreen-400 rounded-lg flex flex-col items-center jusfify-center text-center text-white md:p-16 p-8 relative"
                style={{ backgroundImage: `url(${GREEN_DESIGN})`, backgroundSize: "cover" }}
            >
                <img
                    src={Triangle}
                    alt="Triangle design"
                    className="absolute lg:left-20 -left-4 lg:-top-5 -top-10"
                />
                <img
                    src={HalfCircle}
                    alt="Half circle design"
                    className="absolute lg:right-36 lg:bottom-20 -right-4 -bottom-3"
                />

                <div>
                    <h3 className="sm:text-4xl text-3xl font-bold nichrome">
                        Subscribe Our Newsletter
                    </h3>
                    <p className="md:py-5 py-3">
                        Receive latest updates on our products and many other things every week.
                    </p>
                </div>

                <form className="bg-white md:py-2 py-1 md:px-3 px-1 rounded-xl md:w-[25rem] w-full flex justify-between items-center space-x-3">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="focus-within:outline-none w-full pl-2 text-grey-600"
                    />
                    <button className="bg-primaryGreen-700 p-3 rounded-md">
                        <FaPaperPlane />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
