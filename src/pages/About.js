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
                                    name={`/content`}
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
                <div className="about">
                    <div className="left">
                                        
                        <p>Eu sou nascido em 1995, e como toda criança na época, eu jogava futebol na rua, andava de bicicleta, assim como demais atividades típicas da idade.

                            <br />
                            <br />
                             Em paralelo, eu estudava, em uma escola de música local onde por 1 anos toquei instrumentos de sopro junto da tradicionalíssima banda, e por mais 1 anos com a orquestra da mesma instituição.
                            <br/>
                            <br/>
                            Desde os meus 11 anos de idade, durante boas horas do meu dia eu estava em frente a um computador, inicialmente fascinado com jogos, para então anos depois utilizar estas mesmas boas horas para aprender a programar. Com meus 15 anos eu ja prestava manutenção em computadores e notebooks na minha região.
                            <br/>
                            <br/>
                            Como hobbies, hoje, eu gosto muito de desenhar, e em certo momento já fiz disso um trabalho. Além de programar demanas que eu mesmo invento.
                            <br/>

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