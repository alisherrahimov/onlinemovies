import mongoose from "mongoose"
import chalk from "chalk";

function db_connect() {
    mongoose.connect(process.env.URL, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            return err
        } else {
            console.log(chalk.bold.blue("database connected"))
        }
    })
}

export {db_connect}
