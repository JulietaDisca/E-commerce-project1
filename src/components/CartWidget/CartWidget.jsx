import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="CartWidget">
        <ShoppingCartIcon className='shoppingCartIcon' style={{fontSize: 30}}/>
        <span>3</span>
    </div>
  )
}

export default CartWidget