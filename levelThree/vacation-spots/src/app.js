import ReactDOM from "react-dom"
import Card from "./components/card"
import Data from "./data"

export default function App(){
    const places = Data.map(item =>{
        return(
            <Card 
            key = {item.place}
            item = {item}
            />
        )
    })

    return(
        <div>
            {places}
        </div>
    )
}