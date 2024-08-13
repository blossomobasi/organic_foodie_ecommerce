import { useParams } from "react-router-dom";
import SimilarProduct from "../components/SimilarProduct";

const ProductsIdPage = () => {
    const params = useParams();

    return (
        <section className="lg:px-20 px-5 flex flex-col items-center">
            <div className="max-w-[110rem] w-full">
                <div className="text-center text-2xl font-bold py-5">ID: {params.productId}</div>

                <SimilarProduct />
            </div>
        </section>
    );
};

export default ProductsIdPage;
