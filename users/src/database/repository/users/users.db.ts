import { ApiError, BadRequestError } from "@ezzify/common/build";
import express from "express";

import User from "./users.model";

export class UsersDB {
  public signupUser = (email: string, res: express.Response) => {
    return new Promise((resolve, reject) => {
      try {
        const user = User.findByCredentials(email);

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

  public updateUserService = (data: any, id: string, res: express.Response) => {
    return new Promise(async (resolve, reject) => {
      try {
        let updatedObject = { ...data, profileImage: data.profileImage };
        const updateUser = await User.findByIdAndUpdate(id, updatedObject, { new: true });

        if (!updateUser) {
          ApiError.handle(new BadRequestError("User not found"), res);
          return;
        }

        resolve(updateUser);
      } catch (err: any) {
        ApiError.handle(err, res);
      }
    });
  };
}
