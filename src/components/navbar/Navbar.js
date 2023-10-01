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
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <ButtonDarkMmode />

                    <ul className="nav-list">
                        <NavLink to="/" className={({isActive}) => isActive ? activeLink : defaultLink}>
                            Home
                        </NavLink>
                        <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : defaultLink}>
                            Projects
                        </NavLink>
                        <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : defaultLink}>
                            Contacts
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;