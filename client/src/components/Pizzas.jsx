import React, {useState, useEffect} from "react";
import axios from "axios";
import PizzasCreateForm from "./PizzasCreateForm";
import PizzasList from "./PizzasList";

const Pizzas = () => {

  const [creatingPizza, setCreatingPizza] = useState(false)
  const [currentToppings, setCurrentToppings] = useState([])
  const [currentPizzas, setCurrentPizzas] = useState([])
  const [shouldPageReload, setShouldPageReload] = useState(false)

  useEffect(() => {

    axios.get('/api/toppings')
      .then((response) => {
        setCurrentToppings(response.data);
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get('/api/pizzas')
      .then((response) => {
        setCurrentPizzas(response.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [shouldPageReload])

  const handleShouldPageReload = () => {
    setShouldPageReload(!shouldPageReload)
  }

  return(
    <div>
      {creatingPizza ? <PizzasCreateForm setCreatingPizza={setCreatingPizza} currentToppings={currentToppings} handleShouldPageReload={handleShouldPageReload}/> : null}
      <button onClick={() => setCreatingPizza(true)}>Add A Pizza</button>
      <PizzasList pizzas={currentPizzas} currentToppings={currentToppings} handleShouldPageReload={handleShouldPageReload}/>
    </div>
  )
}

export default Pizzas;