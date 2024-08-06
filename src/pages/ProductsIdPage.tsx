import { useParams } from "react-router-dom";

const ProductsIdPage = () => {
    const params = useParams();

    return <div className="text-2xl text-center py-5">ID: {params.productId}</div>;
};

export default ProductsIdPage;
