import './CartProducts.css';

import { useCart } from '../../context/cartContext';
import { IsoTwoTone } from '@mui/icons-material';

const CartProducts = () => {
    const { cartItems, removeItem, clear} = useCart();

    return (
        <div className={cartItems.length === 0 ? '' : 'CartProducts'}>
            {/* <h1>Carrito de Compras</h1> */}
            {cartItems.length === 0 ? (
                <p className='notProducts'>No hay productos en el carrito </p>
            ) : (
                <ul className='list'>
                    {cartItems.map((item, index) => (
                        <li className='listItem' key={index}>
                            <h2 className='ItemTitle'>{item.title}</h2>
                            <div className='detailsCart'>
                                <p className='detailColor'>Color: {item.color}</p>
                                <p className='detailCondition'>Condition: {item.condition}</p>
                                {/* <p className='detailProcessor'>Processor: {item.processor}</p> */}
                            </div>
                            <img className='ItemImg' src={item.thumbnail} alt={item.title} />
                            <p className='ItemPrice'>${item.totalPrice.toLocaleString()}</p>
                            <p className='ItemQuantity'><div className='container'>{item.quantity} u.</div></p>
                            <button className='btnDeleteItem' onClick={() => removeItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className='containerBtn>'>
                <button className={cartItems.length === 0 ? '' : 'btnEmptyCart'} onClick={clear}>{cartItems.length === 0 ? null : "Empty Cart"}</button>
            </div>
        </div>
    )
}

export default CartProducts;