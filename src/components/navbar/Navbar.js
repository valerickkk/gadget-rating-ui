import ButtonDarkMmode from "../btnDarkMode/ButtonDarkMode"
import useAuth from "../../hooks/useAuth";
import "./style.css"

import { NavLink } from "react-router-dom"
import AccountMenu from "../accountMenu/AccountMenu";

const Navbar = () => {

    const { auth } = useAuth();

    const defaultLink = "nav-list__link"
    const activeLink = "nav-list__link nav-list__link--active"

    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong className="logo-header">Gad<em>Rat</em></strong> <br/> <div className="logo-description">Ratig of gadgets</div>
                    </NavLink>

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
                        { auth?.user === undefined && 
                            <NavLink to="/login" className={({isActive}) => isActive ? activeLink : defaultLink}>
                                login
                            </NavLink> 
                        }
                        { auth?.user !== undefined &&
                            <AccountMenu />
                        }
                    </ul>
                    <ButtonDarkMmode />
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;