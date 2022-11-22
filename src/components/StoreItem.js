import { useState } from "react";
import "../App.css";

// TODO: create a component that displays a single bakery item
function StoreItem(prop) {
    const total = prop.total
    const setTotal = prop.setTotal
    const item = prop.item
    const list = prop.list
    const setList = prop.setList
    const [added, inCart] = useState(false)
    const [cartMessage, changeMessage] = useState("Add to cart")

    // updating a list to append a new item
    function addToList(name) {
        // make deep copy of old list; add the item
        const newList = [...list, name] 
        // set the state of the list to the updated copy
        setList(newList)
    }

    // updating a list to append a new item
    function removeFromList(name) {
        // make deep copy of old list; add the item
        const newList = [...list].filter((plant) => plant !== name)
        // set the state of the list to the updated copy
        console.log(newList)
        setList(newList)
    }

    const handleClick = () => {
        inCart(!added) 
        if (!added) {
            setTotal(Math.round((total + item.price) * 100) / 100)
            changeMessage("Remove from cart")
            addToList(item.name)
        } else {
            setTotal(Math.round((total - item.price) * 100) / 100)
            changeMessage("Add to cart")
            removeFromList(item.name)
        }
    }

    return(
        <div className="StoreItem">
            <img className="img" src={item.image}/>
            <div className="info">
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>
                <button onClick={handleClick}>{cartMessage}</button>
                <p>Light: {item.light}</p>
                <p>Water: {item.water}</p>
                <p>Difficulty: {item.type}</p>
                <p>{item.description}</p>
            </div> 
        </div>
    )
}

export default StoreItem;