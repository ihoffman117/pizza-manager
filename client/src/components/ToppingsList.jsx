import React from "react";

const ToppingsList = ({toppingsList}) => {
  return(
    <div>
      {!toppingsList.length ? <h3>There are no toppings found</h3> : toppingsList.map((topping)=> {
        return <h3>{topping.name}</h3>
      })}
    </div>
  )
}

export default ToppingsList;