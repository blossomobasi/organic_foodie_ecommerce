import { FaPaperPlane } from "react-icons/fa";
import GREEN_DESIGN from "../assets/images/green_design.png";
import Triangle from "../assets/images/triangle.png";
import HalfCircle from "../assets/images/half_circle.png";

const Subscribe = () => {
    return (
        <section className="py-20 px-[5rem] bg-primaryGreen-100">
            <div
                className="bg-primaryGreen-400 rounded-lg flex flex-col items-center jusfify-center text-center text-white p-16 relative"
                style={{ backgroundImage: `url(${GREEN_DESIGN})`, backgroundSize: "cover" }}
            >
                <img src={Triangle} alt="Triangle design" className="absolute left-20 -top-5" />
                <img
                    src={HalfCircle}
                    alt="Half circle design"
                    className="absolute right-36 bottom-20"
                />

                <div>
                    <h3 className="text-4xl font-bold">Subscribe Our Newsletter</h3>
                    <p className="py-5">
                        Receive latest updates on our products and many other things every week.
                    </p>
                </div>

                <form className="bg-white p-2 rounded-md w-[25rem] flex justify-between items-center space-x-3">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="focus-within:outline-none w-full pl-2 text-grey-600"
                    />
                    <button type="submit" className="bg-primaryGreen-700 p-3 rounded-md">
                        <FaPaperPlane />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
