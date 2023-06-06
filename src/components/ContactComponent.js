import React, { useState } from 'react'
import {FiSend} from 'react-icons/fi'
import '../App.css'
import emailjs from '@emailjs/browser';


function ContactComponent(props) {
    const[result , showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(
                "service_oqfqm7p", 
                "template_cwrlnlr", 
                e.target, 
                "HnweyI1fp7XYBhRxI"
            )
            .then(
                (result) => {
                    console.log(result.text);
                }, 
                (error) => {
                    console.log(error.text);
                }
            );
            e.target.reset();
            showResult(true);
    };
return (
    <form onSubmit={sendEmail} className="contact__form">
        <div className="form__input-group">
            <div className="form__input-div">
                <input 
                    type="text"
                    name="fullName"
                    placeholder='Your Name' 
                    className="formm__control" 
                    required
                />
            </div>

            <div className="form__input-div">
                <input 
                    type="phone" 
                    name="phone"
                    placeholder='Your Phone' 
                    className="formm__control"
                    required
                />
            </div>

            <div className="form__input-div">
                <input 
                    type="email" 
                    name="email"
                    placeholder='Your Email' 
                    className="formm__control" 
                    required
                />
            </div>

                <div className="form__input-div">
                    <input 
                    type="text" 
                    name="object"
                    placeholder='Your Subject' 
                    className="formm__control" 
                />
            </div>

        </div>

        <div className="form__input-div">
            <textarea 
                name="message"
                placeholder='Your Message...' 
                className='formm__control textarea'
                required
            >
                    
            </textarea>
        </div>

        <button className="button">
            Send Message
            <span className='button__icon contact__button-icon'>
                <FiSend/>
            </span>
        </button>
    </form>
)
}

export default ContactComponent