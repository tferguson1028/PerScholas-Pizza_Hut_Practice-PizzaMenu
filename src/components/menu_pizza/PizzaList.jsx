import React from 'react'
import PizzaMenuItem from './PizzaMenuItem'

function PizzaList({ contents }) {
  return (
    <div className='PizzaList'>
      {
        contents.map((el, index) => <PizzaMenuItem key={index} index={index} pizza={el} /> )
      }
    </div>
  )
}

export default PizzaList
