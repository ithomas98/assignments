import React from "react"
import Pet from "./pet"

export default function Friend(props){
    const pets = props.item.pets.map(item =>{
        return(
            <Pet key={item.name} item={item}/>
        )
    })

    return(
        <div>
            <h1>Name: {props.item.name}</h1>
            <h2>Age: {props.item.age}</h2>
            <p>Pets:{pets}</p>
        </div>
    )
}