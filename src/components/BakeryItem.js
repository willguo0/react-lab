// TODO: create a component that displays a single bakery item
import { useState, React } from "react";

const BakeryItem = ({ name, description, price, image, cart,setCart, total, setTotal}) => {
    function setDict(cart, setCart, name) {
        if (typeof total === 'string' || total instanceof String){
            console.log('bruh')
            setTotal(price)
        }else{
        setTotal(total+price)
        }
        if (name in cart){
            setCart({...cart, [name]:cart[name]+1})
        }else{
            console.log('pls')
            setCart({...cart, [name]:1})
        }
    }
    return(
    
    <div>
        <img src={image}></img>
        <div>{name}: ${price.toFixed(2)}</div>
        <div>{description}</div>
        
        
        <button onClick={()=>setDict(cart,setCart,name)}>Add to Cart</button>
        </div>
    )
}
export default BakeryItem;
