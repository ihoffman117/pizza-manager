import React from "react";
import styled from "styled-components";
import ToppingsListItem from "./ToppingsListItem";

const ListDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

const ToppingsList = ({toppingsList, handleDelete}) => {
  return(
    <ListDiv>
      {!toppingsList.length ? <h3>There are no toppings found</h3> : toppingsList.map((topping, key)=> {
        return <ToppingsListItem topping={topping} handleDelete={handleDelete} key={key}/>
      })}
    </ListDiv>
  )
}

export default ToppingsList;