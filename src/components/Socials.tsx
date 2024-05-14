import React from 'react';
import '../styles/socials.css'

const Socials: React.FC = () => {
    return (
        <div className="logoRow">
            <img src={"/img/github.png"} alt={"GitHub"} className="logo" onClick = {() => window.open("https://github.com/mbryant2025", "_blank")} />
            <img src={"/img/linkedin.png"} alt={"LinkedIn"} className="logo" onClick = {() => window.open("https://www.linkedin.com/in/mbryant2025/", "_blank")} />
            <img src={"/img/email.png"} alt={"email"} className="logo" onClick = {() => window.open("mailto:michael.c.bryant@duke.edu", "_blank")} />
            <img src={"/img/devpost.png"} alt={"Devpost"} className="logo" onClick = {() => window.open("https://devpost.com/mbryant2025", "_blank")} />
        </div>
    );
};

export default Socials;
