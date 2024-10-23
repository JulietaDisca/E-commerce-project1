import React from 'react'

import ItemCount from '../ItemCount/ItemCount'

const ProductPage = () => {
    const stock = 10;

    const handleAddToCart = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
    };
    
    return (
        <div className='ProductPage'>
            <h2>Producto 1</h2>
            <ItemCount 
                stock= {stock}
                onAdd={handleAddToCart}
            />
        </div>
    )
}

export default ProductPage;