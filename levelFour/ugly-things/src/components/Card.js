import React, { useContext, useState } from "react";
import { itemsContext } from "./Context"

export default function Card(props){

    const [isEditing, setIsEditing] = useState(false)
    const { deleteItem, editItem } = useContext(itemsContext)
    const [editedItem, setEditedItem] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        
        setEditedItem(prevItemData => ({
            ...prevItemData,
            [name]: value
        }))        
    }

    function deleteThing(){
        deleteItem(props.id)
    }
    
    function editThing(){
        setIsEditing(true)
    }

    function saveThing(){
        setIsEditing(false)
        editItem(props.id, editedItem)
    }

    return(
        isEditing ? 
        <div className="card">
            <img src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg" className="card--img"/>
            <input 
                placeholder="Image URL" 
                className="editcard--img"
                name="imgUrl"
                onChange={handleChange}
                value={editedItem.imgUrl} 
            />
            <input 
                placeholder="Title" 
                name="title"
                onChange={handleChange}
                value={editedItem.title}
            />
            <input 
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={editedItem.description}
            />
            <br/>
            <button onClick={saveThing} className="card--btn">Save</button>
        </div> 
        :
        <div className="card">
            <img src={props.imgUrl} className="card--img"/>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <button onClick={deleteThing} className="card--btn">Delete</button>
            <button onClick={editThing} className="card--btn">Edit</button>
        </div>        
    )
}