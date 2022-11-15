import "./App.css";
import { useState } from "react";
import data from "./assets/data.json";
import StoreItem from "./components/StoreItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Petit Plant Shop</h1>
        <div className="menu">
          {data.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <StoreItem item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>  
           ))}
        </div>
      </div>
      
      <div className="cart">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <p>{cart}</p>
        <h1>Total: ${total}</h1>
      </div>
    </div>
  );
}

export default App;
