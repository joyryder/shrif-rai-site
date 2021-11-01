import Mobilenav from "./Mobilenav";
import Navigation from "./Navigation";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Mobilenav/>
            <Navigation/>
        </nav>
    )
}

export default Navbar;