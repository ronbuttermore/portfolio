import React, { useState } from 'react';

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
        <div>
        <p>
          Hello {name}
        </p>
        <form className="form">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
            <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
};

export default Contact;