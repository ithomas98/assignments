import React, {useContext, useState} from "react";
import { itemsContext } from "./Context";


export default function Form(){

    const {addItem} = useContext(itemsContext)

    const [newItem, setNewItem] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        
        setNewItem(prevItemData => ({
            ...prevItemData,
            [name]: value
        }))        
    }

    function postItem(event){
        event.preventDefault()
        
        addItem(newItem)

        setNewItem({
            title: "",
            description: "",
            imgUrl: ""
        })
    }

    return(
        <div>
            <div className="title">Ugly Things</div>
            <form onSubmit={postItem} className="myForm">
                <input 
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    value={newItem.title}
                    className="myForm--input"
                />
                <input 
                    placeholder="Image URL"
                    name="imgUrl"
                    onChange={handleChange}
                    value={newItem.imgUrl}
                    className="myForm--input"
                />
                <input 
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    value={newItem.description}
                    className="myForm--input"
                />
                <button className="myForm--btn">Submit</button>
            </form>
        </div>
        
    )
}