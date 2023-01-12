import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import cover from "../../img/cover1.png"
import './About.css'

const About = () => {
    const navigate=useNavigate();
    return (
        <div id='about' className="hero my-12" style={{
            background: `url(${cover})`
        }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center p-12">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">
      <Typewriter
            words={[' About Me']}
         
            cursor
            cursorStyle='_'
            typeSpeed={300}
            // deleteSpeed={50}
            // delaySpeed={1000}
          
          />
       </h1>
      <p className="mb-5">Hello, I'm a junior Web Developer having experience on HTML5, CSS, Bootstarp, Tailwind css, Javascript, React.js, Node.js, MongoDb, Express, JWT and other things.</p>
      <p className='mb-5'>If you want to know details about me,feel free to message me from below contact box.</p>
      <button onClick={()=>navigate("/contact")} className="message">Any Message?</button>
    </div>
  </div>
</div>
    );
};

export default About;