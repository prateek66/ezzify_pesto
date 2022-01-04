import "dotenv/config";

import App from "./app";
import { SampleController } from "./controllers/sample/sample.controller";

import { SecurityController } from "./controllers/security/security.controller";

import { UserController } from "./controllers/users/user_auth";


const PORT = '4001';  

// ATTACHING ALL THE CONTROLLERS
const app = new App([new SecurityController(), new SampleController(), new UserController()], PORT);

// STARTING THE SERVER
app.listen();
