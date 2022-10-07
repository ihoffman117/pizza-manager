import React from "react";

const PizzasListItem = ({pizza}) => {
  return (
    <div>
      <h4>pizza: {pizza.name}</h4>
    </div>
  );
}

export default PizzasListItem;