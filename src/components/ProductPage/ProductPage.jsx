import React from 'react'
import { useState } from 'react'

import ItemCount from '../ItemCount/ItemCount'

const ProductPage = ({ onAddToCart, available_quantity, stock, price }) => {
    const [totalPrice, setTotalPrice] = useState(price);

    const handleAddToCart = (quantity) => {
        onAddToCart(quantity);
    }

    const handleCountChange = (count) => {
        setTotalPrice(count * price); //Calcula el nuevo precio total
    }

    //const stock = {available_quantity};
    // const stock = 10;

    return (
        <div className='ProductPage'>
            <h3>Total Price: ${totalPrice.toLocaleString()}</h3>  {/* Muestra el precio total */}
            <ItemCount 
                stock= {stock}
                onAdd={handleAddToCart}
                onCountChange={handleCountChange} //Pasa la funcion para actualizar el precio
            />
        </div>
    )
}

export default ProductPage;

