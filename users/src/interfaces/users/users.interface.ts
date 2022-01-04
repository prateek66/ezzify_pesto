export interface UsersInterface {
  firstName: string;
  lastname: string;
  mobile_number: number;
  address: string;
  profileImage: string;
  email: string;
  otpVerify: string;
  is_emaiVerified: boolean;
  city: string;
  state: string;
  roles: string;
  amount: number;
  isActive: boolean;
  availabale_date: string;
  available_time: string;
  tokens?: any[];
  token: string;
  device_token: string;
}
