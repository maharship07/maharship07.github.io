import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_saksnyf', 'template_7uvk0hf', form.current, 'veQXOAjv2aD6riP-l')
            .then((result) => {
                console.log(result);
                e.target.reset();
                alert('Email Sent!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send email. Please try again later.');
            });
    };

    return (
        <section id='contact'>
            <h2 id='title'>Contact Me</h2>
            <p id='contactMessage'>Submit the form below or shoot me an email - patelm0712@gmail.com</p>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' id='name' name='from_name' placeholder='Your name...' required />

                <input type='email' id='email' name='from_email' placeholder='Your email...' required />

                <textarea id='message' name='message' placeholder='Your message...' required></textarea>

                <button type='submit' id='submitBtn'>Submit</button>
            </form>
        </section>
    );
};

export default Contact;
