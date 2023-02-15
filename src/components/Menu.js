import React, { useContext } from 'react';
import animateContext from '../context/animateContext';

const Menu = ({ isLightMode, setLightMode }) => {
    const { handleNavigate } = useContext(animateContext);

    const items = [
        { name: 'Home', path: '/', icon: <i className="fa-solid fa-house-user" /> },
        { name: 'Sobre', path: '/about', icon: <i className="fa-solid fa-user" /> },
        { name: 'Habilidades', path: '/skills', icon: <i className="fa-solid fa-list" /> },
        { name: 'Portfólio', path: '/content', icon: <i className="fa-solid fa-paperclip" /> },
        { name: 'Contatos', path: '/contact', icon: <i className="fa-solid fa-address-book" /> },
    ]
    return (
        <ul className="menu">
            <li>
                <button
                  type="button"
                  className="theme-switcher"
                onClick={() => setLightMode(!isLightMode)}
                >
                    <i className="fa-solid fa-circle-half-stroke fa-2x" />
                </button>
            </li>
            {items.map((item) => (
                <li key={item.name} >
                    <button
                        className='menu-item'
                        type="button"
                        name={item.path}
                        onClick={handleNavigate}
                    >
                        {item.icon}
                        <p>{item.name}</p>
                    </button>
                </li>

            ))}

        </ul>
    );
};

export default Menu;