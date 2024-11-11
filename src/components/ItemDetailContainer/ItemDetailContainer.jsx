import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cartContext'

import Spinner from '../Spinner/Spinner';
import ProductPage from '../ProductPage/ProductPage';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { addItem } = useCart(); //Desestructuramos addItem del contexto
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`)
            .then((info) => info.json())
            .then((data) => {
                // if(data.results.length > 0){
                //     const item = data.results[0];
                    const structuredProducts = {
                        id: data.id,
                        title: data.attributes.find(attr => attr.id === "MODEL")?.value_name || data.title,
                        price: data.price,
                        originalPrice: data.original_price,
                        thumbnail: data.thumbnail,
                        permalink: data.permalink,
                        condition: data.condition,
                        availableQuantity: data.available_quantity,
                        color: data.attributes?.find(attr => attr.id === "COLOR")?.value_name || "N/A",
                        processor: data.attributes?.find(attr => attr.id === "PROCESSOR_MODEL")?.value_name || "N/A",
                        weight: data.attributes?.find(attr => attr.id === "WEIGHT")?.value_name || "N/A",
                    };
                    setProduct(structuredProducts);
                //} else {
                //    setError("No se encontraron productos.");
                //}
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
    }, [id]);

    const handleAddToCart = (quantity) => {
        if (product) {
            addItem(product, quantity); //Usamos el contexto para agregar el roducto al carrito
            navigate('/category/cart'); //Redirigir al carrito
        }
    };

    if(loading) return <Spinner />;

    if(error) return <div>Error: {error}</div>;

    if(!product) return <div>No se encontró el producto</div>;

    return (
        <div className='ItemDetailContainer'>
            <h1 className='product detailsTitle'>{product.title}</h1>
            <img className='product detailsImg' src={product.thumbnail} alt={product.title} />
            <div className='details'>
                <p className='detail detailsColor' >COLOR : {product.color}</p>
                <p className='detail detailsCondition' >CONDITION : {product.condition}</p>
                <p className='detail detailsProcessor' >PROCESSOR : {product.processor}</p>
                <p className='detail detailsWeight' >WEIGHT : {product.weight}</p>
            </div>
            <h3 className='price detailsPrice' >Price: ${product.price.toLocaleString()}</h3>
            {product.originalPrice && (
                <p className='price detailsOriginalPrice'>${product.originalPrice.toLocaleString()}</p>
            )}
            <ProductPage className='productPage' onAddToCart={handleAddToCart} />
        </div>
    );
};

export default ItemDetailContainer;

