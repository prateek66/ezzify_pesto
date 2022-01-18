import mongoose, { Model, Schema } from "mongoose";
import config from "../../../config/config";

import { BookingInterface } from "../../../interfaces/bookings/booking.interface";

const { ENCRYPTION_KEY } = config;

// const booking = new mongoose.Schema({

// });

const BookingsSchema = new mongoose.Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    total_amount: { type: Number, default: 0 },
    // bookings: [booking],
    serviceID: { type: Schema.Types.ObjectId, ref: "Services", autopopulate: true },
    vendorID: { type: Schema.Types.ObjectId, ref: "User", autopopulate: true },
    status: { type: String, enum: ["active", "completed"], default: "active" },
    payment : {type: Boolean, default: false},
  },
  {
    timestamps: true,
  }
);

BookingsSchema.plugin(require("mongoose-autopopulate"));

const Bookings = mongoose.model<BookingInterface>("Bookings", BookingsSchema);

export default Bookings;
