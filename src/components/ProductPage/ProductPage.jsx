import React from 'react'

import ItemCount from '../ItemCount/ItemCount'

const ProductPage = ({ onAddToCart, available_quantity }) => {
    //const stock = {available_quantity};
    const stock = 10;

    return (
        <div className='ProductPage'>
            <ItemCount 
                stock= {stock}
                onAdd={onAddToCart}
            />
        </div>
    )
}

export default ProductPage;

