import React from "react";
import axios from "axios";

const PizzasListItem = ({pizza}) => {

  const handleDelete = (id) => {
    axios.delete('/api/pizzas', {data: {id: id}}).then((res) => {
      console.log (res)
    })
  }

  return (
    <div>
      <h3>{pizza.name}</h3>
      <p>Description: {pizza.description}</p>
      <h4>Toppings:</h4>
      <ul>
        {pizza.toppings.map((topping) => {
          console.log(pizza.name, topping)
        })}
      </ul>

      <button onClick={() => handleDelete(pizza._id)}> delete </button>
    </div>
  );
}

export default PizzasListItem;