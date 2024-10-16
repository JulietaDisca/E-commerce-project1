import './ItemList.css';

import { useState, useEffect } from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    console.log("products", products);

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
            .then((info) => info.json())
            .then((data) => setProducts(data.results))
    }, []);

    return (
        <div className='ItemList'>
            {products.map((product) => {
                return( 
                    <div key={product.id}> 
                        <Item product={product} />
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;