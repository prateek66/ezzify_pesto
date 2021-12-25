import express from "express";
import cors from "cors";
import helmet from "helmet";
import useragent from "express-useragent";

import Controller from "./interfaces/controller.interface";
import { PATH } from "./config";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
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
  private _initalizeErrorHandling = () => {};

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
