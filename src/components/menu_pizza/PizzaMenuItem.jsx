import React from 'react'

function PizzaMenuItem( props ) {
  return (
    <div className="PizzaMenuItem">
      <div className='MenuItemImage' style={{backgroundImage: props.pizza.imagePath}}></div>
      <div className='MenuItemText'>
        { props.index === 0 ? <p className='Popular'>Popular</p>  : <></> }
        <h4>{props.pizza.name}</h4>
        <p>{props.pizza.description}</p>        
        { props.pizza.vegetarian ? <img className='icon_small vegPizzaIcon' src='#' alt='vegetarian' /> : <></> } 
      </div>
      <div className='MenuItemIcons'>
        <img className='icon_small infoIcon' src='#' alt='info' />
        <img className='icon_small selectIcon' src='#' alt='select' />
      </div>
    </div>
  )
}

export default PizzaMenuItem
