import { useProducts } from "../hooks/useProduct";
import DisplayProducts from "../ui/DisplayProducts";

const NewProducts = () => {
    const { newProducts } = useProducts();

    return (
        <section className="lg:px-20 px-5 bg-white w-full pt-10 pb-20 flex flex-col items-center">
            <div className="max-w-[110rem] w-full">
                <DisplayProducts
                    data={newProducts?.products}
                    title="Our New Products"
                    description="Browse our most popular snacks and make your day <br /> more beautiful
                            and glorious"
                />
            </div>
        </section>
    );
};

export default NewProducts;
