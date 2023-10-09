import { NavLink } from "react-router-dom";
import "./style.css"

const Project = ({title, img, id}) => {
    const srcString = 'data:image/jpg;base64,' + img

    return (
        <NavLink to={`/project/${id}`}>
            <li className="project">
                <img src={srcString} alt="Project img" className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    );
}
 
export default Project;