export interface BookingInterface {
  userID: string;
  total_amount: number;
   bookings: { serviceID: string; vendorID: string }[];
  payment: boolean;
  status: string;
}
