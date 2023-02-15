import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Greeting from '../components/Greeting';
import animateContext from '../context/animateContext';

const Home = () => {

    const { pathname } = useLocation();

    const { location } = useContext(animateContext);

    if (pathname !== location ) return <Redirect to={location} />
    return (

            <div className='page'>
            <Greeting />
            </div>
    );
};

export default Home;