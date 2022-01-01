import "dotenv/config";

import App from "./app";

import { SecurityController } from "./controllers/security/security.controller";

const { PORT } = process.env;

// ATTACHING ALL THE CONTROLLERS
const app = new App([new SecurityController()], PORT);

// STARTING THE SERVER
app.listen();
