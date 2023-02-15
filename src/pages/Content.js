import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import animateContext from '../context/animateContext';
import { Animated } from "react-animated-css";
import UsePortfolio from '../hooks/UsePortfolio';
import { content } from '../data';
import ContentCard from '../components/ContentCard';

const Content = () => {
    const { location, visibleContent, handleNavigate } = useContext(animateContext)

    const { pathname } = useLocation();
    const isVisible = visibleContent === '/content'

    const { handleFilter, currTab } = UsePortfolio();
    const [filteredContent, setFilteredContent] = useState([]);

    useEffect(() => {
        setFilteredContent(content.filter((item) => {
            if (currTab === '') return item;
            if (item.tags.includes(currTab)) return item;
        }))
    }, [currTab])


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
                <div className="content" >
                    <h2 className="title">Portfólio</h2>

                    <div className="navigate">
                        <div>
                            <i className="fa-regular fa-circle-left fa-3x" />
                            <button
                                name={`/skills`}
                                onClick={handleNavigate}
                                type="button">
                            </button>
                        </div>
                        <div>
                            <button
                                name={`/contact`}
                                onClick={handleNavigate}
                                type="button">
                            </button>
                            <i className="fa-regular fa-circle-right fa-3x" />
                        </div>
                    </div>


                    <div className="portfolio-container">
                        <h3>Utilize palavras chave para filtrar</h3>
                        <div className="tabs">
                            <button
                                onClick={handleFilter}
                                disabled={ currTab === 'estudo'}
                                value="estudo" type="button">
                                Projetos de estudo
                            </button>
                            <button
                                onClick={handleFilter}
                                disabled={ currTab === 'spa'}
                                value="spa" type="button">
                                Single Page Applications
                            </button>
                            <button
                                onClick={handleFilter}
                                disabled={ currTab === 'api'}
                                value="api" type="button">
                                Rest API's
                            </button>
                            <button
                                onClick={handleFilter}
                                disabled={ currTab === 'react'}
                                value="react" type="button">
                                React
                            </button>
                            <button
                                disabled={ currTab === 'node'}
                                onClick={handleFilter}
                                value="node" type="button">
                                Node JS
                            </button>
                            <button
                                disabled={ currTab === 'context'}
                                onClick={handleFilter}
                                value="context" type="button">
                                Context & Hooks
                            </button>
                            <button
                                disabled={ currTab === 'docker'}
                                onClick={handleFilter}
                                value="docker" type="button">
                                Docker
                            </button>
                            <button
                                disabled={ currTab === 'mysql'}
                                onClick={handleFilter}
                                value="mysql" type="button">
                                MySQL
                            </button>
                            <button
                                disabled={ currTab === 'css'}
                                onClick={handleFilter}
                                value="css" type="button">
                                CSS / Sass
                            </button>
                            <button
                                disabled={ currTab === 'teste'}
                                onClick={handleFilter}
                                value="teste" type="button">
                                Testes
                            </button>
                        </div>

                        <div className="content-box">
                            {filteredContent.map((item, index) => (
                                <ContentCard key={index} content={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Animated>
    );
};

export default Content;