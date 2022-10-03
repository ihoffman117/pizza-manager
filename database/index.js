const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pizza-manager');

const toppingSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Topping = mongoose.model('Topping', toppingSchema);

const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  toppings: Array,
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports.Pizza = Pizza;
module.exports.Topping = Topping;