import express from "express";
import {
  BaseController,
  Controller,
  validationMiddleware,
  sanitizeBody,
  Security,
  SuccessResponse,
  SuccessMsgResponse,
  ApiError,
  NotFoundError,
  UsersDto,
  UserBodyInterface,
  UsersProps,
  UsersDB,
  VerifyDto,
  verifyProps,
  VerifyInterface,
  upload,
  auth,
} from "@ezzify/common/build";

export class UserController extends BaseController implements Controller {
  public path = "/users";
  public router = express.Router();

  private db: UsersDB;

  constructor() {
    super();
    this.db = new UsersDB();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    this.router.post(`${this.path}/signup`, validationMiddleware(UsersDto), this.signupUser);
    this.router.post(`${this.path}/verify`, validationMiddleware(VerifyDto), this.verifyUser);
    this.router.patch(`${this.path}/update_user`, upload.single("file"), auth(["user"]), this.updateUser);
  };

  private signupUser = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { email } = sanitizeBody(UsersProps, req.body) as UserBodyInterface;

    const result = await this.db.signupUser(email, res);

    new SuccessResponse("success", result).send(res);
  });

  private verifyUser = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { id, otp } = sanitizeBody(verifyProps, req.body) as VerifyInterface;

    const result = await this.db.verifyOtpService({ id, otp }, res);

    new SuccessResponse("success", result).send(res);
  });

  private updateUser = this.catchAsyn(async (req: any, res: express.Response, next: express.NextFunction) => {
    if (!req.user) return ApiError.handle(new NotFoundError("Please Login"), res);

    let newDetails = { ...req.body, profileImage: req?.file?.location };

    const result = await this.db.updateUserService(newDetails, req.user._id, res);
    new SuccessResponse("success", result).send(res);
  });
}
