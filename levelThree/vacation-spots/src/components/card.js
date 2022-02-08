import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <div className="card--place">{props.item.place}</div>
            <div className="card--price">${props.item.price}</div>
            <div className="card--time">Best in {props.item.timeToGo}</div>
        </div>
    )
}