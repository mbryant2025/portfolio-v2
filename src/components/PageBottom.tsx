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
                    
                    {/* <img className="icon-small" src="/img/linkedin-outline.png" alt="LinkedIn" onClick = {() => window.open("https://www.linkedin.com/in/mbryant2025/", "_blank")} /> */}
                    <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className = "icon-small" onClick = {() => window.open("https://linkedin.com/in/mbryant2025", "_blank")}>

                        <g data-name="Layer 2">

                        <g data-name="linkedin">

                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>

                        <path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z"/>

                        <path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z"/>

                        <path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>

                        </g>

                        </g>
                    </svg>
                </div>

        </div>
    );
};

export default PageBottom;
