import mongoose, { Model, Schema } from "mongoose";
import { config } from "../../../config";
import { UsersInterface } from "../../../interfaces/users/users.interface";

import jwt from "jsonwebtoken"; // should be remove and move to common package
import { sendMail } from "../../../helper/sendgrid"; // move to common package
import { generateOtp } from "../../../helper/genrate_otp";

const { ENCRYPTION_KEY } = config;

interface UserDocument extends UsersInterface, Document {
  toJSON(): void;
  generateAuthToken(): Promise<string>;
}

interface UserModel extends Model<UserDocument> {
  findByCredentials(email: string): Promise<UserDocument>;
  userOtpVerify(id: string, otp: string): Promise<UserDocument>;
}

const UserSchema: Schema<UserDocument> = new mongoose.Schema(
  {
    firstName: { type: String, default: " " },
    lastname: { type: String, default: " " },
    mobile_number: { type: Number, default: 0 },
    address: { type: String, default: " " },
    profileImage: { type: String, default: " " },
    email: { type: String, default: "" },
    otpVerify: { type: String, trim: true, default: " " },
    is_emaiVerified: { type: Boolean, default: false },
    city: { type: String, default: " " },
    state: { type: String, default: " " },
    roles: { type: String, enum: ["admin", "user", "vendor"], default: "user" },
    amount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    availabale_date: { type: String, default: " " },
    available_time: { type: String, default: " " },
    tokens: [
      {
        token: {
          type: String,
        },
        device_token: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.tokens;

  return userObject;
};

/**
 * To generate auth tokens for users
 */
UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, ENCRYPTION_KEY);

  // @ts-ignore
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

/**
 * [x] Create new user if not existing and send otp to user's email
 * [x] Send otp to existing user's email
 *
 * @param email email of the user
 * @returns user object with otpVerify property
 */
UserSchema.statics.findByCredentials = async (email: string) => {
  const user = await User.findOne({ email });
  const otp = generateOtp();

  if (!user) {
    const newUser = new User({ email, otpVerify: otp });
    // await sendMail(otp, email);
    await newUser.save();
    return newUser;
  }

  user.otpVerify = otp;
  // await sendMail(otp, email);
  await user.save();
  return user;
};

/**
 * [x] find user with given otp to verify otp
 *
 * @param id object id of user object
 * @param otp otp sent to that user
 * @returns user object with otpVerify as empty string
 */
UserSchema.statics.userOtpVerify = async (id: string, otp: string) => {
  const user = await User.findOne({ _id: id, otpVerify: otp });
  if (!user) throw new Error("Invalid OTP");

  user.otpVerify = "";
  await user.save();
  return user;
};

const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);

export default User;
