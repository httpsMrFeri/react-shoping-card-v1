import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart , item])
  };

  const handleChange = (item , num) => {
    const index = cart.indexOf(item)
    cart[index].amount += num

    if(cart[index].amount ===0 ) {
      cart[index].amount = 1
    }

    setCart([...cart])
  }

  return (
    <React.Fragment>
      <Navbar setShow={setShow}  size={cart.length} />
      {show ? ( 
        <Shop 
          handleClick ={handleClick}
        /> 
        ) : ( 
        <Cart 
         cart={cart}
         handleChange ={handleChange}
         setCart = {setCart}
        /> 
        )}
    </React.Fragment>
  );
};


export default App;
