import { Model } from "mongoose";
import { UsersInterface } from "../../../interfaces/users/users.interface";
interface UserDocument extends UsersInterface, Document {
    toJSON(): void;
    generateAuthToken(): Promise<string>;
}
interface UserModel extends Model<UserDocument> {
    findByCredentials(email: string, role: string, SENDGRID_API_KEY: any, SENDGRID_SENDER_EMAIL: any): Promise<UserDocument>;
    userOtpVerify(id: string, otp: string): Promise<UserDocument>;
}
declare const User: UserModel;
export default User;
