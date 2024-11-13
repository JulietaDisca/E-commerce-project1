import "./ItemCount.css";

import {useState} from 'react';

const ItemCount = ({ onAdd, onCountChange}) => {
    const [count, setCount] = useState(1);

    const stock = 10;

    const handleIncrement = () => {
        if (count < stock){
            const newCount = count + 1;
            setCount(newCount);
            onCountChange(newCount); //Llama a onCountChange con la nueva cantidad
        }
    };

    const handleDecrement = () => {
        if (count > 1){
            const newCount = count - 1;
            setCount(newCount);
            onCountChange(newCount); //Llama a onCountChange con la nueva cantidad
        };
    };

    const handleAddToCart = () => {
        if (stock > 0){
            onAdd(count);
        };
    };

    return (
        <div className="itemCount">
            {/* Boton de decremento */}
            <button 
                id="button-decrement" 
                className="button-control"
                onClick={handleDecrement}
                disabled=  {count === 1}
                style={{
                    opacity: count === 1 ? 0.5 : 1,
                    cursor: count === 1 ? "not-allowed" : "pointer"
                }}
                > - 
            </button>

            <span id="count" className="count">{count}</span>

            {/*Botón de incremento */}
            <button 
                id="button-increment" 
                className="button-control"
                onClick={handleIncrement}
                disabled= {stock === count}
                style={{
                    opacity: stock === count  ? 0.5 : 1,
                    cursor: stock === count ? "not-allowed" : "pointer"
                }}
                > + 
            </button>

            {/* Botón para agregar al carrito */}
            <button 
                id="button-addCart" 
                className="button-addCart"
                onClick={handleAddToCart}
                disabled= {stock === 0}
                style={{
                    background: stock === 0 ? 'gray' : 'blue',
                    opacity: stock === 0 ? 0.5 : 1,
                    cursor: stock === 0 ? "not-allowed" : "pointer"
                }}
                >{stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
        </div>
    )
}

export default ItemCount;

//{stock > 0 ? "Add to Cart" : "Out of Stock"}

