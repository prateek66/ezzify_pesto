import mongoose, { Model, Schema } from "mongoose";
import config from "../../../config/config";

import { BookingInterface } from "../../../interfaces/bookings/booking.interface";

const { ENCRYPTION_KEY } = config;

const booking = new mongoose.Schema({
  serviceID: { type: Schema.Types.ObjectId, ref: "Services"},
  vendorID: { type: Schema.Types.ObjectId, ref: "User"},
});

const BookingsSchema = new mongoose.Schema(
  {
        userID: { type: Schema.Types.ObjectId, ref: "User" },
        total_amount: { type: Number, default: 0 },
        bookings: [booking],
        status: {type: String, enum: ["active", "completed"], default: "active"}
  },
  {
    timestamps: true,
  }
);

// BookingsSchema.plugin(require("mongoose-autopopulate"));

const Bookings = mongoose.model<BookingInterface>("Bookings", BookingsSchema);

export default Bookings;
