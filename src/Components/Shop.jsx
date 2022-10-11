import React, { useState } from "react";
import data from "../data";
import {Card} from "./Card";
import "../css/shop.css";

const Shop = ({ handleClick }) => {
  return (
    <section>
      {data.map((item) => {
        return <Card key={item.id} item={item} handleClick={handleClick} />;
      })}
    </section>
  );
};

export default Shop;
