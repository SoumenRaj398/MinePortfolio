import React from 'react';
import "./Intro.css"
import image from "../../img/soumen.png"
import cover from "../../img/cover1.png"
import { Typewriter } from 'react-simple-typewriter'


const Intro = () => {
    return (
        <div className="hero min-h-screen bg-base-300" style={{
            background: `url(${cover})`
        }}>
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} />
          <div>
              <h1 className='text-xl font-bold mb-2'>Hello, I'm</h1>
            <h1 className="name text-5xl font-bold">Soumen Raj</h1>
            <p className=' text-sm font-bold text-rose-500'>

          <Typewriter
            words={['Front End Web developer']}
         
            cursor
            cursorStyle='_'
            typeSpeed={500}
            // deleteSpeed={50}
            // delaySpeed={1000}
          
          />
            </p>
            <p className="py-6">
            <Typewriter
            words={['Enthusiastic frontend developer eager to contribute to team success through hard work']}
         
            cursor
            cursorStyle='_'
            typeSpeed={45}
            // deleteSpeed={50}
            // delaySpeed={1000}
          
          />
              </p>
            <a className="resume" target="_blank" href="https://drive.google.com/file/d/1usol9I3RuMAz2QghcHo7qnL3QBzPejfL/view?usp=share_link">Download Resume</a><br />
            
            
          </div>
         
        </div>
      </div>
    );
};

export default Intro;