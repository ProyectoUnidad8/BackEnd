import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT , () => console.log(`Server init at https://localhost:${ process.env.PORT }`))