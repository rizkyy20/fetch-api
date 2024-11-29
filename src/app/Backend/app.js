const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
   res.send('Hello World!!');
})

app.post('/tes', (req, res) => {
   const data = req.body;
   res.send('tes-api');
})

app.listen(port, () => {
   console.log(`Example App Listen to ${port}`);
})