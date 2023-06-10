import React, { useContext } from 'react';
import Avatar from './Avatar';
import { Animated } from "react-animated-css";
import animateContext from '../context/animateContext';

const Greeting = () => {
    const { visibleContent } = useContext(animateContext);

    const isVisible = visibleContent === '/'
    const { handleNavigate } = useContext(animateContext);

    return (
        <Animated animationIn="fadeIn" animationInDelay={200} animationInDuration={1000} animationOutDuration={300} animationOut="fadeOut" isVisible={isVisible}>
            <div className="greeting">
                <div>
                    <h1>Olá!</h1>
                    <h2>Eu sou Marcelo Vieira,</h2>
                    <span>desenvolvedor web.</span>
                    <p>Vou te apresentar um pouco sobre mim.</p>
                    <div className="navigate">
                    <div>
                        <button
                            name={`/skills`}
                            onClick={handleNavigate}
                            type="button">
                        </button>
                        <i className="fa-regular fa-circle-right fa-3x" />
                    </div>
                    </div>
                </div>
                <div>
                    <Avatar />
                </div>
            </div>
        </Animated>
    );
};

export default Greeting;