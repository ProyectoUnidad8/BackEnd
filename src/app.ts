import express, { type Application} from "express";
import cors from "cors";
import { router } from "./router";

export const app: Application = express();

app.use(cors());
app.use(express.json());
router(app);