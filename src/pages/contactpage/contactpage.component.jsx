import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import './contactpage.styles.scss';

const ContactPage = () => (
    <div className="contact-page">
        <div className="left-section">
            <form>
                <p className="title">FEEL FREE TO CONTACT WITH US</p>
                <textarea className="message-input"  required/>
                <p className="title">EMAIL ADDRESS @</p>
                <input className="email-input" type="email" required />
                <CustomButton type="submit">Send Message</CustomButton>
            </form>
            <div className="yourcompanyemail">
                yourclothingcompany@mail.com
            </div>
        </div>
        <div className="right-section">
            <p className="title">THINGS HAPPEN IN</p>
            <div className="section-item">
                <p className="section-item-header">PARIS</p>
                <p className="section-item-address">206 Avenue de l'Opéra, 75001</p>
            </div>
            <div className="section-item">
                <p className="section-item-header">WARSAW</p>
                <p className="section-item-address">Zlota 309, 00-120</p>
            </div>
            <div className="section-item">
                <p className="section-item-header">LONDON</p>
                <p className="section-item-address">UNIT 101, COVENT GARDEN, W2CE 8RB</p>
            </div>
        </div>
    </div>
);

export default ContactPage;