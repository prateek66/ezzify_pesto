import mongoose from "mongoose";
import { RatingInterface } from "../../../interfaces/ratings/ratings.interface";
declare const Ratings: mongoose.Model<RatingInterface, {}, {}, {}>;
export default Ratings;
