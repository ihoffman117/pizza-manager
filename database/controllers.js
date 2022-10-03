const { Pizza, Topping } = require('./index');

exports.getAllToppings = (req, res) => {
  console.log('request for all toppings')
  res.send('nothing to see here')
}

exports.getAllPizzas = (req, res) => {
  console.log('request for all pizzas')
  res.send('nothing to see here')
}