import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        };
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${name}! I've recieved your message and will get back to you as soon as I can! \n ${message} \n ${email}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id="contactform">
        <p id="greeting">
          Hello {name}! Leave me a message!
        </p>
        <form className="form">
          <label for="name">Name: </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            class="response"
          />
          <label for="email">Email: </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
            class="response"
          />
          <label for="message">Message: </label>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            class="response"
            id="message"
          />
          <button type="button" onClick={handleFormSubmit} class="response">
            Submit
          </button>
        </form>
      </div>
    );
};

export default Contact;