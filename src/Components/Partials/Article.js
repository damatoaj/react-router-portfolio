import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
// import 'BlogPosts' from './Statics/BlogPosts';

const Article = (props) => {
    let {id} = useParams();
    id = parseInt(id);
    const length = props.BlogPosts.length
    // const length = props.length;
    //icons + - 1 to cycle through ids with link
        console.log(props)
        console.log(props.BlogPosts)
        console.log(length)
        console.log(id)

    const nextArticle = (id  === length ? 1 : id + 1)

    const prevArticle = (id === 1 ? length : id - 1)

    console.log(nextArticle)
    console.log(prevArticle)
    
        return(
            <section>
                    <IconContext.Provider value={ {className:'react-icons'} }>
                    <Link to={`/Article/${prevArticle}`}><FaArrowAltCircleLeft /></Link>
                        <h1>{props.title}</h1>
                    <Link to={`/Article/${nextArticle}`} ><FaArrowAltCircleRight/></Link>
                        <p>{props.content}</p>
                        <h3>{props.publication_date}</h3>
                </IconContext.Provider>
                <h2><Link to="/Blog">Back to the Blogs</Link></h2>
            </section>
        )
}

export default Article;