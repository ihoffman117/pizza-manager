import React, {useState, useEffect} from "react";
import axios from "axios";
import PizzasCreateForm from "./PizzasCreateForm";

const Pizzas = () => {

  const [creatingPizza, setCreatingPizza] = useState(false)
  const [currentToppings, setCurrentToppings] = useState([])

  useEffect(()=>{
    axios.get('/api/toppings')
      .then((response) => {
        setCurrentToppings(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return(
    <div>
      {creatingPizza ? <PizzasCreateForm setCreatingPizza={setCreatingPizza} currentToppings={currentToppings}/> : null}
      <button onClick={() => setCreatingPizza(true)}>creat a pizza</button>
      <h3> list of pizzas wil go here</h3>
    </div>
  )
}

export default Pizzas;