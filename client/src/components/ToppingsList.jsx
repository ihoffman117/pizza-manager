import React from "react";
import ToppingsListItem from "./ToppingsListItem";

const ToppingsList = ({toppingsList, handleDelete}) => {
  return(
    <div>
      {!toppingsList.length ? <h3>There are no toppings found</h3> : toppingsList.map((topping, key)=> {
        return <ToppingsListItem topping={topping} handleDelete={handleDelete} key={key}/>
      })}
    </div>
  )
}

export default ToppingsList;