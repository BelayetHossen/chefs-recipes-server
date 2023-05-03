const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running');
});



app.listen(port, () => {
    console.log('server');
})