import React, {useState} from "react";
import axios from "axios";
import {Modal, ModalContent} from './sharedCustomComponents'


const EditToppingForm = ({currentTopping, setEditingTopping}) => {

  const [name, setToppingName] = useState(currentTopping.name)
  const [description, setToppingDescription] = useState(currentTopping.description)

  const handleSubmit = () => {
    const body = {
      id: currentTopping._id, name, description
    }
    axios.put('/api/toppings', body)
  }

  return(
    <Modal>

      <ModalContent>

        <h2>Edit Topping: {currentTopping.name}</h2>

        <form>
          <label> 
            Name
            <input value={name} onChange={(event) => setToppingName(event.target.value)}></input>
          </label>
          <label>
            Description
            <input value={description} onChange={(event) => setToppingDescription(event.target.value)}></input>
          </label>
        </form>

        <button onClick={ () => handleSubmit(event) }>submit</button>
        <button onClick={ () => setEditingTopping(false)}>cancel</button>
      </ModalContent>
    </Modal>
  )
}

export default EditToppingForm;