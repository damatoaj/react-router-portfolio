import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => {
        let projectList = props.myProjects.map((project) => {
            return ( 
                <li key={project.id} className="card">
                    <div>
                        <Link to={`/Project/${project.id}`} className="blogList">{project.title}</Link>
                    </div>
                </li>
            )
        })
        return(
            <section>
                <h2>These are my projects from my General Assembly software immersive bootcamp</h2>
                <div className="container">
                    {projectList}
                </div>
            </section>
        )
}

export default Projects;