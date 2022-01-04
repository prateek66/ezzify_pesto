import express from "express";
import { BaseController, Controller, validationMiddleware, sanitizeBody, Security, SuccessResponse } from "@ezzify/common/build";
import { upload } from "../../middlewares/uploadAWS";
import { signupUserService, verifyOtpService, updateUserService } from "../../services/user_services";
import auth  from "../../middlewares/auth";

export class UserController extends BaseController implements Controller {
  public path = "/user";
  public router = express.Router();

  constructor() {
    super();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    this.router.post(`${this.path}/signup`, this.signupUser);
      this.router.post(`${this.path}/verify`, this.verifyUser);
      this.router.patch(`${this.path}/update_user`,upload.single('file'),auth(['user']),this.updateUser);

  };

    private signupUser = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const signup = await signupUserService(req.body.email);
        new SuccessResponse("senddd", signup).send(res);
    });

    private verifyUser = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const verify = await verifyOtpService(req.body.id, req.body.otp);
        new SuccessResponse("senddd", verify).send(res);
    });

    private updateUser = this.catchAsyn(async (req: any, res: express.Response, next: express.NextFunction) => {
        // console.log('====================================');
        // console.log(req.user);
        // console.log('====================================');
        if (!req.user) throw new Error("please login");

        let updatedUser = { ...req.body, profileImage: req.file.location };
        const updateUser = await updateUserService(updatedUser, req.user._id);
        //if(!updateUser) throw new Error("something went wrong with service!");
        new SuccessResponse("senddd", updateUser).send(res);
    });

//   private _decryption = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     // 1. Sanitizing Request Body
//     req.body = sanitizeBody(DecryptionModel, req.body);

//     // 2. Decrypt Request Body
//     const { data } = req.body;
//     const decryptedData = Security.decryption(data);

//     // 3. Sending Encrypted Data to Client
//     new SuccessResponse("data decrypted", decryptedData).send(res);
//   });
}
