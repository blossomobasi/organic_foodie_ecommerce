import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist as addToWishlistApi } from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const useWishlist = () => {
    const queryClient = useQueryClient();
    const { mutate: addToWishlist, isPending: isAddingToWishlist } = useMutation({
        mutationFn: ({ prodId, userId }: { prodId: string; userId: string }) =>
            addToWishlistApi(prodId, userId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            toast.success("Added to wishlist");
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });

    return { addToWishlist, isAddingToWishlist };
};

export default useWishlist;
