import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';
import ProductPage from '../ProductPage/ProductPage';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const navigate = useNavigate();
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

    const handleAddToCart = (count) => {
        console.log(count > 1 ? `${count} products were added to the cart` : `${count} product added to cart` );
        navigate('/category/cart'); //Redirigirte directamente a la pagina del carrito
    };

    if(loading) return <Spinner />;

    if(error) return <div>Error: {error}</div>;

    if(!product) return <div>No se encontró el producto</div>;

    return (
        <div className='ItemDetailContainer'>
            <h1>{product.title}</h1>
            <p>{product.condition}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
            <ProductPage onAddToCart={handleAddToCart} />
        </div>
    )
}

export default ItemDetailContainer;