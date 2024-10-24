import React from 'react'

import ItemCount from '../ItemCount/ItemCount'

const ProductPage = ({ onAddToCart }) => {
    const stock = 10;

    return (
        <div className='ProductPage'>
            <h2>Producto 1</h2>
            <ItemCount 
                stock= {stock}
                onAdd={onAddToCart}
            />
        </div>
    )
}

export default ProductPage;