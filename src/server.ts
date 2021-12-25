import App from "./app";
import { PORT } from "./config";

// ATTACHING ALL THE CONTROLLERS
const app = new App([], PORT);

// STARTING THE SERVER
app.listen();
