import './ItemList.css';

import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log("products", products);


    //https://api.mercadolibre.com/sites/MLA/search?q=iphone
    useEffect(() => {
        setLoading(true);
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
            .then((info) => info.json())
            .then((data) => {
                const structuredProducts = data.results.map(item => ({
                    id: item.id,
                    title: item.attributes.find(attr => attr.id === "MODEL")?.value_name || item.title,
                    price: item.price,
                    originalPrice: item.original_price,
                    thumbnail: item.thumbnail,
                    permalink: item.permalink,
                    condition: item.condition,
                    availableQuantity: item.available_quantity,
                    color: item.attributes.find(attr => attr.id === "COLOR")?.value_name,
                    processor: item.attributes.find(attr => attr.id === "PROCESSOR_MODEL")?.value_name,
                    weight: item.attributes.find(attr => attr.id === "WEIGHT")?.value_name,
                }));
                setProducts(structuredProducts);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
    }, []);

    if(loading) return <Spinner />
    if(error) return <p>Error: {error}</p>

    return (
        <div className='ItemList'>
            {products.map(product => ( 
                <div key={product.id}>
                    <div className='container-picture-card'>
                        <Item product={product} />
                        {/* <ProductPage  key={product.id} availableQuantity={product.available_quantity}/> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
