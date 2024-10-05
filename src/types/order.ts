export type PlaceOrder = {
    userId: string;
    address: string;
    distEmail: string;
    location: string;
};

export type OrderResponse = {
    success: boolean;
    message: string;
    authorization_url: string;
};
