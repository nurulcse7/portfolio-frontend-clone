import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_36vclrk', 'template_uib0ack', form.current, 'y3HJdYXyeuv1sR5i4')
            .then((result) => {
                //     console.log(result.text);
                toast("Congrats! Successfully sent message");

            }, (error) => {
                //     console.log(error.text);
                    toast(error.message)
                });

                e.target.reset()
            };


        return (
            <section id='contact'>
                <h3 className='sub-title'>Get In Touch</h3>
                <h1>Contact Me</h1>

                <div className="container contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <MdOutlineEmail className='contact_option-icon' />
                            <h3>Email</h3>
                            <h4>nurul.cse7@gmail.com</h4>
                            <a href="mailto:nurul.cse7@gmail.com" target="_blank">Send an email</a>
                        </article>
                        <article className="contact_option">
                            <RiMessengerLine className='contact_option-icon' />
                            <h3>Messenger</h3>
                            <h4>facebook</h4>
                            <a href="https://m.me/nurul.bd.73" target="_blank">Send a message</a>
                        </article>
                        <article className="contact_option">
                            <BsWhatsapp className='contact_option-icon' />
                            <h3>WhatsApp</h3>
                            <h4>+8801869964838</h4>
                            <a href="https://api.whatsapp.com/send?phone=+8801869964838" target="_blank">Send a message</a>
                        </article>
                    </div>
                    {/* End of contact options */}
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="address" name='address' placeholder='Your Address' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <input type="number" name='phone' placeholder='Your Mobile Number' required />
                        <textarea name="message" rows="7" placeholder='Type your message here' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        );
    };

    export default Contact;