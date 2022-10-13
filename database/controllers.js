const { Pizza, Topping } = require('./index');


//Toppings controllers

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

exports.updateTopping = (req, res) => {
  const update = {
    name: req.body.name,
    description: req.body.description
  }

  Topping.find({name: req.body.name})
    .then((topping) => {
      let canUpdate = false;
      if(!topping.length) {
        canUpdate = true;
      }
      if(topping.length && topping[0]._id.toHexString() === req.body.id){
        canUpdate = true;
      }
      
      if(canUpdate){
        Topping.findByIdAndUpdate(req.body.id, update)
          .then((updated) => {
            res.send('sucess')
          })
      } else {
        res.send('can not update the topping with the name of another topping')
      }
    })
    .catch((err) => {
      res.send(err)
    })
}

//Pizzas Controllers

exports.getAllPizzas = (req, res) => {
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

  Pizza.findByIdAndDelete(id)
    .then(() => {
      res.send('success')
    })
    .catch((err) => {
      res.send(err)
    })
}

exports.updatePizza = (req, res) => {

  let body = req.body;
  const toppingsArr = [];

  Pizza.find({name: req.body.name})
    .then((pizza) => {
      let canUpdate = false;

      /**
       * the if statements in this function ensure you can't update an
       * existing pizza's name with the name of another existing pizza, while still allowing 
       * the user to keep the same name. 
       */

      if(!pizza.length) {
        canUpdate = true;
      }
      if(pizza.length && pizza[0]._id.toHexString() === req.body.id){
        canUpdate = true;
      }

      if(canUpdate){
        body.toppings.forEach((id) => {
          const topping = Topping.findById(id).exec();
          toppingsArr.push(topping)
        })
      
        Promise.all(toppingsArr)
          .then((values) => {
            body.toppings = values;

            const update = {
              name: body.name,
              description: body.description,
              toppings: body.toppings
            }

            Pizza.findByIdAndUpdate(body.id, update)
              .then((result) => {
                res.send(result);
              })
            
            })
            .catch((err) => {
              res.send(err)
            })
      } else {
        res.send('can not update the topping with the name of another topping')
      }
    })
    .catch((err) => {
      res.send(err)
    })
}