import { IoStarSharp } from "react-icons/io5";
import { Rating } from "../types/products";

const ShowReview = ({ review }: { review: Rating[] | undefined }) => {
    return (
        <div>
            {review?.map((item, index) => (
                <div key={index} className="flex space-x-3 py-3">
                    <div className="flex items-center space-x-2">
                        {Array.from({ length: item.star }).map((_, index) => (
                            <IoStarSharp
                                key={index}
                                size={20}
                                className="text-secondaryOrange-400"
                            />
                        ))}
                        {/* <span>{item}</span> */}
                    </div>
                    {/* <p className="text-gray-600">{item.review}</p> */}
                </div>
            ))}
        </div>
    );
};

export default ShowReview;
