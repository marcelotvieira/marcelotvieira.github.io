import React, { useContext } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import animateContext from '../context/animateContext';
import { Animated } from "react-animated-css";
import ContactForm from '../components/ContactForm';
import { contacts } from '../data';

const Contact = () => {
    const { location, visibleContent, handleNavigate } = useContext(animateContext)

    const { pathname } = useLocation();

    const isVisible = visibleContent === '/contact'


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
               <h2 className="title">Contatos</h2>

                <div className="contact">
                    <div className="contact-form">
                        <ContactForm />
                    </div>

                    <div className="contact-box">
                    { contacts.map((contact) => (
                        <a
                         target="_blank"
                         rel='noreferrer'
                         href={contact.source}
                         className="contact-card"
                        >
                            <div>{contact.icon}</div>
                            <div>
                                <h3>{contact.name}</h3>
                            </div>


                        </a>
                    ))}
                </div>
                </div>

                </div>
        </Animated>
    );
};

export default Contact;