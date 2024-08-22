export type ProductsType = {
    image: string;
    title: string;
    category: string;
    price: number;
    totalReview: number;
    averageReview: number;
};

export type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    quantity: string;
    sold: string;
    images: string[];
    totalRating: number;
    rating: Rating[];
};

export type Rating = {
    _id: string;
    star: number;
    comment: string;
    postedBy: string;
};

export type ProductResponse = {
    success: boolean;
    message: string;
    allProduct: Product[];
};

export type SingleProductResponse = {
    success: boolean;
    message: string;
    singleProduct: Product;
};
