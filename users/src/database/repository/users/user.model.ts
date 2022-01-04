import mongoose from "mongoose";
import { UserInterface } from "../../../interfaces/users/user.interface";

import jwt from "jsonwebtoken";    // should be remove and move to common package
import { sendMail } from "../../../helper/sendgrid";   // move to common package
import { generateOtp } from "../../../helper/genrate_otp";

export interface USERDOC extends UserInterface, Document {
    generateAuthToken(): void;
    findByCredentials(email: string): void;
    userOtpVerify(id: string,otp: string): void;
}

const UserSchema = new mongoose.Schema<USERDOC>({
    firstName: { type: String, default: ' ' },
    lastname: {type: String, default: ' ' },
    mobile_number: { type: Number, default: 0 },
    address: { type: String, default: " " },
    profileImage: { type: String, default: ' ' },
    email: { type: String, default: "" },
    otpVerify :{type: String,trim: true,default: " "},
    is_emaiVerified: {type: Boolean, default: false},
    city: {type: String, default: " "},
    state: {type: String, default: " "},
    roles: {type: String, enum: ['admin','user','vendor'], default: 'user' },
    amount: {type: Number, default: 0},
    isActive: {type: Boolean, default: false},
    availabale_date: {type: String, default: " "},
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
    timestamps: true
    });



UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.tokens;

  return userObject;
};
 // To generateAuthToken for users
UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "ezzify");    //'ezzify is secret key should move to .env

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

UserSchema.statics.findByCredentials = async (email) => {
  const user = await User.findOne({ email });
  console.log(user);
    const otp = generateOtp();
    
    console.log('====================================');
    console.log(otp);
    console.log('====================================');

    if (!user) {
        const user = new User({ email, otpVerify: otp });

      const send_mail = await sendMail(otp, email);
      console.log('====================================');
      console.log(send_mail);
      console.log('====================================');

        return await user.save();

  }
    const login_otp = generateOtp();
    user.otpVerify = login_otp;
    const send_mail = await sendMail(login_otp, email);
  return await user.save();
};

UserSchema.statics.userOtpVerify = async (id, otp) => {
  const user = await User.findOne({ _id: id, otpVerify: otp });
    if (!user) throw new Error("Invalid OTP");
    
    user.otpVerify =  '';
   return await user.save();
};


const User = mongoose.model<USERDOC>("User", UserSchema);

export default User;


