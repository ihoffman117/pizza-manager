const { Pizza, Topping } = require('./index');

exports.getAllToppings = (req, res) => {
  console.log('request for all toppings')

  Topping.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
}

exports.addTopping = (req, res) => {

  Topping.find({name: req.body.name})
    .then((topping) => {
      if (!topping.length) {
        Topping.create(req.body)
          .then(() => {
            res.send('success')
          })
      } else {
        res.send('could not create topping: already exists')
      }
    })
}

exports.deleteTopping = (req, res) => {
  const id = req.body.id;

  Topping.findByIdAndDelete(id)
    .then(() => {
      res.send('success')
    })
    .catch((err) => {
      res.send(err)
    })
}

exports.getAllPizzas = (req, res) => {
  console.log('request for all pizzas')

  Pizza.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
}