import { IoStarSharp } from "react-icons/io5";
import Button from "../ui/Button";
import { useState } from "react";
import { createReview as createReviewApi } from "../services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useParams } from "react-router-dom";

const CreateReview = () => {
    const params = useParams();
    const { register, handleSubmit, formState } = useForm<{ comment: string }>();
    const { errors } = formState;
    const [star, setStar] = useState(1);
    const queryClient = useQueryClient();

    const { mutate: createReview, isPending: isCreatingReview } = useMutation({
        mutationFn: createReviewApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["review"],
            });
            toast.success("Review Added Successfully");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    function onCreateReview(data: { comment: string }) {
        if (isCreatingReview) return;

        createReview({ star, prodId: params.productId || "", comment: data.comment });
    }

    return (
        <div>
            <h2 className="text-2xl font-bold">How would you rate this?</h2>
            <div className="flex py-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center space-x-3 cursor-pointer"
                    >
                        <span
                            className={clsx("", {
                                "text-secondaryOrange-400": index < star,
                                invisible: index !== star - 1,
                            })}
                        >
                            {star}
                        </span>

                        <IoStarSharp
                            key={index}
                            size={30}
                            className={clsx("hover:text-secondaryOrange-400", {
                                "text-secondaryOrange-400": index < star,
                                "hover:text-secondaryOrange-400": index < star,
                            })}
                            onClick={() => {
                                setStar(index + 1);
                            }}
                        />
                    </div>
                ))}
            </div>

            <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onCreateReview)}>
                {/* <TextInput
                    label="Add a headline"
                    placeholder="Write a summary of you review"
                    inputId="headline"
                /> */}
                <label htmlFor="reveiw" className="text-lg font-medium">
                    Write a Review
                </label>
                <textarea
                    id="comment"
                    {...register("comment", { required: "Comment is required" })}
                    className="border rounded-md px-2 py-3 w-full placeholder:text-[#566363] text-[#566363] focus-within:outline-none"
                    placeholder="Tell us what you think"
                    cols={30}
                    rows={7}
                />
                <span className="text-red-600">{errors?.comment?.message}</span>

                <Button className="self-start">Submit Review</Button>
            </form>
        </div>
    );
};

export default CreateReview;
