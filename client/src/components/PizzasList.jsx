import React from "react";
import styled from "styled-components";
import PizzasListItem from "./PizzasListItem";

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PizzasList = ({pizzas, currentToppings}) => {
  return(
    <div>
      <h2> Available Pizzas </h2>
      <ListDiv>
      {!pizzas.length 
        ? null 
        : pizzas.map((pizza, key) => {
          return <PizzasListItem pizza={pizza} key={key} currentToppings={currentToppings}/>
        })
      }
      </ListDiv>
    </div>
  )
}

export default PizzasList;