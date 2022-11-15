import { useState } from "react";

// TODO: create a component that displays a single bakery item
function BakeryItem(prop) {
    const [order, addOrder] = useState(0);
    const setCart = prop.setCart;
    const cart = prop.cart;
    const setTotal = prop.setTotal;
    const total = prop.total;
    const handleClick = () => {
        setCart([...cart, prop.name, " $", prop.price, <br></br>])
        setTotal(Math.round((total + prop.price) * 100) / 100)
        
    }
    return(
        <div class="BakeryItem">
            <img class="img" src={prop.image}/>
            <h1>{prop.name}</h1>
            <h2>{prop.price}</h2>
            <p>{prop.desc}</p>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    )
}

export default BakeryItem;