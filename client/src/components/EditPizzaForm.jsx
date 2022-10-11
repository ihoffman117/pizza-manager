import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PizzasCreateFormTopping from "./PizzasCreatFormTopping";
import {Modal, ModalContent} from './sharedCustomComponents'

const FormDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ToppingItem = styled.h4`
  &:hover{
    color: red;
    cursor: pointer;
  }
`;


const EditPizzaForm = ({currentPizza, currentToppings, setEdittingPizza}) => {

  const [toppingsAdded, setToppingsAdded] = useState([])
  const [description, setDescription] = useState(currentPizza.description)

  useEffect(() => {
    const toppings = []
    console.log(currentPizza.toppings)

    currentPizza.toppings.forEach((topping) => {
      toppings.push(topping._id);
    })

    console.log(toppings)

    setToppingsAdded(toppings)
  }, [])

  const handleAddTopping = (id) => {
    const arr = toppingsAdded;
    const index = toppingsAdded.indexOf(id)
    if(index !== -1){
      arr.splice(index, 1);
      setToppingsAdded(arr)
      return
    }
    arr.push(id);
    setToppingsAdded(arr);
  }

  const handleUpdatePizza = () => {

  }

  return (
    <Modal>
      <ModalContent>
       <h2> Edditiing {currentPizza.name} </h2> 
       <FormDiv>
          <div>
            <form>
              <label>
                Description
                <input onChange={(event)=> setDescription(event.target.value)} value={description}></input>
              </label>
            </form>
          </div>
          <div>
            <h3>Click toppings to add</h3>
            {!currentToppings.length 
            ? <ToppingItem> There are no listed toppings found </ToppingItem> 
            : currentToppings.map((topping, key) => {
              let added = false;
              if(toppingsAdded.indexOf(topping._id) !== -1) {
                added = true;
              }
              return <PizzasCreateFormTopping key={key} handleAddTopping={handleAddTopping} topping={topping} added={added}/>
            })}
          </div>
        </FormDiv>
        <button onClick={()=> handleUpdatePizza()}>update pizza</button>
        <button onClick={()=> setEdittingPizza(false)}>cancel</button>
      </ModalContent>
    </Modal>
  )
}

export default EditPizzaForm;
