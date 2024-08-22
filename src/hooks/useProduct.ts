import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../services";

const useProducts = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    return { products, isLoading };
};

const useProduct = (id: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id),
    });

    return { data: data?.singleProduct, isLoading };
};

export { useProducts, useProduct };

// const popularProducts = popularProductsData;
// const [products, setProducts] = useState<ProductResponse | undefined>(undefined);

// useEffect(() => {
//     const fetchProducts = async () => {
//         const response = await $http.get("/api/product/all");
//         const data = await response.data;
//         setProducts(data);
//     };

//     fetchProducts();
// }, []);
