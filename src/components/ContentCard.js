import React, { useContext } from 'react';
import { Animated } from "react-animated-css";
import animateContext from '../context/animateContext';
import { Redirect, useLocation } from 'react-router-dom';





const ContentCard = ({ content }) => {

    const stacks = [
        { name: 'react', icon: <i style={{ color: 'rgb(147, 147, 251)' }} key="react" className="fa-brands fa-react" /> },
        { name: 'node', icon: <i style={{ color: 'rgb(164, 160, 66)' }} key="node" className="fa-brands fa-node-js" /> },
        { name: 'docker', icon: <i style={{ color: 'rgb(147, 147, 251)' }} key="docker" className="fa-brands fa-docker" /> },
        { name: 'mysql', icon: <i style={{ color: 'rgb(85, 103, 217)' }} key="mysql" className="fa-solid fa-database" /> },
        { name: 'css', icon: <i style={{ color: 'rgb(85, 103, 217)' }} key="css" className="fa-brands fa-css3-alt" /> },
        { name: 'server', icon: <i style={{ color: 'rgb(85, 103, 217)' }} key="server" className="fa-solid fa-server" /> },
        { name: 'javascript', icon: <i style={{ color: '#abd02f' }} key="javascript" className="fa-brands fa-square-js" /> },


    ];

    const { tags, name, description, image, repository, source } = content;

    const thisStacks = stacks.filter((stack) => {
        if (tags.includes(stack.name)) return stack;
        return null;
    });

    const { location, handleNavigate } = useContext(animateContext)
    const { pathname } = useLocation();

    if (pathname !== location) return <Redirect to={location} />
    return (
        <Animated
            animationIn="fadeInUp"
            animationInDuration={500}
            animationOutDuration={300}

            animationOut="fadeOut"
            isVisible={true}
        >

                <div className="content-card">
                    <h3>{name}</h3>
                    <div className="stacks" >
                        {thisStacks.map((stack) => <span key={stack.name}>{stack.icon}</span>)}
                    </div>
                    <button
                        type="button"
                        name={`/content/${content.id}`}
                        onClick={handleNavigate}
                        >
                            <div className="image-box">
                                <img src={image} alt='' />
                            </div>


                    <p>{description}</p>
                    </button>
                    
                    <div className="source-buttons">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={repository}
                          >
                            <i style={{ color: '#FF914D' }} className="fa-brands fa-github fa-lg" />
                        </a>
                        {repository !== source && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={source}
                          >
                        <i style={{ color: '#FF914D' }} className="fa-solid fa-right-to-bracket" />
                        </a>
                        )}
                    </div>
                </div>

        </Animated>
    );
};

export default ContentCard;