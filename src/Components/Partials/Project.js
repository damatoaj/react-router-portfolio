import React from 'react';

const Project = (props) => {

        return(
            <fieldset className="project">
                <legend>{props.title}</legend>
                <img src={props.image} className="projImg"/>
                <p>{props.synopsis}</p>
                <p>{props.technologies}</p>
            </fieldset>
        )
}

export default Project;