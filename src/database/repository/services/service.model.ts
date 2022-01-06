import mongoose, { Model, Schema } from "mongoose";
import { ServicesInterface } from "../../../interfaces/services/services.interface";
import config from "../../../config/config";

const { ENCRYPTION_KEY } = config;


const ServicesSchema = new mongoose.Schema(
    {
        name: { type: String, default: " ", required: true, unique: true},
        description: { type: String, default: " ", required: true },
        image: { type: String, default: " ", required: true },
    },
  {
    timestamps: true,
  }
);

const Services = mongoose.model<ServicesInterface>("Services", ServicesSchema);

export default Services;
