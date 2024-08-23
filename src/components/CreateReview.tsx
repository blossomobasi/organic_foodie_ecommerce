import { IoStarSharp } from "react-icons/io5";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

const CreateReview = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold">How would you rate this?</h2>
            <div className="flex py-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <IoStarSharp key={index} size={30} className="hover:text-secondaryOrange-400" />
                ))}
            </div>

            <form className="flex flex-col space-y-3">
                <TextInput
                    label="Add a headline"
                    placeholder="Write a summary of you review"
                    inputId="headline"
                />
                <label htmlFor="reveiw" className="text-lg font-medium">
                    Write a Review
                </label>
                <textarea
                    id="review"
                    className="border rounded-md px-2 py-3 w-full placeholder:text-[#566363] text-[#566363] focus-within:outline-none"
                    placeholder="Tell us what you think"
                    cols={30}
                    rows={7}
                />

                <Button className="self-start">Submit Review</Button>
            </form>
        </div>
    );
};

export default CreateReview;
