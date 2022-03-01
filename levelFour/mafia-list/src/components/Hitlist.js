import React from "react";
import Person from "./Person";

export default function Hitlist(props){

    const peopleElements = props.data.map(item => <Person key={item.image} imgUrl={item.image} name={item.name}/>)

    return(
        <div className="hitlist">
            {peopleElements}
        </div>
    )
}