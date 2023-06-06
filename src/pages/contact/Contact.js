import React, { useState } from 'react'

import {FaEnvelopeOpen , FaPhoneSquareAlt , FaTwitter , FaFacebook,FaLinkedin , FaInstagram} from 'react-icons/fa'



import './Contact.css'
import Loading from '../home/loading'
import ContactComponent from '../../components/ContactComponent'

const Contact = () => {



  const {isPending} = Loading();
  return (
    <section className="contact section">
      {isPending && <div className='loader'></div>}
            <h2 className="section__title">
              Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
              <div className="contact__data">
                <h3 className="contact__title">Welcome</h3>

                <p className="contact__decription">
                Feel free to contact me to discuss your projects and needs, 
                I'll be delighted to respond to you promptly and work with you.
                </p>
                <br/>
                <div className="contact__info">
                  <div className="info__item">
                    <FaEnvelopeOpen className='info__icon'/>

                    <div>
                      <span className="info__title">Mail me</span>
                      <h4 className="info__desc">mohamedhoucem.ellouze@ensi-uma.tn</h4>

                    </div>
                  </div>

                  <div className="info__item">
                    <FaPhoneSquareAlt className='info__icon'/>

                    <div>
                      <span className="info__title">Call me</span>
                      <h4 className="info__desc">+216 95 596 538</h4>
                      
                    </div>
                  </div>

                </div>

                <div className="contact__socials">
                  <a target="_blank" href='https://www.facebook.com/houssem.ellouze.9' className="contact_social-link">
                    <FaFacebook />
                  </a>

                  <a target="_blank" href='https://www.instagram.com/houcem_ellouze/' className="contact_social-link">
                    <FaInstagram />
                  </a>

                  <a target="_blank" href='https://twitter.com' className="contact_social-link">
                    <FaTwitter />
                  </a>

                  <a target="_blank" href='https://www.linkedin.com/in/ellouze-mohamed-houcem/' className="contact_social-link">
                    <FaLinkedin />
                  </a>
                </div>

              </div>

              <ContactComponent/>
            </div>
    </section>
  )
}

export default Contact