import React from 'react'

export function Card({item , handleClick}) {
    const {id , img , title , price , amount} = item
  return (
    <div className="card">
        <div className="image">
            <img src={img} alt={title} />
        </div>
        <div className="content">
            <p>Title : {title}</p>
            <p>Price : {price}</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}
