import React from 'react';
import Projects from './Projects';
import '../components/styles/homepage.css';
import Navbar from '../components/Navbar';

const Homepage: React.FC = () => {

  return (
    <div>

      <div className="splash-screen">
        <img src={`${process.env.PUBLIC_URL}/img/michael-robot-full.jpg`} alt="" className="splash-screen-image" />
      
        <div className="splash-screen-contents">

          <Navbar selected="Home" animate={true} />

          <div className="splash-screen-overlay-text">
            <h1 className="splash-screen-text">Hi! I'm Michael.</h1>
            <h1 className="splash-screen-subtext">ECE/CS At Duke</h1>
          </div>

          

          <img className="animated-arrow" src={`${process.env.PUBLIC_URL}/img/arrow.png`} alt="" onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
          } />
            

        </div>
      </div>


      <Projects filter={undefined} />
    </div>
  );
};

export default Homepage;

