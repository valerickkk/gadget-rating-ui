import Recommendation from "../recommendation/Recommendation";
import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <Recommendation />
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Welcome to <em>gdaget rating</em> service</strong><br/>
                </h1>
                <div className="header__text">
                    <p>Here you can choose a new gadget for yourself</p>
                    <p>or rate your personal.</p>
                </div>
                <a href="#!" className="btn">Sign up</a>
            </div>
        </header>
    );
}
 
export default Header;