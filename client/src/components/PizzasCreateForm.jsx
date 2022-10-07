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

  const [toppingsAdded, setToppingsAdded] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleAddTopping = (id) => {
    const index = toppingsAdded.indexOf(id)
    if(index !== -1){
      setToppingsAdded(toppingsAdded.splice(index, 1))
      return
    }
    const arr = toppingsAdded;
    arr.push(id);
    setToppingsAdded(arr);
  }

  const handleCreatePizza = () => {
    const obj = {name, description, toppings: toppingsAdded};
    axios.post('/api/pizzas', obj)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err)=> {
        console.log(err)
      })
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
                <input onChange={(event)=> setName(event.target.value)}></input>
              </label>
              <label>
                Description
                <input onChange={(event)=> setDescription(event.target.value)}></input>
              </label>
            </form>
          </div>
          <div>
            <h3>Click toppings to add</h3>
            {!currentToppings.length 
            ? null 
            : currentToppings.map((topping, key) => {
              return <ToppingItem key={key} onClick={() => handleAddTopping(topping._id)}>{topping.name}</ToppingItem>
            })}
          </div>
        </FormDiv>
        <button onClick={()=> handleCreatePizza()}>add pizza</button>
        <button onClick={()=> setCreatingPizza(false)}>cancel</button>
      </ModalContent>
    </Modal>
  )
}

export default PizzasCreateForm