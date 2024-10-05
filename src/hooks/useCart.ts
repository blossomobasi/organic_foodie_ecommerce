import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    addToCart as addToCartApi,
    getCart,
    removeItemFromCart as removeItemFromCartApi,
} from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const useAddToCart = () => {
    const queryClient = useQueryClient();
    const { mutate: addToCart, isPending: isAddingItemToCart } = useMutation({
        mutationFn: addToCartApi,
        onSuccess: () => {
            toast.success("Product added to cart");
            queryClient.invalidateQueries({
                queryKey: ["cart"],
            });
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });

    const { mutate: removeItemFromCart, isPending: isRemovingItemFromCart } = useMutation({
        mutationFn: removeItemFromCartApi,
        onSuccess: () => {
            toast.success("Product removed successfully");
            queryClient.invalidateQueries({
                queryKey: ["cart"],
            });
        },
        onError: (err: AxiosError) => {
            const errorMessage = (err.response?.data as { message: string }).message;
            toast.error(errorMessage);
        },
    });
    const isPending = isAddingItemToCart || isRemovingItemFromCart;

    return { addToCart, isPending, removeItemFromCart };
};

const useCart = (userId: string) => {
    const { data: cart, isLoading } = useQuery({
        queryKey: ["cart", userId],
        queryFn: () => getCart(userId),
    });

    return { cart, isLoading };
};

export { useAddToCart, useCart };
