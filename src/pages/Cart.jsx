import React from 'react'

import { useCart } from '../context/cartContext';

const Cart = () => {
    const { cartItems, removeItem, clear} = useCart();

    return (
        <div className='Cart'>
            <h1>Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito </p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <h2>{item.title}</h2>
                            <p>Price ${ item.price}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clear}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;