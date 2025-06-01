
import React from 'react'
import './Product.css'

export default function Product(props) {
    return (
        <div className="productBox">
                <img className='productImg' src={props.image} alt="poduct img" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button className='productBtn'>read more</button>
        </div>
    )
}
