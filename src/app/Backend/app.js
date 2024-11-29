const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req, res) => {
   res.send('Hello World!!');
})

app.post('/tes', (req, res) => {
   console.log({ requestFromOutside: req.body })
   const data = req.body.username;
   res.send('tes-api');
})

//src/app/Backend/app.js

app.listen(port, () => {
   console.log(`Example App Listen to ${port}`);
})