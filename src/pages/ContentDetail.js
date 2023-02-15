import React, { useContext } from 'react';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router-dom';
import animateContext from '../context/animateContext';
import { content } from '../data';


function ContentDetail({ match }) {

    const { location, visibleContent, handleNavigate } = useContext(animateContext)
    const isVisible = visibleContent === `/content/${match.params.id}`;

    const data = content.find((project) => project.id === Number(match.params.id));





    if (match.url !== location) return <Redirect to={location} />
    return <div>
        <Animated
            animationIn="fadeIn"
            animationInDuration={800}
            animationOutDuration={300}
            animationOut="fadeOut"
            isVisible={isVisible}
        >
            <div className="page">
                <h2 className="title">Detalhes</h2>

                <div className="content-detail">
                    <div class="presentation-box">
                        <img src={data.image} alt="" />
                        <div className="source-buttons">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={data.repository}
                          >
                            <i style={{ color: '#FF914D' }} className="fa-brands fa-github fa-2x" />
                        </a>
                        {data.repository !== data.source && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={data.source}
                          >
                        <i style={{ color: '#FF914D' }} className="fa-solid fa-right-to-bracket fa-2x" />
                        </a>
                        )}
                    </div>

                    <div className="navigate">
                            <div>
                                <i className="fa-regular fa-circle-left fa-3x" />
                                <button
                                    name={`/content`}
                                    onClick={handleNavigate}
                                    type="button">
                                </button>
                            </div>
                           
                        </div>
                        </div>
                    

                    <div className="content-detail-info">
                        <h2 className="title">{data.name}</h2>
                        <p>{data.description}</p>
                        <ul>
                            {data.usedStacks.map((stack) => (
                                <div>
                                    <li>
                                        <h3>{stack.name}</h3>
                                        <p>{stack.usedTo}</p>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>



            </div>

        </Animated>
    </div>;
}

export default ContentDetail;