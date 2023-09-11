import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const Accordion = ({ title, subtitle, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
                <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={items[0].icon} className="text-xl text-orange-400" />
                    <div>
                        <p className="font-medium text-white">{title}</p>
                        <p className="text-sm text-neutral-400">{subtitle}</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-orange-400" />
            </div>
            {isOpen && (
                <div className="p-4">
                    {items.map((item) => (
                        <div className="mb-8" key={item.name}>
                        <div className="flex items-center justify-between mb-4">
                            <p className="font-medium text-white">{item.name}</p>
                            <p className="text-sm text-neutral-400">{item.percent}%</p>
                        </div>
                        <div className="h-2 bg-orange-100 rounded-full">
                            <div className="h-full bg-orange-400 rounded-full" style={{ width: `${item.percent}%`, boxShadow: '0px 0px 2px #fb923c' }}></div>
                        </div>
                    </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default Accordion;