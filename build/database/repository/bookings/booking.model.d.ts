import mongoose from "mongoose";
import { BookingInterface } from "../../../interfaces/bookings/booking.interface";
declare const Bookings: mongoose.Model<BookingInterface, {}, {}, {}>;
export default Bookings;
