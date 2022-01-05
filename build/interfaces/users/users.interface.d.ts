export interface UsersInterface {
    firstName: string;
    lastName: string;
    mobileNumber: number;
    address: string;
    profileImage: string;
    email: string;
    otpVerify: string;
    isEmaiVerified: boolean;
    city: string;
    state: string;
    roles: string;
    amount: number;
    isActive: boolean;
    availabaleDate: string;
    availableTime: string;
    tokens?: {
        token: string;
        deviceToken: string;
    }[];
}
