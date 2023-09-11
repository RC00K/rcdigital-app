import React from 'react';
import Accordion from './Accordion';
import { faCode, faServer, faMicrochip, faSwatchbook, faPalette } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="bg-neutral-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-leading">
                    <h2 className="text-3xl font-extrabold text-white inline-block relative" style={{ textShadow: '1px 1px 0px #262626, 1.2px 1.2px 0px #fb923c, 0.8px 1.2px 0px #fb923c, 1.2px 0.8px 0px #fb923c' }}>
                        <span className="relative">Skills</span>
                    </h2>
                    <div className="bg-orange-400 h-0.5 w-24 rounded" />
                    <p className="text-lg font-extralight text-neutral-400">My Technical Level</p>
                </div>
                <Accordion
                    title="Frontend Developer"
                    subtitle="More than 4 years"
                    items={[
                        { name: "HTML", percent: 90, icon: faCode },
                        { name: "CSS", percent: 85, icon: faCode },
                        { name: "JavaScript", percent: 65, icon: faCode },
                        { name: "React", percent: 40, icon: faCode }
                    ]}
                />
                <Accordion
                    title="Backend Developer"
                    subtitle="More than 2 years"
                    items={[
                        { name: "PHP", percent: 80, icon: faServer },
                        { name: "NodeJS", percent: 20, icon: faServer },
                        { name: "Firebase", percent: 60, icon: faServer },
                        { name: "Python", percent: 90, icon: faServer },
                        { name: "SQL", percent: 70, icon: faServer }
                    ]}
                />
                <Accordion
                    title="Designer"
                    subtitle="More than 6 years"
                    items={[
                        { name: "Lightroom Classic", percent: 80, icon: faSwatchbook },
                        { name: "Photoshop", percent: 100, icon: faSwatchbook },
                        { name: "Illustrator", percent: 60, icon: faSwatchbook },
                        { name: "XD", percent: 90, icon: faSwatchbook }
                    ]}
                />
                <Accordion
                    title="Creative"
                    subtitle="More than 5 years"
                    items={[
                        { name: "Photography", percent: 90, icon: faPalette },
                        { name: "Videography", percent: 90, icon: faPalette }
                    ]}
                />
                <Accordion
                    title="Technical"
                    subtitle="More than 8 years"
                    items={[
                        { name: "Final Cut Pro", percent: 70, icon: faMicrochip },
                        { name: "Motion", percent: 50, icon: faMicrochip },
                        { name: "Premiere Pro", percent: 90, icon: faMicrochip },
                        { name: "After Effects", percent: 70, icon: faMicrochip },
                        { name: "Xcode", percent: 80, icon: faMicrochip },
                        { name: "Android Studio", percent: 50, icon: faMicrochip },
                        { name: "Visual Studio", percent: 70, icon: faMicrochip },
                        { name: "Computer Support", percent: 100, icon: faMicrochip }
                    ]}
                />
                </div>
            </div>
    );
}

export default Skills;