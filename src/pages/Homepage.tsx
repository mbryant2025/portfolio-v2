import React from 'react';
import Projects from '../components/Projects';
import '../styles/homepage.css';
import Navbar from '../components/Navbar';
import PageBottom from '../components/PageBottom';
import Education from '../components/Education';
import Work from '../components/Work';
import Publications from '../components/Publications';
import Fun from '../components/Fun';

const Homepage: React.FC = () => {

  return (
    <div>

      <div className="splash-screen">
        <img src={`${process.env.PUBLIC_URL}/img/michael-robot-full.jpg`} alt="" className="splash-screen-image" />
      
        <div className="splash-screen-contents">

          <Navbar selected="Education" animate={true} lightText={true} />

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

      <Education />
      <Work />
      {/* <Publications /> */}


      <Projects filter={undefined} />

      <Fun />

      <PageBottom />
    </div>
  );
};

export default Homepage;

