const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(n => n.id == id);
    res.send(chef)
})



app.listen(port, () => {
    console.log('server');
})