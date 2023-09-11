import React from 'react';
import { Canvas } from '@react-three/fiber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import Education from './Education';
import Languages from './Languages';

const Experience = () => {

    return (
        // <div className="section__container">
        //     <div className="experience__container">
        //         <div className="section__title__center">
        //             <div className="section__title__large" data-text="Experience">Experience</div>
        //         </div>
        //     </div>
        // </div>
        <section className="section">
            <div className="experience__container container">
                <div className="experience__content">
                    <div className="experience__data">
                        <div className="experience__title__container">
                            <h1 className="experience__title" data-text="Experience">Experience</h1>
                        </div>
                        <Education />
                        <Languages />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
