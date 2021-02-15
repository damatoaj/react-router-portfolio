import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
        return(
            <header>
                <nav>
                    <Link to='/' className="navLink">Home Page</Link>{' | '}
                    <Link to='/About_Me' className="navLink">About Me</Link>{' | '}
                    <Link to='/Blog' className="navLink">Blog</Link>{' | '}
                    <Link to="/Projects" className="navLink">My Projects</Link>
                </nav>
            </header>
        )
}

export default Header;