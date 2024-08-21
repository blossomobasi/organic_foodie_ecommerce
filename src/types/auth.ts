export type User = {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    password: string;
    role: string;
    isBlocked: boolean;
    address: string;
    wislist: string[];
    __v: number;
};

export type RegisterResponse = {
    success: boolean;
    message: string;
    user: User;
};

export type LoginResponse = {
    success: boolean;
    message: string;
    findUser: User;
    refreshToken: string;
};

export type LoginData = {
    email: string;
    password: string;
};

export type RegisterData = {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    password: string;
    role: string;
    address: string;
};
