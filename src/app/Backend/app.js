import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router as UserRoute } from './routes/UserRoutes.js';
//const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send('Hello World!!');
})

app.post('/tes', (req, res) => {
   //console.log({ requestFromOutside: req.body })
   const data = req.body.username;
   res.send('tes-api');
})

//src/app/Backend/app.js

app.listen(port, () => {
   console.log(`Example App Listen to ${port}`);
})