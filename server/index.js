const express = require('express');
const path = require('path');
const { 
  getAllPizzas,
  addPizza,
  deletePizza,
  updatePizza,
  getAllToppings,
  addTopping,
  deleteTopping,
  updateTopping
} = require('../database/controllers')

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//Toppings endpoints

app.get('/api/toppings', getAllToppings);

app.post('/api/toppings', addTopping);

app.delete('/api/toppings', deleteTopping)

app.put('/api/toppings', updateTopping)

//Pizza endpoints

app.get('/api/pizzas', getAllPizzas);

app.post('/api/pizzas', addPizza)

app.delete('/api/pizzas', deletePizza)

app.put('/api/pizzas', updatePizza)

//

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});