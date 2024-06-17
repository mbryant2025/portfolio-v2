import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

interface NavbarProps {
    selected: string;
    animate: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ selected, animate }) => {

    return (
        <nav className="navbar">
            <div className="navbar-background"></div>
            <ul className="navbar-list">
                {<li className={selected === 'Home' ? 'is-selected' : ''}>
                    <Link to="/">Home</Link>
                </li>}
                
                {<li className={selected === 'About' ? 'is-selected' : ''}>
                    <Link to="/games">Games</Link>
                </li>}

                {<li className={selected === 'About' ? 'is-selected' : ''}>
                    <Link to="/skills">About</Link>
                </li>}

                {<li className={selected === 'Travel Map' ? 'is-selected' : ''}>
                    <Link to="/travel-map">Travel Map</Link>
                </li>}
            </ul>
        </nav>
    );
};

export default Navbar;