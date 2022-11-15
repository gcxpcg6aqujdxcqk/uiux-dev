import { useState } from "react";
import "../App.css";

// TODO: create a component that displays a single bakery item
function BakeryItem(prop) {
    const [order, addOrder] = useState(0);
    const setCart = prop.setCart;
    const cart = prop.cart;
    const setTotal = prop.setTotal;
    const total = prop.total;
    const item = prop.item;
    const handleClick = () => {
        setCart([...cart, item.name, " $", item.price, <br></br>])
        setTotal(Math.round((total + item.price) * 100) / 100)
        
    }
    return(
        <div class="BakeryItem">
            <img class="img" src={item.image}/>
            <div class="info">
                <h1>{item.name}</h1>
                <h2>{item.light}</h2>
                <h2>{item.water}</h2>
                <h2>${item.price}</h2>
                <button onClick={handleClick}>Add to cart</button>
                <p>{item.desc}</p>
            </div> 
        </div>
    )
}

export default BakeryItem;