import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState("Nothing's Here Yet Loser");


  return (
    <div className="App">
      <h1>Expired Foods Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem total= {total} setTotal = {setTotal}name={item.name} description={item.description} price={item.price} image = {item.image} cart={cart} setCart = {setCart}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {Object.keys(cart).map((item, index) => (
          <div> 
          <h3>{item}: {cart[item]}x</h3>
          <h3></h3>
          </div>
        ))}
        <h2>Total</h2>
        {total}
      </div>
    </div>
  );
}

export default App;
