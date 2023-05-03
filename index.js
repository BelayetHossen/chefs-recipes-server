const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


const chefs = require('./data/chefs.json');

app.use(cors());



app.listen(port, () => {
    console.log('server');
})