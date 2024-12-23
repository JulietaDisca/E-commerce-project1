import './Item.css';
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item/${product.id}`);
    }

    return(
        <div onClick={handleClick} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Condition: {product.condition}</p>
            <p>Price: ${product.price.toLocaleString()}</p>
            {product.originalPrice && (
                <p className='original-price'>${product.originalPrice.toLocaleString()}</p>
            )}
            <p>Color: {product.color ? product.color : "-" }</p>
            {/* <a href={product.permalink} target='_blank' rel='noopener noreferrer'>View Product</a> */}
        </div>
    );
};

export default Item;
