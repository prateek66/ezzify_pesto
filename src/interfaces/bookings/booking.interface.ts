export interface BookingInterface {
  userID: string;
  total_amount: number;
  bookings: { serviceID: string; vendorID: string }[];
  status: string;
}
