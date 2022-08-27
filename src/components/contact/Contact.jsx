import React, { useRef } from 'react';
import "./contact.css"
import { MdOutlineEmail} from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xv2q7hs', 'template_q0lgg8r', form.current, 'yG2xGgLGaL0uBar61');

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'></MdOutlineEmail>
                        <h4>Email</h4>
                        <h5>dummytext@gmail.com</h5>
                        <a href="mailto:#">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
                        <h4>Messenger</h4>
                        <h5>dummytext@gmail.com</h5>
                        <a href="mailto:#">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
                        <h4>Whats App</h4>
                        <h5>+51231112</h5>
                        <a href="mailto:#">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact