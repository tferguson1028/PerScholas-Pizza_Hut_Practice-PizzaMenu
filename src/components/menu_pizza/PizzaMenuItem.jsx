import React from 'react'

function PizzaMenuItem( props ) {
  return (
    <div className="PizzaMenuItem">
      <div className='MenuItemImage' style={{backgroundImage: `url(${props.pizza.imagePath})`}}></div>
      <div className='MenuItemText'>
        { props.pizza.vegetarian ? <img className='icon_small vegPizzaIcon' src='https://icons.iconarchive.com/icons/pictogrammers/material/256/leaf-icon.png' alt='vegetarian' /> : <></> } 
        { props.index === 0 ? <p className='Popular'>Popular</p>  : <></> }
        <h4>{props.pizza.name}</h4>
        <p>{props.pizza.description}</p>        
      </div>
      <div className='MenuItemIcons'>
        <img className='icon_small infoIcon' src='https://icons.iconarchive.com/icons/aniket-suvarna/box-regular/256/bx-info-circle-icon.png' alt='info' />
        <img className='icon_small selectIcon' src='https://icons.iconarchive.com/icons/pictogrammers/material/256/chevron-right-icon.png' alt='select' />
      </div>
    </div>
  )
}

export default PizzaMenuItem
