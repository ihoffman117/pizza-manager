import React, {useState} from "react";
import axios from "axios";
import {Modal, ModalContent} from './sharedCustomComponents'
import styled from 'styled-components';

const FormDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ToppingItem = styled.h4`
  &:hover{
    color: red;
    cursor: pointer;
  }
`

const PizzasCreateForm = ({setCreatingPizza, currentToppings}) => {

  const handleAddTopping = (id) => {
    console.log(id)
  }

  return(
    <Modal>
       <ModalContent>
        <h1> Create a new Pizza </h1>
        <FormDiv>
          <div>
            <form>
              <label>
                Name 
                <input></input>
              </label>
              <label>
                Description
                <input></input>
              </label>
            </form>
          </div>
          <div>
            <h3>Click toppings to add</h3>
            {!currentToppings.length 
            ? null 
            : currentToppings.map((topping) => {
              return <ToppingItem onClick={() => handleAddTopping(topping._id)}>{topping.name}</ToppingItem>
            })}
          </div>
        </FormDiv>
        <button onClick={()=> setCreatingPizza(false)}>cancel</button>
      </ModalContent>
    </Modal>
  )
}

export default PizzasCreateForm