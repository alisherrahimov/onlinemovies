import express from "express"
import dotenv from "dotenv"
import chalk from "chalk";
import {router} from "./routes/routes"
import {db_connect} from "./database/db_connect";
import cors from "cors";

dotenv.config()
db_connect()
const app = express()
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/src", express.static("src"))
app.use("/api", router)
app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green("Server running"))
})
