import { useState } from "react";

import { Rating } from "../types/products";

import { FaCircleUser } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

import Button from "../ui/Button";

const ShowReview = ({ review }: { review: Rating[] | undefined }) => {
    const [visibleReviews, setVisibleReviews] = useState(6); // Initially display 6 reviews

    const handleLoadMore = () => {
        setVisibleReviews(review?.length || 0); // Show all reviews when button is clicked
    };

    return (
        <div className="py-10">
            <div className="flex flex-wrap gap-5">
                {review?.slice(0, visibleReviews).map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#C4D1D0] p-3 rounded-xl sm:w-[23rem] w-full"
                    >
                        <figure>
                            <FaCircleUser size={35} className="text-gray-400" />
                            <figcaption className="">postedBy: {item.postedBy}</figcaption>
                        </figure>

                        <span className="flex py-2">
                            {Array.from({ length: item.star }).map((_, index) => (
                                <IoStarSharp
                                    key={index}
                                    size={20}
                                    className="text-secondaryOrange-400"
                                />
                            ))}
                        </span>

                        <p className="text-gray-600 first-letter:capitalize">{item.comment}</p>
                    </div>
                ))}
            </div>

            {review && visibleReviews < review.length && (
                <div className="grid place-content-center py-5">
                    <Button onClick={handleLoadMore}>Load more</Button>
                </div>
            )}
        </div>
    );
};

export default ShowReview;
