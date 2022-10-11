import React, { useEffect, useState } from "react";
import "../css/cart.css";
function Cart({ cart , handleChange , setCart}) {

  const [price , setPrice ] = useState(0)

  const handleDelete = (id) => {
    let array = cart.filter(item => item.id !== id )
    setCart (array)
    handlePrice()
  }
  const handlePrice = () => {
    let total = 0
    cart.map(item => total += item.price * item.amount) 
    setPrice(total)
  }

  useEffect( () => {
    handlePrice()
  })


  return (
    <div className="total_cart">
      {cart.map((item) => {
        return (
          <div className="cart_t" key={item.id}>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <p>{item.title}</p>
            <div className="price">{item.price}</div>
            <div className="buttons">
              <button onClick = {() => handleChange(item, 1)}>+</button>
              <p>{item.amount}</p>
              <button onClick = {() => handleChange(item , -1)}>-</button>
              <div className="remove" onClick={() => handleDelete(item.id)}>X</div>
            </div>
          </div>
        );
      })}
      <div className="showTotal">
        <span>Total Cart : </span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Cart;
