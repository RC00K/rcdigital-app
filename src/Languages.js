import React from 'react';
import HTMLIcon from './Icons/svg/html.svg';
import CSSIcon from './Icons/svg/css.svg'
import SassIcon from './Icons/png/sass.png'
import JavaScriptIcon from './Icons/svg/javascript.svg'
import JavaIcon from './Icons/png/java.png'
import PythonIcon from './Icons/png/python.png'
import CPlusPlusIcon from './Icons/svg/c-plus-plus.svg'
import DartIcon from './Icons/svg/dart.svg'
import FlutterIcon from './Icons/svg/flutter.svg'
import SwiftIcon from './Icons/png/swift.png'
import MySQLIcon from './Icons/svg/mysql.svg'
import PHPIcon from './Icons/png/php.png'
import ReactIcon from './Icons/png/react.png'
import VueJSIcon from './Icons/png/vue-js.png'
import NPMIcon from './Icons/png/npm.png'
import NodeJSIcon from './Icons/png/nodejs.png'

const Languages = ({ percentage }) => {
    const radius = 50;

    const icons = [
        {
            name: 'HTML',
            percentage: 90,
            strokeColor: 'E34F26',
            src: HTMLIcon
        },
        {
            name: 'CSS',
            percentage: 85,
            strokeColor: '1B73BA',
            src: CSSIcon
        },
        {
            name: 'Python',
            percentage: 85,
            strokeColor: '387EB8',
            src: PythonIcon
        },
        {
            name: 'JavaScript',
            percentage: 65,
            strokeColor: 'E9CA32',
            src: JavaScriptIcon
        },
        {
            name: 'Swift',
            percentage: 60,
            strokeColor: 'F97F34',
            src: SwiftIcon
        },
        {
            name: 'React',
            percentage: 60,
            strokeColor: '61DAFB',
            src: ReactIcon
        },
        {
            name: 'Dart',
            percentage: 55,
            strokeColor: '0079B3',
            src: DartIcon
        },
        {
            name: 'Flutter',
            percentage: 55,
            strokeColor: '02539A',
            src: FlutterIcon
        },
        {
            name: 'PHP',
            percentage: 45,
            strokeColor: '8993BE',
            src: PHPIcon
        },
        {
            name: 'Java',
            percentage: 40,
            strokeColor: 'E76F00',
            src: JavaIcon
        },
        {
            name: 'Sass',
            percentage: 30,
            strokeColor: 'CF649A',
            src: SassIcon
        },
        {
            name: 'C++',
            percentage: 60,
            strokeColor: '00599C',
            src: CPlusPlusIcon
        },
        {
            name: 'MySQL',
            percentage: 50,
            strokeColor: '00758F',
            src: MySQLIcon
        },
        {
            name: 'NodeJS',
            percentage: 35,
            strokeColor: '83CD29',
            src: NodeJSIcon
        },
        {
            name: 'VueJS',
            percentage: 60,
            strokeColor: '41B883',
            src: VueJSIcon
        },
        {
            name: 'NPM',
            percentage: 75,
            strokeColor: 'CB3837',
            src: NPMIcon
        }
    ];

    return (
        <div className="programming__container">
            <div className="programming__content">
                <div className="programming__data">
                    <div className="programming__title__container">
                        <h2 className="programming__title" data-text="Programming">Programming</h2>
                        <span className="programming__subtitle">Languages Known</span>
                    </div>

                    <div className="programming__grid">
                        {icons.map((icon, index) => {
                            const circumference = 2 * Math.PI * radius;
                            const offset = circumference - (icon.percentage / 100) * circumference;
                            
                            return (
                                <div className="programming__item group">
                                    <div 
                                        className="progress__circle__container"
                                        style={{ filter: `drop-shadow(0 0 10px #${icon.strokeColor})` }}
                                    >
                                        <svg className="progress__circle" width="200" height="200">
                                            <circle
                                                className="progress__circle__background"
                                                stroke="#FFE194"
                                                strokeWidth="6"
                                                fill="transparent"
                                                r={radius}
                                                cx="100"
                                                cy="100"
                                            />
                                            <circle
                                                stroke={`#${icon.strokeColor}`}
                                                strokeWidth="6"
                                                strokeDasharray={`${circumference} ${circumference}`}
                                                strokeDashoffset={offset}
                                                fill="transparent"
                                                r={radius}
                                                cx="100"
                                                cy="100"
                                            />
                                            <text 
                                                x="50%" 
                                                y="50%" 
                                                textAnchor="middle" 
                                                dy="0.3em" 
                                                className="progress__circle__text"
                                                style={{ animationName: `text-flicker-${icon.strokeColor}` }}
                                            >
                                                {`${icon.percentage}%`}
                                            </text>
                                        </svg>
                                        <img className="progress__circle__logo" src={icon.src} alt={icon.name} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Languages;