import React from 'react';
import { Link } from 'react-router-dom';
const Projects = (props) => {
        let projectList = props.myProjects.map((project) => {
            return ( 
           
            <li key={project.id}>
                <button>
                    <Link to={`/Projects/${project.id}`} className="projectList">{project.title}</Link>
                </button>
            </li>
          
            )
        })
        return(
            <div className="container">
                <h1>These are my Projects</h1>
                <ul>
                    {projectList}
                </ul>
            </div>
        )
}

export default Projects;