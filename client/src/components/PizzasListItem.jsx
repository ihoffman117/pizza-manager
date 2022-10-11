import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import EditPizzaForm from "./EditPizzaForm";

const PizzaCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 20%;
`;

const PizzasListItem = ({pizza, currentToppings}) => {

  const [editingPizza, setEdittingPizza] = useState(false)

  const handleDelete = (id) => {
    axios.delete('/api/pizzas', {data: {id: id}}).then((res) => {
      console.log (res)
    })
  }

  return (
    <PizzaCard>
      {editingPizza ? <EditPizzaForm currentPizza={pizza} currentToppings={currentToppings} setEdittingPizza={setEdittingPizza}/> : null}
      <h3>{pizza.name}</h3>
      <p>Description: {pizza.description}</p>
      <h4>Toppings:</h4>
      <ul>
        {pizza.toppings.map((topping, key) => {
          return <li key={key}>{topping.name}</li>
        })}
      </ul>

      <button onClick={() => handleDelete(pizza._id)}> delete </button>
      <button onClick={() => setEdittingPizza(true)}> edit </button>
    </PizzaCard>
  );
}

export default PizzasListItem;