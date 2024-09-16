import { useProducts } from "../hooks/useProduct";
import DisplayProducts from "../ui/DisplayProducts";

const SimilarProduct = () => {
    const { products } = useProducts();

    return (
        <section className="bg-white w-full pb-20 flex flex-col items-center">
            <div className="max-w-[110rem] w-full">
                <DisplayProducts
                    data={products?.allProduct}
                    title="People Also Buy"
                    description="Browse our most popular snacks and make your day more beautiful and glorious"
                />
            </div>
        </section>
    );
};

export default SimilarProduct;
