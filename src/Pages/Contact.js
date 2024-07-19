import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Contact.css'; 

const details = {
  address: 'No 45, Main Road, Colombo 5.',
  phone: '074-0469099',
  email: 'GreenDesertsSucculentParadise@gmail.com'
};

function Contact() {
  const { detail } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!message) errors.message = 'Message is required';
    return errors;
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        {submitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? 'error-input' : ''}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? 'error-input' : ''}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={errors.message ? 'error-input' : ''}
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>
      <div className="our-details-container">
        <h2>Our Details</h2>
        {detail ? (
          <p><strong>{detail.charAt(0).toUpperCase() + detail.slice(1)}:</strong> {details[detail]}</p>
        ) : (
          <ul>
            <li><strong>Address:</strong> {details.address}</li>
            <li><strong>Phone:</strong> {details.phone}</li>
            <li><strong>Email:</strong> {details.email}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Contact;
