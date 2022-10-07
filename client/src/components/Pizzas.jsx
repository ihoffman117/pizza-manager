import React, {useState, useEffect} from "react";
import axios from "axios";
import PizzasCreateForm from "./PizzasCreateForm";
import PizzasList from "./PizzasList";

const Pizzas = () => {

  const [creatingPizza, setCreatingPizza] = useState(false)
  const [currentToppings, setCurrentToppings] = useState([])
  const [currentPizzas, setCurrentPizzas] = useState([])

  useEffect(()=>{

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

  }, [])

  return(
    <div>
      {creatingPizza ? <PizzasCreateForm setCreatingPizza={setCreatingPizza} currentToppings={currentToppings}/> : null}
      <button onClick={() => setCreatingPizza(true)}>creat a pizza</button>
      <PizzasList pizzas={currentPizzas}/>
    </div>
  )
}

export default Pizzas;