import React, {useState, useEffect} from "react";
import axios from "axios";
import ToppingsList from "./ToppingsList";

const Toppings = () => {

  const [toppingsList, setToppings] = useState([]);
  const [name, setToppingName] = useState('')
  const [description, setToppingDescription] = useState('')
  const [shouldPageReload, setShouldPageReload] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!name || !description){
      return
    }

    const body = {
      name,
      description
    }

    axios.post('/api/toppings', body)
      .then((response) => {
        console.log(response);
        setShouldPageReload(!shouldPageReload)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.get('/api/toppings').then((response) => {
      setToppings(response.data)
    })
  }, [shouldPageReload])

  return(
    <>
      <h2> All Toppings </h2>
      {toppingsList.length ? <ToppingsList toppingsList={toppingsList} /> : <p>no toppings found</p>}
      <form> Add Topping
        <label> Name
          <input onChange={(event) => setToppingName(event.target.value)}></input>
        </label>
        <label> Description
          <input onChange={(event) => setToppingDescription(event.target.value)}></input>
        </label>
        <button onClick={ () => handleSubmit(event) }>submit</button>
      </form>
    </>
  )
}

export default Toppings;