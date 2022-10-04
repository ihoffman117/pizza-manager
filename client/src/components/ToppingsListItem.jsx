import React from "react";
import styled from "styled-components";

const ToppingCard = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const ToppingsListItem = ({topping, handleDelete}) => {


  return (
    <ToppingCard>
      <h3>{topping.name}</h3>
      <p>{topping.description}</p>
      <button>edit</button>
      <button onClick={() => handleDelete(topping._id)}>delete</button>
    </ToppingCard>
  )
}

export default ToppingsListItem;