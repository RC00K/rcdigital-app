import React from 'react';
import HeadshotRyderLogo from './Icons/png/HeadshotRyderLogo.png';

const About = () => {

    const aboutImage = [
        {
            id: 0,
            image: HeadshotRyderLogo,
            alt: "Headshot Ryder Logo"
        }
    ];

    return (
        <section className="section">
            <div className="about__container container grid">
                <div className="about__content grid">
                    <div className="about__image">
                        <img src={aboutImage[0].image} alt={aboutImage[0].alt} />
                    </div>
                    <div className="about__data">
                        <div className="about__information">
                            <h2 className="about__title" data-text="About Me">About Me</h2>
                            <span className="about__subtitle">My Introduction</span>
                            <p className="about__paragraph">
                                Creative designer, with extensive knowledge and years of experience, 
                                working in Computer Programming, Graphic Design, Photography, Videography, 
                                and UI/UX Design, delivering quality work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;