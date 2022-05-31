import React from 'react'
import './Card.css'

function Card({name, price, img}) {    
  return (
    <div className='prod_cont'>
        <div className='img_cont'>
            <img src={img}/>
        </div>
        <div className='details'>
          <br></br>
          <div className='card_name'>
              <h2>{name}</h2>
          </div>
          <div className='card_price'>
              <p>{price}</p>
          </div>
        </div>
    </div>
  )
}

export default Card 