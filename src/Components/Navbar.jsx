import React from "react";
import '../css/navbar.css'

const Navbar = ({setShow , size}) => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo" onClick={() => setShow(true)}>Shopping</div>
        <div className="cart" onClick={() => setShow (false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
