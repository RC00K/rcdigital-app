import React from 'react';

const Education = () => {
    const colleges = [
        {
            years: "2017 - 2020",
            name: "Hutchinson Community College",
            degrees: ["Computer Science", "Computer Support Specialist", "Computer Support Specialist"]
        },
        {
            years: "2020 - 2023",
            name: "Fort Hays State University",
            degrees: ["Web Development", "Computer Science"]
        }
    ];

    return (
        <div className="education__container">
            <div className="education__content">
                <div className="education__data">
                    <div className="education__title__container">
                        <h2 className="education__title" data-text="Education">Education</h2>
                        <span className="education__subtitle">Timeline</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;