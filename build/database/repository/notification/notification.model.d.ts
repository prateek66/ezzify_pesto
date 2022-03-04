import mongoose from "mongoose";
import { NotificationInterface } from "../../../interfaces/notifiaction/notification.interface";
declare const Notification: mongoose.Model<NotificationInterface, {}, {}, {}>;
export default Notification;
