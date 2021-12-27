import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import useragent from "express-useragent";

import Controller from "./interfaces/controller.interface";
import { PATH } from "./config";
import { ApiError, InternalError, NotFoundError } from "./core/apiError.core";

const { ENVIRONMENT } = process.env;

class App {
  public app: express.Application;
  public port: string | undefined;

  constructor(controllers: Controller[], port: string | undefined) {
    this.app = express();
    this.port = port;

    this._initalizeMiddlewares();
    this._initalizeControllers(controllers);
    this._initalizeErrorHandling();
  }

  /**
   * A generic function to attach global level middlewares
   */
  private _initalizeMiddlewares = () => {
    // SETTING REQUEST START TIME
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.set("start", `${Date.now()}`);
      next();
    });

    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(useragent.express());
  };

  /**
   * A generic function to attach all the controllers
   * @param controllers
   */
  private _initalizeControllers = (controllers: Controller[]) => {
    controllers.forEach((controller) => {
      this.app.use(PATH, controller.router);
    });
  };

  /**
   * A generic function to handle errors at global level
   */
  private _initalizeErrorHandling = () => {
    // catch 404 and forward to error handler
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      return ApiError.handle(new NotFoundError(), res);
    });

    this.app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (err instanceof ApiError) {
        return ApiError.handle(err, res);
      } else {
        if (ENVIRONMENT === "DEV") {
          return res.status(500).send(err.message);
        }
        return ApiError.handle(new InternalError(), res);
      }
    });
  };

  /**
   * Starting the server
   */
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
