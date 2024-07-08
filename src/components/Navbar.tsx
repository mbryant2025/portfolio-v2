import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

interface NavbarProps {
    selected: string;
    animate: boolean;
    lightText?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ selected, animate, lightText }) => {

    return (
        <nav className={`navbar ${lightText ? 'light-text' : 'dark-text'}`}>
            <div className="navbar-background"></div>
            <ul className="navbar-list">
                {<li className={selected === 'Home' ? 'is-selected' : ''}>
                    <Link to="/">Home</Link>
                </li>}
                
                {/* {<li className={selected === 'Games' ? 'is-selected' : ''}>
                    <Link to="/games">Games</Link>
                </li>} */}

                {<li className={selected === 'Travel Map' ? 'is-selected' : ''}>
                    <Link to="/travel-map">Travel Map</Link>
                </li>}
            </ul>
        </nav>
    );
};

export default Navbar;