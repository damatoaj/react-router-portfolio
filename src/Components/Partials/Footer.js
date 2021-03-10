import React from 'react';

const Footer = (props) => {
        return(
            <footer>
                <address>
                    Arthur D'Amato | 
                    Seattle, Washington |
                    Email: <a href="mailto:mr.arthurdamato@gmail.com">mr.arthurdamato@gmail.com</a>
                </address>
                    <a href="https://github.com/damatoaj" className="socialMedia" target="_blank"><img src="/images/GitHub-Logo.png" className="socialMedia"/></a>
                    <a href="https://www.instagram.com/thundrousprophet/?hl=en"  className="socialMedia" target="_blank"><img  src="/images/instagram_icon.svg" className="socialMedia"/></a>
                    <a href="https://www.linkedin.com/in/arthur-d-amato-45b6b169/" className="socialMedia" target="_blank"><img  src="/images/linked_in_logo.svg" className="socialMedia"/></a>
                    <a href="https://arthurdamato.wordpress.com/" className="socialMedia" target="_blank"><img src="/images/wordpress_logo.svg" className="socialMedia"/></a>
            </footer>
        )  
}

export default Footer;