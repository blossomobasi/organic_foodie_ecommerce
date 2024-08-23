import { useQuery } from "@tanstack/react-query";
import { getNewProducts, getPopularProducts, getProduct, getProducts } from "../services";

const useProducts = () => {
    const { data: products, isLoading: isLoadingProducts } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const { data: newProducts, isLoading: isLoadingNewProducts } = useQuery({
        queryKey: ["newProducts"],
        queryFn: getNewProducts,
    });

    const { data: popularProducts, isLoading: isLoadingPopularProducts } = useQuery({
        queryKey: ["popularProducts"],
        queryFn: getPopularProducts,
    });

    const isLoading = isLoadingProducts || isLoadingNewProducts || isLoadingPopularProducts;

    return { products, newProducts, popularProducts, isLoading };
};

const useProduct = (id: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id),
    });

    return { data: data?.singleProduct, isLoading };
};

export { useProducts, useProduct };
