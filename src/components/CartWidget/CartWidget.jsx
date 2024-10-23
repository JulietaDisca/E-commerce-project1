import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="CartWidget">
        <ShoppingCartIcon className='shoppingCartIcon' style={{fontSize: 35}}/>
        <span className='cart-num'>9</span>
    </div>
  )
}

export default CartWidget