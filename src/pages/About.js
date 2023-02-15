import React, { useContext } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import animateContext from '../context/animateContext';
import { Animated } from "react-animated-css";

const bicicleta = require('../images/bicicleta.png')
const violao = require('../images/violao.png')
const artesPlasticas = require('../images/artesplasticas.png')




const About = () => {
    const { location, visibleContent, handleNavigate } = useContext(animateContext)

    const { pathname } = useLocation();

    const isVisible = visibleContent === '/about'


    if (pathname !== location) return <Redirect to={location} />
    return (
        <Animated
            animationIn="fadeIn"
            animationInDuration={1000}
            animationOutDuration={300}
            animationOut="fadeOut"
            isVisible={isVisible}
        >

            <div
                className="page">

        <h2 className="title">Sobre mim</h2>
        <div className="navigate">
                            <div>
                                <i className="fa-regular fa-circle-left fa-3x" />
                                <button
                                    name={`/`}
                                    onClick={handleNavigate}
                                    type="button">
                                </button>
                            </div>
                            <div>
                                <button
                                    name={`/skills`}
                                    onClick={handleNavigate}
                                    type="button">
                                </button>
                                <i className="fa-regular fa-circle-right fa-3x" />
                            </div>
                        </div>
                <div className="about">
                    <div className="left">
                                        
                        <p>Eu sou nascido em 1995, e como toda criança na época, eu jogava futebol na rua, andava de skate e bicicleta, assim como demais atividades típicas da idade.

                            <br />
                            <br />
                             Em paralelo, eu estudava, por influência da família, em uma escola de música local onde por 2 anos toquei instrumentos de sopro junto da banda, em apresentações dentro e fora da cidade, e por 3 anos acompanhei a orquestra da mesma instituição tocando Violoncelo.

                            <br/>
                            <br/>
                            Desde os meus 11 anos de idade, durante boas horas do meu dia eu estava em frente a um computador, inicialmente fascinado com jogos, para então 10 anos depois eu dar início aos meus estudos, utilizando estas mesmas boas horas para programar.
                            <br/>
                            <br/>
                            Eu acredito em uma forte contribuição de tudo isso na minha formação como pessoa. Eu, a partir de um gosto por desenho enquanto criança, cheguei a trabalhar com artes plásticas por 3 anos, e prestei por mais de 6 anos serviços em manutenção de computadores e também redes de baixa complexidade. E por estar sempre em diferentes meios, falando com diferentes pessoas, existe um impacto na comunicação e tratamento que tenho hoje. Assim como nos meus hobbies e gostos.

                        </p>

                    </div>


                    <div className="right">
                        <div className="canvas-container">
                            <img src={artesPlasticas} alt="" />
                            <img src={violao} alt="" />

                            <Animated
                                className="canva-animated"
                                animationIn="bounceInLeft"
                                animationInDelay={600}
                                animationInDuration={1000}
                                animationOutDuration={300}
                                animationOut="fadeOut"
                                isVisible={isVisible}
                            >
                                <img className="canva-bicicleta" src={bicicleta} alt="" />
                            </Animated>

                        </div>
                    </div>
                </div>


            </div>
        </Animated>

    );
};

export default About;