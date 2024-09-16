import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

interface NavbarProps {
    selected: string;
    animate: boolean;
    lightText?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ selected, animate, lightText }) => {

    const backgroundColor = 'rgba(0, 2, 18, 1.0)';

    const [hasScrolled, setHasScrolled] = React.useState(false);

    useEffect(() => {
        if(!animate) {
            return;
        }
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animate]);

    return (
        <nav className={`navbar ${lightText ? 'light-text' : 'dark-text'} ${animate ? 'navbar-background' : ''}`}
            style={{
                backgroundColor: hasScrolled ? backgroundColor : 'transparent',
            }}>
            <ul className="navbar-list">
                {<li className={selected === 'Home' ? 'is-selected' : ''}>
                    <Link to="/">Home</Link>
                </li>}
                
                {<li className={selected === 'About' ? 'is-selected' : ''}>
                    <Link to="/about">About</Link>
                </li>}

                {<li className={selected === 'Travel Map' ? 'is-selected' : ''}>
                    <Link to="/travel-map">Travel Map</Link>
                </li>}
            </ul>
        </nav>
    );
};

export default Navbar;