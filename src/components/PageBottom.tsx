import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/page-bottom.css';

const PageBottom: React.FC = () => {

    return (
        <div className="page-bottom">
                <div className="horizontal-line-bottom" />
                <Link to="/" className="bottom-text-wrapper" onClick={
                    () => {
                            setTimeout(() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }, 100);
                            
                        }
                    }>
                    <div className="bottom-text">
                        <p>Michael Bryant</p>
                    </div>
                </Link>
                
                <div className="bottom-text-small">
                    {/* <p>LinkedIn</p> */}
                </div>

                <div className="small-icon-row">
                    <img className="icon-small" src="/img/github_small.png" alt="GitHub" onClick = {() => window.open("https://github.com/mbryant2025", "_blank")} />
                    <img className="icon-small" src="/img/mail.png" alt="Email" onClick = {() => window.open("mailto:michael.c.bryant@duke.edu", "_blank")} />
                    <img className="icon-small" src="/img/linkedin-outline-white.png" alt="LinkedIn" onClick = {() => window.open("https://www.linkedin.com/in/mbryant2025/", "_blank")} />
                </div>

        </div>
    );
};

export default PageBottom;
