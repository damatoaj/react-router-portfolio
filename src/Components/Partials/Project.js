import React from 'react';

const Project = (props) => {

        return(
            <div className="project">
                <h1>{props.title}</h1>
                <img src={props.image} className="projImg"/>
                <p>{props.synopsis}</p>
                <p>{props.technologies}</p>
            </div>
        )
}

export default Project;