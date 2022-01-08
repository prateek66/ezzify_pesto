export interface UsersInterface {
    firstName: string;
    lastName: string;
    mobileNumber: number;
    address: string;
    profileImage: string;
    adharCardImage: string;
    panCardImage: string;
    email: string;
    otpVerify: string;
    isEmaiVerified: boolean;
    city: string;
    state: string;
    roles: string;
    amount: number;
    isActive: boolean;
    availabaleDate: string;
    services: {
        serviceID: string;
        basePrice: number;
    }[];
    availableTime: string;
    isApproved: boolean;
    tokens?: {
        token: string;
        deviceToken: string;
    }[];
}
