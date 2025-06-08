
import './SectionTitle.css'
import React from 'react'

export default function ProductTitle(props) {
    return (
        <div className="productTitle">
            <h1>{props.value}</h1>
            <div className="dotIcon">
               <span></span>
               <span></span>
               <span></span>
            </div>
        </div>
    )
}
