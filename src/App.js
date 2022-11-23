import "./App.css";
import { useState } from "react";
import data from "./assets/data.json";
import StoreItem from "./components/StoreItem";

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [light, setLight] = useState("all")
  const [water, setWater] = useState("all")
  const [checked, setChecked] = useState(false)
  const [sorted, setSort] = useState(data)

  const selectLight = eventKey => {
    setLight(eventKey.target.value)
  }

  const selectWater = eventKey => {
    setWater(eventKey.target.value)
  }

  const matchesFilter = item => {
    if (water === "all" && light === "all") { 
      return true
    } else if (water === "all" && light === item.light) { 
      return true
    } else if (water === item.water && light === item.light) {
      return true
    } else if (light === "all" && water === item.water) {
      return true
    } else {
      return false
    }
  }

  const handleChange = () => {
    setChecked(!checked)

    if (!checked) {
      setSort([...data].sort((a, b) => {
        return a.price - b.price
      }))
    } else {
      setSort(data)
    }
  };

  const filteredData = sorted.filter(matchesFilter)

  return (
    <div className="App">
      <div>
        <h1>Petit Plant Shop</h1>
        <div className="filters">
          <div>
            <h3>Sort by:</h3>
            <input type="checkbox" checked={checked} onChange={handleChange}/> Price
          </div>
          <div onChange={selectLight}>
            <h3>Filter by light:</h3>
            <input type="radio" value="all" name="light" /> All
            <input type="radio" value="low" name="light" /> Low
            <input type="radio" value="medium" name="light" /> Medium
            <input type="radio" value="bright" name="light" /> Bright
          </div>
          <div onChange={selectWater}>
            <h3>Filter by water:</h3>
            <input type="radio" value="all" name="water" /> All
            <input type="radio" value="light" name="water" /> Light
            <input type="radio" value="medium" name="water" /> Medium
          </div>
        </div>
        <div className="menu">
          {filteredData.map((item) => (
            <StoreItem item={item} total={total} setTotal={setTotal} list={list} setList={setList}/>  
           ))}
        </div>
      </div> 
      <div className="cart ms-auto">
        <h1>Cart</h1>
        <ul>
            {list.map(function(name) {
              return <li>{name}</li>;
            })}
        </ul>
        <h1>Total: ${total}</h1>
      </div>
    </div>
  );
}

export default App;
