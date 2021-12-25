import App from "./app";
import { PORT } from "./config";
import { SampleController } from "./controllers/sample/sample.controller";
import { SecurityController } from "./controllers/security/security.controller";

// ATTACHING ALL THE CONTROLLERS
const app = new App([new SecurityController(), new SampleController()], PORT);

// STARTING THE SERVER
app.listen();
