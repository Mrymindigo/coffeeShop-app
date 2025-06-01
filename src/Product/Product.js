
import './Product.css'
import React from 'react'

export default function Product(props) {
  return (
    <div className='productContainer'>
        
        <div className="productBox">
            <img src={props.image} alt="poduct img" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button>read more</button>
        </div>

      
    </div>
  )
}
