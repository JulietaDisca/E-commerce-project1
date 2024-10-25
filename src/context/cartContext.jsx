import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

//Creamos un Provider para envolver nuestra app
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    //Agregar un producto al carrito
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            //Si el producto ya está en el carrito, actualiza la cantidad
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem
            ));
        } else {
            //Si no está en el carrito, agregalo como un nuevo item
            setCartItems([...cartItems, {...item, quantity }]);
        }
    };

    //Remover un producto del carrito usando su ID
    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    //Vaciar todo el carrito
    const clear = () => {
        setCartItems([]);
    };

    //Verificar si el producto ya está en el carrito
    const isInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

//Hook para usal el context más facilmente en los componentes
export const useCart = () => useContext(CartContext);
