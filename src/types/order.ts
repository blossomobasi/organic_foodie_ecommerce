export type PlaceOrder = {
    userId: string;
    items: [];
    amount: number;
    address: string;
};

export type OrderResponse = {
    success: boolean;
    message: string;
    authorization_url: string;
};
