import { ApiError, BadRequestError } from "@ezzify/common/build";
import express from "express";

import User from "./users.model";

export class UsersDB {
  public signupUser = (email: string, res: express.Response) => {
    return new Promise((resolve, reject) => {
      const user = User.findByCredentials(email);

      if (!user) {
        ApiError.handle(new BadRequestError("User with this email not found"), res);
        return;
      }

      resolve(user);
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
