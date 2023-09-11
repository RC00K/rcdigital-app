import React, { useState } from 'react';
import AnimojiRyderLogo from './Icons/png/AnimojiRyderLogo.png';

const Home = () => {

    const homeImage = [
        {
            id: 0,
            image: AnimojiRyderLogo,
            alt: "Animoji Ryder Logo"
        }
    ];

    return (
        <section className="section">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/ryder-cook-0b1b3b1b0/" target="_blank" rel="noreferrer" className="home__social__icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/RC00K" target="_blank" rel="noreferrer" className="home__social__icon">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href="https://www.instagram.com/rydercook/" target="_blank" rel="noreferrer" className="home__social__icon">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/ryder.cook.18/" target="_blank" rel="noreferrer" className="home__social__icon">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCgxVpjZhnZ4fQmKRP1H1ABQ" target="_blank" rel="noreferrer" className="home__social__icon">
                            <i className="uil uil-youtube"></i>
                        </a>
                    </div>
                    <div className="home__data">
                        <div className="home__title__container">
                            <h1 className="home__title">Ryder<br/>Cook</h1>
                            <h2 className="home__subtitle home__subtitle__stroke">Est.<br/>1998</h2>
                        </div>
                        <p className="home__paragraph">
                            With a passion for all things tech, ranging from software development, 
                            graphic design, photography, videography, and video editing. 
                            The whole package with an ever expanding curiosity!!
                        </p>
                    </div>
                    <div className="home__image">
                        <img src={homeImage[0].image} alt={homeImage[0].alt} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;