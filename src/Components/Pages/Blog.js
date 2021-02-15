import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
        let blogList = props.blogPosts.map((blog) => {

            console.log(blog.id)
            return(
                <li key={blog.id}>
                    <button>
                        <Link to={`/Blog/${blog.id}`} className="blogList">{blog.title}</Link>
                    </button>
                </li>
            )
        })
        return(
            <div>
                <h1>This is the Blog</h1>
                <aricle>
                    <ul>
                        {blogList}
                    </ul>
                </aricle>
            </div>
        )
}

export default Blog;