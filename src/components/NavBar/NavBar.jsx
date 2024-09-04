import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className='Navbar'>
        <ul>
            <li>Home</li>
            <li>Sale</li>
            <li>Contact</li>
            <li>{CartWidget}</li>
        </ul>
    </nav>
  )
}

export default NavBar