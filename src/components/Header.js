import React, { useState } from 'react';
import Menu from './Menu';
import Socials from '../components/Socials';

const logo = require('../images/logo.png')

const Header = ({ isLightMode, setLightMode }) => {


    return (
        <div className="header">
            <img className="logo" src={logo} alt=''/>
            <Socials />

            <Menu isLightMode={isLightMode} setLightMode={setLightMode}/>
        </div>
    );
};

export default Header;