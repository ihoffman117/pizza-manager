const express = require('express');
const path = require('path');
const { getAllPizzas, addPizza, deletePizza, updatePizza, getAllToppings, addTopping, deleteTopping, updateTopping } = require('../database/controllers')

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//Toppings endpoints

app.get('/api/toppings', getAllToppings);

app.post('/api/toppings', (req, res) => {
  addTopping(req, res);
});

app.delete('/api/toppings', (req, res) => {
  deleteTopping(req, res);
})

app.put('/api/toppings', (req, res) => {
  updateTopping(req, res);
})

//Pizza endpoints

app.get('/api/pizzas', (req, res) => {
  getAllPizzas(req, res);
});

app.post('/api/pizzas', (req, res) => {
  addPizza(req, res);
})

app.delete('/api/pizzas', (req, res) => {
  deletePizza(req, res);
})

app.put('/api/pizzas', (req, res) => {
  updatePizza(req, res);
})

//

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});