import React from "react"

export default function BlogPost(props){
    return(
        <div>
            <h1 className="post--title">{props.item.title}</h1>
            <h1 className="post--subtitle">{props.item.subTitle}</h1>
            <h1 className="post--description">{props.item.description}</h1>
            <p className="post--info">Posted by {props.item.author} on {props.item.date}</p>
            <hr />
        </div>
    )
}