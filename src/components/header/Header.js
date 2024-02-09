import Recommendation from "../recommendation/Recommendation";
import WelcomeContent from "../welcome/WelcomeContent";
import useAuth from "../../hooks/useAuth";
import "./style.css";

const Header = () => {
    
    const { auth } = useAuth();

    return (
        <header className="header">
            <Recommendation />
            {auth?.user === undefined && <WelcomeContent />}
        </header>
    );
}
 
export default Header;