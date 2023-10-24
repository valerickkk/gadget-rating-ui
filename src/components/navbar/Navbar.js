import ButtonDarkMmode from "../btnDarkMode/ButtonDarkMode"
import "./style.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {

    const defaultLink = "nav-list__link"
    const activeLink = "nav-list__link nav-list__link--active"

    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong className="logo-header">GadRat</strong> <br/> <div className="logo-description">Ratig of gadgets</div>
                    </NavLink>

                    <ButtonDarkMmode />

                    <ul className="nav-list">
                        <NavLink to="/" className={({isActive}) => isActive ? activeLink : defaultLink}>
                            Home
                        </NavLink>
                        <NavLink to="/gadgets" className={({isActive}) => isActive ? activeLink : defaultLink}>
                            Gadgets
                        </NavLink>
                        <NavLink to="/add" className={({isActive}) => isActive ? activeLink : defaultLink}>
                            +
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;