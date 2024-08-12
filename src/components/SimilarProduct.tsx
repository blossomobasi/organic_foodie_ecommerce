import { similarProductsData } from "../data/productsData";
import DisplayProducts from "../ui/DisplayProducts";

const SimilarProduct = () => {
    const similarProducts = similarProductsData;

    return (
        <section className="bg-white w-full pt-10 pb-20 flex flex-col items-center">
            <div className="max-w-[110rem] w-full">
                <DisplayProducts
                    data={similarProducts}
                    title="People Also Buy"
                    description="Browse our most popular snacks and make your day more beautiful and glorious"
                />
            </div>
        </section>
    );
};

export default SimilarProduct;
