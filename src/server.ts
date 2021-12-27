import "dotenv/config";

import App from "./app";
import { SampleController } from "./controllers/sample/sample.controller";
import { SecurityController } from "./controllers/security/security.controller";

const { PORT } = process.env;

// ATTACHING ALL THE CONTROLLERS
const app = new App([new SecurityController(), new SampleController()], PORT);

// STARTING THE SERVER
app.listen();
