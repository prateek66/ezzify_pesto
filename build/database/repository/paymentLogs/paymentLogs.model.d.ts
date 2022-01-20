import mongoose from "mongoose";
import { PaymentInterface } from "../../../interfaces/paymentLogs/payment.interface";
declare const Payment: mongoose.Model<PaymentInterface, {}, {}, {}>;
export default Payment;
