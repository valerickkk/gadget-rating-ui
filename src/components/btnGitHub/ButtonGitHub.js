import gitHubImg from "./gitHub-black.svg"
import "./style.css"

const ButtonGitHub = ({gitHubLink}) => {
    return (
        <a href={gitHubLink} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubImg} alt="" />
            GitHub repo
        </a>
    );
}
 
export default ButtonGitHub;