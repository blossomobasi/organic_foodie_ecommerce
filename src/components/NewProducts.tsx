import { newProductsData } from "../data/productsData";
import DisplayProducts from "../ui/DisplayProducts";

const NewProducts = () => {
    const newProducts = newProductsData;

    return (
        <section className="px-20 bg-white w-full pt-10 pb-20">
            <DisplayProducts
                data={newProducts}
                title="Our New Products"
                description="Browse our most popular snacks and make your day <br /> more beautiful
                            and glorious"
            />
        </section>
    );
};

export default NewProducts;
