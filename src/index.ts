import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 9003;

app.listen(port, () => console.log(`Server init at https://localhost:${ port }`))