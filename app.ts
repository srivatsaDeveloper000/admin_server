import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
import Routes from "./routes/Routes.ts";
import { requestLogger } from "./middlewares/logger.ts";

dotenv.config();

const PORT: Number = Number(process.env.PORT);
const base_url: string = process.env.BASE_URL || "";
const app = express();
app.use(cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(requestLogger);
app.use(base_url, Routes);

app.listen(PORT, () => {
    try {
        console.log(chalk.green(`Server successfully started at port ${PORT}`));
    } catch (error : any) {
        console.log(chalk.red(error.message));
        process.exit(1)
    }
});
