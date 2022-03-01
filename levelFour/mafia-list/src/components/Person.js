import React from "react";

export default function Person(props){
    return(
        <div className="person">
            <img src={props.imgUrl} className="person--img"/>
            <h3 className="person--name">{props.name}</h3>
        </div>
    )
}