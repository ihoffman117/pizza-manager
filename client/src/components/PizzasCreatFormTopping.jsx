import React, {useState, useEffect} from "react";
import styled from "styled-components";

const ToppingItem = styled.h4`
  border: 1px solid darkgrey;
  padding: 5px;
  text-align: center;
  border-radius: 5px;

  &:hover{
    background-color: lightgrey;
    cursor: pointer;
  }
`

const PizzasCreateFormTopping = ({handleAddTopping, topping, added}) => {

  const [hasBeenAdded, setHasBeenAdded] = useState(false)

  const style = hasBeenAdded ? {color: 'green'} : {color: 'black'}

  useEffect(() => {
    setHasBeenAdded(added)
  }, [added])
  

  return (
    <ToppingItem onClick={()=> {
      handleAddTopping(topping._id);
      setHasBeenAdded(!hasBeenAdded);
    }} style={style}>{topping.name}</ToppingItem>
  )
}

export default PizzasCreateFormTopping;
