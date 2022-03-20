import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css';

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
        <div className="container mt-5">

            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center fw-bold mb-5">Contact Me</h1>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-details p-5">
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <h2>Address</h2>
                        <p>Sunamganj, Bangladesh</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <h2>Phone</h2>
                        <a className="call-number text-warning" href="tel:01764896633">+8801764896633</a>
                    </div>
                    <div>
                        <i class="fa-solid fa-envelope-open"></i>
                        <h2>Email</h2>
                        <a className="text-light fs-5" target="_blank" href="mailto:ruhulamin262001@gmail.com">ruhulamin262001@gmail.com</a>
                    </div>
                </div>

                <Form className="contact-form p-5" ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="name" id='name' placeholder="Enter Your Name" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" name="email" id='email' placeholder="Enter Your Email" />
                        </FloatingLabel>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                name="message" id="message" rows={3} placeholder="Your Message"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                    </Form.Group>

                    <button type="submit" className="primary-btn mt-4">Submit</button>

                </Form>
            </div>




            {/* 
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id='name' />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id='email' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" />
                <input type="submit" value="Submit" />
            </form> */}
        </div>

    );
};

export default Contact;