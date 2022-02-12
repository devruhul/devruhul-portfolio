import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uxst0qa', 'template_fn963q8', form.current, 'user_tvW8WN4bTDDccNPfj5nTg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id='name' />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Contact;