import './Item.css';

import React from 'react'

const Item = ({product}) => {
  return (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
    </div>
  );
};

export default Item;