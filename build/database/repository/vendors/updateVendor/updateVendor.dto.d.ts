export declare class UpdateVendorDto {
    firstName: string;
    lastName: string;
    mobileNumber: string;
    profileImage: string;
    city: string;
    state: string;
    isActive: string;
    isEmaiVerified: string;
    roles: string;
    adharCardImage: string;
    panCardImage: string;
    availabaleDate: string;
    availableTime: string;
    services: serviceDTO[];
}
declare class serviceDTO {
    serviceID: string;
    basePrice: number;
}
export {};
