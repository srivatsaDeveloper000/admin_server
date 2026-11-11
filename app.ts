import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT: Number = Number(process.env.PORT);

app.listen(PORT, (error) => {
    if (error) {
        console.log(chalk.red(error.message));
        return;
    }
    console.log(chalk.green(`Servre successfully started at port ${PORT}`));
});