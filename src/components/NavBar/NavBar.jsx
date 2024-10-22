import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom";

import AppleIcon from '@mui/icons-material/Apple'

const NavBar = () => {
  return (
    <nav className='Navbar'>
      <ul>
        <Link to="/" ><AppleIcon style={{fontSize: 28}}/></Link>
        <Link to="/iphones" >iPhones</Link>
        <Link to="/airpods" >AirPods</Link>
        <Link to="/watches" >Watches</Link>
        <Link to="/cart" ><CartWidget/></Link>
      </ul>
    </nav>
  )
}

export default NavBar;