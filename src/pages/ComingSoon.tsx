import React, { useEffect } from 'react';
import BackButton from '../components/BackButton';
import ScreenMessage from '../components/ScreenMessage'
import '../components/styles/coming-soon.css'
import { Link } from 'react-router-dom';


const ComingSoon: React.FC = () => {

  const [randomLink, setRandomLink] = React.useState("");

  const m = ["Oh no!", "This page is still under construction.", "You can go back or try a random article below!"]


  useEffect(() => {

    // Would ideally read from react router dom, but this is a quick fix

    fetch('projects.json')
      .then((response) => response.json())
      .then((data) => {
        let foundLink = "";
        while (foundLink === "") {
          const projects = data.widgetData;
          const randomProject = projects[Math.floor(Math.random() * projects.length)];
          const link = randomProject.link;
          // Check that link starts with /projects/
          if (link !== "" && link.substring(0, 10) === "/projects/") {
            foundLink = link;
          }
        }
        setRandomLink(foundLink);
      });
  }, [setRandomLink]);


  return (
    <div>
      <BackButton />
      <div className="top-margin" />
      <ScreenMessage messages={m} />
      <Link to={randomLink} >
        <button className='button' >
          Random Article
        </button>
      </Link>
    </div>
  );
};

export default ComingSoon;
