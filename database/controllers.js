const { Pizza, Topping } = require('./index');

exports.getAllToppings = (req, res) => {

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

exports.addPizza = (req, res) => {
  let pizza = req.body;
  const toppingsArr = [];

  pizza.toppings.forEach((id) => {
    const topping = Topping.findById(id).exec();
    toppingsArr.push(topping)
  })

  Promise.all(toppingsArr)
    .then((values) => {
      pizza.toppings = values;
      console.log(pizza)

      Pizza.find({name: req.body.name})
      .then((pizzas) => {
        if (!pizzas.length) {
          Pizza.create(req.body)
            .then(() => {
              res.send('success')
            })
        } else {
          res.send('could not create Pizza: already exists')
        }
      })
      .catch((err) => {
        res.send(err)
      })
    })
    .catch((err) => {
      res.send(err)
    })

}

exports.deletePizza = (req, res) => {
  const id = req.body.id;

  console.log(id)

  Pizza.findByIdAndDelete(id)
    .then(() => {
      res.send('success')
    })
    .catch((err) => {
      res.send(err)
    })
}