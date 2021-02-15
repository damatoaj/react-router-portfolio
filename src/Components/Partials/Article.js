import React from 'react';

const Article = (props) => {
        console.log(props)
        return(
            <div>
                <h1>{props.title}</h1>
                <h3>{props.publication_date}</h3>
            </div>
        )
}

export default Article;