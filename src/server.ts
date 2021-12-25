import App from "./app";
import { PORT } from "./config";
import { SecurityController } from "./controllers/security/security.controller";

// ATTACHING ALL THE CONTROLLERS
const app = new App([new SecurityController()], PORT);

// STARTING THE SERVER
app.listen();
