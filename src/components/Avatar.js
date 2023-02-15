import React from 'react';
const avatar = require('../images/avatar.png');


const Avatar = () => {
    return (
        <div>
            <img className="avatar" src={avatar} alt=''/>
        </div>
    );
};

export default Avatar;