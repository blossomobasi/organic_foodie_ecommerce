export type PlaceOrder = {
    userId: string;
    items: string[];
    amount: number;
    address: string;
};

export type OrderResponse = {
    success: boolean;
    message: string;
    authorization_url: string;
};
