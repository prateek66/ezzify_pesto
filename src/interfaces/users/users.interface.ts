export interface UsersInterface {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  address: string;
  profileImage: string;
  adharCardImage: string | null;
  panCardImage: string | null;
  email: string;
  otpVerify: string;
  isEmaiVerified: boolean;
  city: string;
  state: string;
  bookingId: Object;
  roles: string;
  amount: number;
  isActive: boolean;
  availabaleDate: string | null;
  services: { serviceID: string; basePrice: number }[];
  availableTime: string | null;
  isApproved: boolean;
  tokens?: { token: string; deviceToken: string }[];
}
