import React, { useEffect, useState } from "react";
import Card from "./Card"
const axios = require('axios');

const itemsContext = React.createContext()

function ContextProvider(props){

    const [itemElements, setItemElements] = useState([])

    useEffect(() => {
        console.log("ran effect")
        axios.get("https://api.vschool.io/isaacthomas/thing")
        .then(res => showItems(res.data))
    }, [])

    function addItem(newItem){
        console.log(`adding ${newItem.title}`)
        axios.post(`https://api.vschool.io/isaacthomas/thing/`, newItem)
        .then(showItems)
    }
    
    function deleteItem(item){
        axios.delete(`https://api.vschool.io/isaacthomas/thing/${item}`)
        .then(showItems)
    }

    function editItem(id, item){
        axios.put(`https://api.vschool.io/isaacthomas/thing/${id}`, item)
        .then(showItems)
    }

    function showItems(){
        console.log("reloaded effect")
        axios.get("https://api.vschool.io/isaacthomas/thing")
        .then(res => setItemElements(res.data.map(item => <Card key={item._id} id={item._id} title={item.title} imgUrl={item.imgUrl} description={item.description}/>)))
    }


    return(
        <itemsContext.Provider value={{addItem: addItem, deleteItem: deleteItem, editItem: editItem, itemElements: itemElements}}>
            {props.children}
        </itemsContext.Provider>
    )
}

export {itemsContext, ContextProvider}