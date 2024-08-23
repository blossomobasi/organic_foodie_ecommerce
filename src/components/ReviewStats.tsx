import { IoStarSharp } from "react-icons/io5";
import { Rating } from "../types/products";

const ReviewStats = ({ rating }: { rating: Rating[] | undefined }) => {
    const totalReviews = rating?.length || 0;

    const FIVES_STARS = rating?.filter((rate) => rate.star === 5).length || 0;
    const FOUR_STARS = rating?.filter((rate) => rate.star === 4).length || 0;
    const THREE_STARS = rating?.filter((rate) => rate.star === 3).length || 0;
    const TWO_STARS = rating?.filter((rate) => rate.star === 2).length || 0;
    const ONE_STAR = rating?.filter((rate) => rate.star === 1).length || 0;

    const createProgressBar = (count: number) => {
        const widthPercentage = (count / totalReviews) * 100;
        return (
            <div className="w-full h-2 bg-grey-300 rounded">
                <div
                    style={{ width: `${widthPercentage}%` }}
                    className="h-full bg-grey-600 rounded"
                ></div>
            </div>
        );
    };

    return (
        <div>
            <p className="text-lg font-semibold py-3">{totalReviews} Reviews</p>

            <span className="flex pb-3">
                <IoStarSharp size={20} className="text-secondaryOrange-400" />
                <IoStarSharp size={20} className="text-secondaryOrange-400" />
                <IoStarSharp size={20} className="text-secondaryOrange-400" />
                <IoStarSharp size={20} className="text-secondaryOrange-400" />
                <IoStarSharp size={20} className="text-secondaryOrange-400" />
            </span>

            <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-5 w-[25rem]">
                    <p className="whitespace-nowrap">5 Stars</p>
                    {createProgressBar(FIVES_STARS)}
                    <p>{FIVES_STARS}</p>
                </div>
                <div className="flex items-center space-x-5 w-[25rem]">
                    <p className="whitespace-nowrap">4 Stars</p>
                    {createProgressBar(FOUR_STARS)}
                    <p>{FOUR_STARS}</p>
                </div>
                <div className="flex items-center space-x-5 w-[25rem]">
                    <p className="whitespace-nowrap">3 Stars</p>
                    {createProgressBar(THREE_STARS)}
                    <p>{THREE_STARS}</p>
                </div>
                <div className="flex items-center space-x-5 w-[25rem]">
                    <p className="whitespace-nowrap">2 Stars</p>
                    {createProgressBar(TWO_STARS)}
                    <p>{TWO_STARS}</p>
                </div>
                <div className="flex items-center space-x-5 w-[25rem]">
                    <p className="whitespace-nowrap mr-3">1 Star</p>
                    {createProgressBar(ONE_STAR)}
                    <p>{ONE_STAR}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewStats;
