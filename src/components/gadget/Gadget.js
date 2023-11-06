import { NavLink } from "react-router-dom";
import "./style.css"

const Gadget = ({title, img, id}) => {
    const srcString = 'data:image/jpg;base64,' + img

    return (
        <NavLink to={`/project/${id}`}>
            <div className="gadget">
                <img src={srcString} alt="Project img" className="project__img"/>
                <h3 className="project__title">{title}</h3>
                <div className="rating_wrapper">
                    <p className="left_value">0</p>
                    <div className="rating_bar">
                        <div className="rating_progress"></div>
                    </div>
                    <p className="right_value">10</p>
                </div>
            </div>
        </NavLink>
    );
}
 
export default Gadget;