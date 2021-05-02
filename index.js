import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import {client_routes} from "./routes/client_routes/client_routes";
import {db_connect} from "./database/db_connect";
import cors from "cors";
import morgan from "morgan";
import {admin_routes} from "./routes/admin_routes/admin_routes";

dotenv.config();
db_connect();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/src", express.static("src"));
app.use("/api/client", client_routes);
app.use("/api/admin", admin_routes);

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green("Server running"));
});
