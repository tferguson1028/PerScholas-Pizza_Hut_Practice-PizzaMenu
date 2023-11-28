import React from 'react'
import pizzas from '../../models/pizzas'
import PizzaMenuButton from './PizzaMenuButton'
import PizzaList from './PizzaList'

import "../../styles/PizzaMenuStyle.css"

function PizzaMenu() {
  return (
    <div id='PizzaMenu'>
      <h1>Pizza</h1>
      <h2>Find a restaurant to see our full menu and prices</h2>
      <PizzaMenuButton>Get Started</PizzaMenuButton>
      <PizzaList contents={pizzas} />
    </div>
  )
}

export default PizzaMenu
