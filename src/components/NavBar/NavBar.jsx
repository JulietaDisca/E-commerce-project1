import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


import AppleIcon from '@mui/icons-material/Apple'

const NavBar = () => {
  return (
    <nav className='Navbar'>
      <ul>
        <li><AppleIcon/></li>
        <li>iPhone</li>
        <li>AirPods</li>
        <li>Watch</li>
        <li><CartWidget/></li>
      </ul>
    </nav>
  )
}

export default NavBar