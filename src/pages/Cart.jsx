import React from 'react'

// import { useCart } from '../context/cartContext';
import CartProducts from '../components/CartProducts/CartProducts'

const Cart = () => {
    // const { cartItems, removeItem, clear} = useCart();

    return (
        <div className='Cart'>
            {/* {cartItems.length === 0 ? (
                <p>No hay productos en el carrito </p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <h2>{item.title}</h2>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>Price ${ item.price}</p>
                            <p>Cantidad {item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )} */}
            <CartProducts/>
            {/* <button onClick={clear}>Vaciar Carrito</button> */}
        </div>
    )
}

export default Cart;