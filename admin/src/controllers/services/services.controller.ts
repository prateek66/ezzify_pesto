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
  ServicesDB,
  ServiceDto,
  ServiceProps,
  DeleteServiceDto,
  DeleteServiceProps,
  auth,
} from "@ezzify/common/build";
// import { ServicesDB } from "../../../../package/src/database/repository/services/services.db";

export class AdminController extends BaseController implements Controller {
  public path = "/admin";
  public router = express.Router();

  private db: ServicesDB;

  constructor() {
    super();
    this.db = new ServicesDB();
    this._initializeRoutes();
  }

  private _initializeRoutes = () => {
    // this.router.post(`${this.path}/signup`, validationMiddleware(UsersDto), this.signupUser);
    this.router.post(`${this.path}/create_service`, validationMiddleware(ServiceDto), upload.single("file"), auth(["admin"]), this.createServices);
    this.router.get(`${this.path}/view_service`, this.viewServices);
    this.router.patch(`${this.path}/update_service/:id`, upload.single("file"), auth(["admin"]), this.updateServices);
    this.router.delete(`${this.path}/delete_service/:id`, validationMiddleware(DeleteServiceDto), auth(["admin"]), this.deleteService);
  };

  private createServices = this.catchAsyn(async (req: any, res: express.Response, next: express.NextFunction) => {
    req.body = sanitizeBody(ServiceProps, req.body);

    let createData = { ...req.body, image: req?.file?.location };

    const createService = await this.db.createServices(createData, res);

    new SuccessResponse("success", createService).send(res);
  });

  private viewServices = this.catchAsyn(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const viewServices = await this.db.viewServices(req, res);

    new SuccessResponse("success", viewServices).send(res);
  });

  private updateServices = this.catchAsyn(async (req: any, res: express.Response, next: express.NextFunction) => {


    const serviceID = req.params.id;
    let updatedObject = { ...req.body, image: req?.file?.location };

    const updateService = await this.db.updateServices(serviceID, updatedObject, res);

    new SuccessResponse("success", updateService).send(res);
  });

  private deleteService = this.catchAsyn(async (req: any, res: express.Response, next: express.NextFunction) => {

    req.body = sanitizeBody(DeleteServiceProps, req.body);
    
    const serviceID = req.params.id;

    const deleteService = await this.db.deleteService(serviceID, res);

    new SuccessResponse("success", deleteService).send(res);
  });
}
