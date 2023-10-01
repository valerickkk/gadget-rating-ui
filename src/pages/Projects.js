import Project from "../components/project/Project";

import {projects} from "./../helpers/projectsList"

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map(proj => {
                        return <Project key = {proj.id} title = {proj.title} img = {proj.img} id = {proj.id}/>
                    })}
                </ul>
            </div>
        </main>
    );
}
 
export default Projects;