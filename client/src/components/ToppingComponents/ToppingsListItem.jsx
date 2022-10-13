import React, {useState} from "react";
import styled from "styled-components";
import EditToppingForm from './EditToppingForm'

const ToppingCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between
`;

const ToppingsListItem = ({topping, handleDelete}) => {

  const [editingTopping, setEditingTopping] = useState(false);

  return (
    <ToppingCard>

      {editingTopping ? <EditToppingForm currentTopping={topping} setEditingTopping={setEditingTopping}/> : null}

      <h3>{topping.name}</h3>
      <p>Description: {topping.description}</p>

      <ButtonsDiv>
        <button onClick={() => setEditingTopping(true)}>edit</button>
        <button onClick={() => handleDelete(topping._id)}>delete</button>
      </ButtonsDiv>
      
    </ToppingCard>
  )
}

export default ToppingsListItem;