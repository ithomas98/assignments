import React from "react"
import Friend from "./friend"
import friendData from "./data"

export default function FriendList(){
    const friends = friendData.map(item =>{
        return(<Friend key={item.name} item={item}/>) 
    })
    return(
        <div>
            {friends}
        </div>
    )
}