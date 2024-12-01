import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();
const port = 3001;

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
 })