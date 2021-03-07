import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
        let blogList = props.blogPosts.map((blog) => {

            console.log(blog)
            return(
                <li key={blog.id} className="card">
                    <div>
                        <Link to={`/Article/${blog.id}`} className="blogList">{blog.title}</Link>
                    </div>
                </li>
            )
        })
        return(
            <section>
                <h2>Writing has always been a passion of mine, hopefully you'll enjoy my musings on philosophy and recreation</h2>
                <article>
                    <div className="container">
                        {blogList}
                    </div>
                </article>
            </section>
        )
}

export default Blog;