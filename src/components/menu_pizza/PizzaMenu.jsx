import React from 'react'
import pizzas from '../../models/pizzas'
import PizzaMenuButton from './PizzaMenuButton'
import PizzaList from './PizzaList'

import "../../styles/PizzaMenuStyle.css"

function PizzaMenu() {
  
  function toggleItems(event)
  {
    const plist = document.querySelector('#PizzaMenu').querySelector(".PizzaList");
    plist.classList.toggle("collapsed");
    if(plist.classList.contains("collapsed"))
      event.target.innerHTML = `
        See More 
        <img class="icon_small" src="https://icons.iconarchive.com/icons/pictogrammers/material/256/chevron-down-icon.png" alt="" />  
      `;
    else
      event.target.innerHTML = `
        See Less 
        <img class="icon_small" src="https://icons.iconarchive.com/icons/pictogrammers/material/256/chevron-up-icon.png" alt="" />  
      `;
  }

  return (
    <div id='PizzaMenu'>
      <h1>Pizza</h1>
      <h2>Find a restaurant to see our full menu and prices</h2>
      <PizzaMenuButton>Get Started</PizzaMenuButton>
      <PizzaList contents={pizzas} />
      <div id='information'>
        <img className='icon_medium' src="https://icons.iconarchive.com/icons/pictogrammers/material/256/leaf-icon.png" alt='' />
        Vegetarian
      </div>
      <button id="SeeMore" onClick={toggleItems}>
        See More
        <img className="icon_small" src="https://icons.iconarchive.com/icons/pictogrammers/material/256/chevron-down-icon.png" alt="" />  
      </button>
    </div>
  )
}

export default PizzaMenu
