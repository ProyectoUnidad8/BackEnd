import express, { type Application} from "express";
import cors from "cors";


export const app: Application = express();

app.use(cors());
app.use(express.json());

// Test
app.get("/", (_req, res) => {
	res.send("Hello world");
});