import React, { useState } from 'react';
import emailJs from '@emailjs/browser';

const ContactForm = () => {

    const [isSended, setSended] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = {
            from_name: e.target[0].value,
            email: e.target[1].value,
            assunto: e.target[2].value,
            message: e.target[3].value,
        };

        emailJs.send(
            'service_ljjc0is',
            'template_k0c4ht5',
            params,
            'PAJZB_IVyy-UrfuwX',
        );
        return setSended(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            {isSended ? <h4>Obrigado pelo contato!</h4> :
                (<>
                    <h4>Fale comigo:</h4>
                    <input required min={3} name="nome" placeholder="Nome" />
                    <input required name="email" placeholder="E-mail" />
                    <input required min={3} name="assunto" placeholder="Assunto" />
                    <textarea required min={3} name="mensagem" rows="4" placeholder="Sua mensagem..." />
                    <button type="submit">Enviar</button>
                </>)}
        </form>
    );
};

export default ContactForm;