import React from "react";
import PizzasListItem from "./PizzasListItem";

const PizzasList = ({pizzas}) => {
  return(
    <div>
      <h2> Available Pizzas </h2>
      {!pizzas.length 
        ? null 
        : pizzas.map((pizza, key) => {
          return <PizzasListItem pizza={pizza} key={key}/>
        })
      }
    </div>
  )
}

export default PizzasList;