import mongoose from "mongoose";
import { ServicesInterface } from "../../../interfaces/services/services.interface";
declare const Services: mongoose.Model<ServicesInterface, {}, {}, {}>;
export default Services;
