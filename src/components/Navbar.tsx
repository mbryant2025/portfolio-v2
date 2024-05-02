import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/navbar.css';

interface NavbarProps {
    selected: string;
    animate: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ selected, animate }) => {

    return (
        <nav className="navbar">
            <div className="navbar-background"></div>
            <ul className="navbar-list">
                {selected !== "Home" && <li className={selected === 'Home' ? 'is-selected' : ''}>
                    <Link to="/">Home</Link>
                </li>}
                
                {selected !== "About" && <li className={selected === 'About' ? 'is-selected' : ''}>
                    <Link to="/games">Games</Link>
                </li>}

                {selected !== "About" && <li className={selected === 'About' ? 'is-selected' : ''}>
                    <Link to="/projects">About</Link>
                </li>}
            </ul>
        </nav>
    );
};

export default Navbar;