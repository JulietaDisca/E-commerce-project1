import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom";

import AppleIcon from '@mui/icons-material/Apple'

const NavBar = () => {
  return (
    <nav className='Navbar'>
      <ul>
        <Link className="li" to="/" ><AppleIcon style={{fontSize: 35}}/></Link>
        <Link className="li" to="/iphones" >iPhones</Link>
        <Link className="li" to="/airpods" >AirPods</Link>
        <Link className="li" to="/watches" >Watches</Link>
        <Link className="li" to="/cart" ><CartWidget/></Link>
      </ul>
    </nav>
  )
}

export default NavBar;