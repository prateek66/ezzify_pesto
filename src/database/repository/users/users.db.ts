import express from "express";
import { ApiError, BadRequestError } from "../../../core/apiError.core";

import User from "./users.model";

export class UsersDB {
  public signupUser = (email: string, role: string, SENDGRID_API_KEY: string, SENDGRID_SENDER_EMAIL: string, res: express.Response) => {
    return new Promise((resolve, reject) => {
      try {
        const user = User.findByCredentials(email, role, SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL);

        if (!user) {
          ApiError.handle(new BadRequestError("User with this email not found"), res);
          return;
        }

        resolve(user);
      } catch (err: any) {
        ApiError.handle(err, res);
      }
    });
  };

  public verifyOtpService = (data: any, res: express.Response) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await User.userOtpVerify(data.id, data.otp);
        let token = await user.generateAuthToken();

        if (!user) {
          ApiError.handle(new BadRequestError("User with this email not found"), res);
          return;
        }

        resolve({ user, token });
      } catch (err: any) {
        ApiError.handle(err, res);
      }
    });
  };
}
