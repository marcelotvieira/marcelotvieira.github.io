import React, { useContext } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import animateContext from '../context/animateContext';
import { Animated } from "react-animated-css";
import { skills } from '../data';

const Skills = () => {
    const { location, visibleContent, handleNavigate } = useContext(animateContext)

    const { pathname } = useLocation();

    const isVisible = visibleContent === '/skills';


    if (pathname !== location) return <Redirect to={location} />
    return (
        <Animated
        animationIn="fadeIn"
        animationInDuration={1000}
        animationOutDuration={300}
        animationOut="fadeOut"
        isVisible={isVisible}
    >
        <div className="page">
        <div className="skills">
        <h2 className="title">Skills</h2>

        <div className="navigate">
                    <div>
                        <i className="fa-regular fa-circle-left fa-3x" />
                        <button
                            name={`/about`}
                            onClick={handleNavigate}
                            type="button">
                        </button>
                    </div>
                    <div>
                        <button
                            name={`/content`}
                            onClick={handleNavigate}
                            type="button">
                        </button>
                        <i className="fa-regular fa-circle-right fa-3x" />
                    </div>
                </div>
            <div className="skills-container" >
                {skills.map((skill, index) => (
                     <Animated
                     animationIn="fadeInUp"
                     animationInDelay={100 * Number(index)}
                     animationInDuration={800}
                     animationOutDuration={300}
                     animationOut="fadeOut"
                     isVisible={isVisible}
                     key={skill.name}
                     >
                    <div
                     className="skill-card">
                        <img src={skill.image} alt='' className="skill-icon" />
                        <h3>{skill.name}</h3>

                        <ul>
                            { skill.subTitles.map((title, index) => (
                                <li key={title}>
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    </Animated>
                ))}
            </div>
        </div>
        </div>
        </Animated>

    );
};

export default Skills;