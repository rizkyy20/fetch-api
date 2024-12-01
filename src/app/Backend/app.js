import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/Database.js";
import { router, router as UserRoute } from './routes/UserRoutes.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.json());

try {
   await db.authenticate();
   console.log('Database Connected...');
} catch (error) {
   console.error(error);   
}

app.get('/', (req, res) => {
   res.send('Hello World!!');
})

app.post('/tes', (req, res) => {
   //console.log({ requestFromOutside: req.body })
   const data = req.body.username;
   res.send('tes-api');
})

app.listen(port, () => {
   console.log(`Server running at port ${port}`);
})