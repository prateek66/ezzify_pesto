export interface BookingInterface {
  userID: string;
  total_amount: number;
  // bookings: { serviceID: string; vendorID: string }[];
  vendorID: string;
  serviceID: string;
  payment: boolean;
  status: string;
}
