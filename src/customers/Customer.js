import './Customer.css'
import React from 'react'

export default function Customer(props) {
    return (
        <div className='customerBox'>
            <div className="customerImgContainer">
                <img src={props.image} alt="customer image" className="customerImg" />
            </div>
            <div className="clientText">
                <h2 className="customerName">{props.name}</h2>
                <p className="customerComment">{props.comment}</p>
            </div>
        </div>
    )
}
