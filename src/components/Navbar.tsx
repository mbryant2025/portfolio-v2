import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/navbar.css';
import { start } from 'repl';

interface NavbarProps {
    selected: string;
    animate: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ selected, animate }) => {

    const handleScroll = () => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        const navbarBackground = document.querySelector('.navbar-background') as HTMLElement;
        if (navbar) {
            navbar.style.transition = 'opacity 0.5s';

            const transitionDistance = 400;
            const opacity = Math.min(Math.max(0,window.scrollY / transitionDistance - 0.85), 1);
            navbar.style.opacity = `${opacity}`;

            if (window.scrollY === 0) {
                navbar.style.backgroundColor = 'transparent';
                navbar.style.opacity = '1';
            }

            if (window.scrollY > transitionDistance) {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        }
    };

    // useEffect(() => {
    //     if (animate) {
    //         window.addEventListener('scroll', handleScroll);
    //         return () => window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [animate]);

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