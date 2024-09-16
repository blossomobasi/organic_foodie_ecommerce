import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToWishlist as addToWishlistApi, getAllProductsInWishlist } from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const useWishlist = (userId?: string) => {
    const queryClient = useQueryClient();
    const {
        data: wishlist,
        isLoading: isLoadingWishlist,
        error,
    } = useQuery({
        queryKey: ["products", userId],
        queryFn: () => getAllProductsInWishlist(userId as string),
    });

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

    return { wishlist, isLoadingWishlist, error, addToWishlist, isAddingToWishlist };
};

export default useWishlist;
