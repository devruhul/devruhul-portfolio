import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k1sie3o', 'template_5atu5m6', form.current, 'user_tvW8WN4bTDDccNPfj5nTg')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                if (response.status === 200) {
                    alert('Successfully sent message')
                } else {
                    alert('There is an error please try again')
                }
            }, function (error) {
                alert(`There is an error please try again${error}`)
            });
        e.target.reset()
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <h1 className="text-center fs-2 fw-bold mb-5">Contact Me</h1>
            </div>
            <div className="contact-container">
                <div className="contact-details lh-lg">
                    <div className="mt-5">
                        <i className="fa-solid fa-location-dot contact-icon"></i>
                        <h2>Address</h2>
                        <p>Sunamganj, Bangladesh</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone contact-icon"></i>
                        <h2>Phone</h2>
                        <a className="call-number text-warning" href="tel:01764896633">+8801764896633</a>
                    </div>
                    <div className="mb-5">
                        <i className="fa-solid fa-envelope-open mt-3 contact-icon"></i>
                        <h2>Email</h2>
                        <a className="text-light fs-5"
                            rel="noreferrer"
                            target="_blank" href="mailto:ruhulamin262001@gmail.com">ruhulamin262001@gmail.com</a>
                    </div>
                </div>

                <Form className="contact-form p-5 lh-lg gap-3" ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3 pb-2" >
                        <FloatingLabel
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="user_name" id='Name' placeholder="Enter Your Name" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3 pb-2">
                        <FloatingLabel
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control type="email" name="user_email" id='Email' placeholder="Enter Your Email" />
                        </FloatingLabel>

                    </Form.Group>
                    <Form.Group className="mb-3 pb-2" >
                        <FloatingLabel label="Comments">
                            <Form.Control
                                as="textarea"
                                name="message" id="message" rows={3} placeholder="Your Message"
                                style={{ height: '125px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <button type="submit" value="Send" className="primary-btn mt-4">Submit</button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;