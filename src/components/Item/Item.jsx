// import * as React from 'react';
// import './Item.css'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';

// const Item = ({ product }) => {
//     return (
//         <Card className='item-card' sx={{ maxWidth: 345}}>
//         <CardActionArea>
//             <CardMedia
//             component="img"
//             height="300"
//             image={product.thumbnail}
//             alt="green iguana"
//             style={{ objectFit: 'cover' }}
//             />
//             <CardContent>
//             <Typography 
//                 gutterBottom variant="h5" 
//                 component="div" 
//                 style={{ fontSize: '1.3rem' }} >
//                 {product.title}
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica
//             </Typography>
//             </CardContent>
//         </CardActionArea>
//         <CardActions>
//             <Button size="small" color="primary">
//                 Share
//             </Button>
//         </CardActions>
//         </Card>
//     );
// }

// export default Item;

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
            <p>Processor: {product.processor ? product.processor : "-" }</p>
            <a href={product.permalink} target='_blank' rel='noopener noreferrer'>View Product</a>
        </div>
    );
};

export default Item;
