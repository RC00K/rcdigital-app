import React, { useState, useEffect, useRef } from 'react';
import RyderLogo from './Icons/png/RyderLogo.png';

const Navigation = () => {
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuActive ? 'hidden' : 'initial';
    }, [menuActive]);

    const navLogo = [
        {
            image: RyderLogo,
            alt: 'logo'
        }
    ]

    const [onScroll, setOnScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setOnScroll(window.scrollY > 10);
        });
    }, []);

    return (
        <header className="header" id="header">
            <div className={`navbar ${onScroll ? 'navbar__shadow' : ''}`}>
                <div className="logo">
                    {navLogo.map((logo, index) => (
                        <img src={logo.image} alt={logo.alt} key={index} className="logo__image"/>
                    ))}
                </div>
                <div 
                    className={`hamburger ${menuActive ? 'menu__active' : ''}`} 
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`links ${menuActive ? 'menu__active' : ''}`}>
                    <a href="/" data-text="Home">Home</a>
                    <a href="/about" data-text="About">About</a>
                    <a href="/experience" data-text="Experience">Experience</a>
                    <a href="/skills" data-text="Skills">Skills</a>
                    <a href="/portfolio" data-text="Portfolio">Portfolio</a>
                    <div className="divider"></div>
                    <button>Contact</button>
                </div>
            </div>
        </header>
    );
};

export default Navigation;