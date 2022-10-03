const express = require('express');
const path = require('path');
const { getAllPizzas, getAllToppings } = require('../database/controllers')

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/toppings', (req, res) => {
  getAllToppings(req, res);
})

app.get('/api/pizzas', (req, res) => {
  getAllPizzas(req, res);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});