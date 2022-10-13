import React, {useState} from "react";
import styled from 'styled-components';
import Toppings from './components/Toppings'
import Pizzas from './components/Pizzas'
import Home from "./components/Home";

// Simple styles for the page, using styled-components

const Nav = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  border: 1px solid black;
`;

const NavItem = styled.h3`
  padding: 10px;
  width: 25%;
  border: 1px solid black;

  &:hover{
    color: red;
    cursor: pointer;
  }
`;

// The actual app components bellow


const App = () => {

  const [pageState, setPageState] = useState('home');

  const handlePageChange = (page) => {
    setPageState(page)
  }

  return (
    <div>
      <h1>
        PIZZA MANAGER
      </h1>
      <Nav>
        <NavItem onClick={ () => handlePageChange('home') }> Home</NavItem>
        <NavItem onClick={ () => handlePageChange('manage-pizzas') }> Manage Pizzas</NavItem>
        <NavItem onClick={ () => handlePageChange('manage-toppings') }> Manage Toppings</NavItem>
      </Nav>

      <div className="rendered-page">
        {pageState === 'home' ? <Home /> : null }
        {pageState === 'manage-pizzas' ? <Pizzas /> : null }
        {pageState === 'manage-toppings' ? <Toppings /> : null }
      </div>

    </div>
  );
}

export default App;