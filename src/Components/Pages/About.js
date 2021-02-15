import React from 'react';

const About = (props) => {
        return(
            <main>
                <h1>About Me</h1>
                <div className="container">
                    <p>
                        An <bold>experienced</bold> educator and coach, 
                        I bring collaborative leadership to my teams by facilitating <bold>direct communication, managing goals/expectations, and being process oriented</bold>. 
                        With my background in kinesiology and philosophy, I am equipped with critical thinking and problem solving skills, which deliver excellent outcomes for clients and teammates.
                        <bold>Dedicated, resilient, creative</bold>; I am a valuable addition to any team environment.		
                    </p>
                    <img src="/images/headshot.jpg" className="headshot"/>
                </div>
            </main>
        )
}

export default About;