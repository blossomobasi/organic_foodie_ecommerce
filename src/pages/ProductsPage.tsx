import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Product } from "../types/products";
import { useAddToCart, useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProduct";

import { IoStarSharp } from "react-icons/io5";

import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import ScrollToTop from "../ui/ScrollToTop";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

const ProductsPage = () => {
    const userId = Cookies.get("userId") || "";
    const refreshToken = Cookies.get("refreshToken") || "";
    const { products, isLoading } = useProducts();
    const { cart } = useCart();
    const { addToCart, isPending: isAddingToCart } = useAddToCart();
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState<Product[]>();

    // Load wishlist from localstorage on initial render
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || "[]");
        setWishlist(storedWishlist);
    }, [userId]);

    if (isLoading) return <Spinner />;

    function handleAddToCart(e: React.MouseEvent, productId: string) {
        e.stopPropagation();

        if (!userId || !refreshToken) {
            toast.error("Please login to add to cart");
            navigate("/login");
            return;
        }

        if (isAddingToCart) return;

        addToCart({ productId, count: 1, userId });
    }

    function handleAddToWishlist(e: React.MouseEvent, product: Product) {
        e.stopPropagation();

        const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userId}`) || "[]");

        // Check if product already exists in the wishlist
        const isInWishlist = storedWishlist.some((item: Product) => item._id === product._id);

        let updatedWishlist;

        if (isInWishlist) {
            // Remove from wishlist if it already exists
            updatedWishlist = storedWishlist.filter((item: Product) => item._id !== product._id);
        } else {
            // Add product to wishlist
            updatedWishlist = [...storedWishlist, product];
        }

        localStorage.setItem(`wishlist_${userId}`, JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
    }

    const isProductInWishlist = (productId: string) =>
        wishlist?.some((item) => item._id === productId);

    const isProductInCart = (productId: string) => {
        return cart?.userOrdersCart[0].products.some((item) => item.productId._id === productId);
    };

    return (
        <ScrollToTop>
            <section className="flex justify-center">
                <div className="lg:px-20 px-5 pt-10 max-w-[120rem] w-full">
                    <h1 className="text-5xl pb-10 font-semibold text-primaryGreen-700 nichrome">
                        All Products
                    </h1>

                    <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-20">
                        {products?.allProduct.map((product) => (
                            <div
                                key={product.title + crypto.randomUUID()}
                                className=" flex-shrink-0 cursor-pointer"
                                onClick={() => {
                                    if (!userId || !refreshToken) {
                                        toast.error("Please login to view product details");
                                        navigate("/login");
                                        return;
                                    }

                                    navigate(`/products/${product._id}`);
                                }}
                            >
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-[15rem]"
                                />
                                <p className="flex justify-between items-center py-3">
                                    <span className="text-grey-600">{product.category}</span>
                                    {isProductInWishlist(product._id) ? (
                                        <FaHeart
                                            size={20}
                                            className="text-primaryGreen-700"
                                            onClick={(e) => handleAddToWishlist(e, product)}
                                        />
                                    ) : (
                                        <FiHeart
                                            size={20}
                                            className="hover:text-primaryGreen-700"
                                            onClick={(e) => handleAddToWishlist(e, product)}
                                        />
                                    )}
                                </p>
                                <h4 className="font-semibold text-xl nichrome capitalize">
                                    {product.title}
                                </h4>
                                <p className="flex items-center justify-between py-3">
                                    <span className="flex items-center space-x-2 text-grey-600">
                                        <IoStarSharp
                                            size={20}
                                            className="text-secondaryOrange-400"
                                        />
                                        <span>
                                            {product.totalRating}({product.rating.length})
                                        </span>
                                    </span>
                                    <span className="font-medium">${product.price}</span>
                                </p>
                                <Button
                                    variant="primary-outline"
                                    className="w-full mt-3"
                                    disabled={isProductInCart(product._id)}
                                    onClick={(e) => handleAddToCart(e, product._id)}
                                >
                                    {isProductInCart(product._id) ? "In cart" : "Add to Cart"}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </ScrollToTop>
    );
};

export default ProductsPage;
