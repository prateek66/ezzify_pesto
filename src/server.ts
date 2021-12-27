import "dotenv/config";

import App from "./app";
import { AppLogsController } from "./controllers/appLogs/logs.controller";
import { SampleController } from "./controllers/sample/sample.controller";
import { SecurityController } from "./controllers/security/security.controller";

const { PORT } = process.env;

// ATTACHING ALL THE CONTROLLERS
const app = new App([
    new SecurityController(), 
    new AppLogsController(), 
    new SampleController()
], PORT);

// STARTING THE SERVER
app.listen();
