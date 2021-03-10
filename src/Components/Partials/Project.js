import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link, useParams } from 'react-router-dom';
import React from 'react';

const Project = (props) => {
    console.log(props)
    let {id} = useParams();
    id = parseInt(id);
    const length = props.MyProjects.length;
    
    const nextProject = ( id === length ? 1 : id + 1);
    const prevProject = (id === 1 ? length : id - 1);

        return(
            <section>
                <IconContext.Provider value={ {className:'react-icons'} }>
                    <Link to={`/Project/${prevProject}`}><FaArrowAltCircleLeft/></Link>
                    <Link to={`/Project/${nextProject}`}><FaArrowAltCircleRight/></Link>
                    <fieldset className="project">
                        <legend>{props.title}</legend>
                        <a href={props.link} target="_blank"><img src={props.image} className="projImg"/></a>
                        <p>{props.synopsis}</p>
                        <p>{props.technologies}</p>
                    </fieldset>
                </IconContext.Provider>
                <h2><Link to="/Projects">Back to the Projects</Link></h2> 
            </section>
        )
}

export default Project;