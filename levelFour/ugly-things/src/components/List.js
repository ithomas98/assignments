import React, {useContext} from "react";
import { itemsContext } from "./Context";


export default function List(){
    const {itemElements} = useContext(itemsContext)

    return(
        <div className="cardList">
            {itemElements}
        </div>
    )
}