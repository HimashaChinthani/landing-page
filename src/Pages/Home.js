import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('Welcome to our site!');
  const [customMessage, setCustomMessage] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setMessage('Good Morning!');
    } else if (hour < 18) {
      setMessage('Good Afternoon!');
    } else {
      setMessage('Good Evening!');
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleUpdateMessage = () => {
    if (customMessage !== '') {
      setUsername(customMessage); 
      setMessage(`Hi ${customMessage}, Welcome to our site!`);
      setCustomMessage('');
    }
  };

  const handleInputChange = (e) => {
    setCustomMessage(e.target.value);
  };

  const handleContactUsClick = () => {
    navigate('/contact');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="hero-section">
      <div className="clock">{currentTime}</div>
      <div className="side-box">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
        <button className="register-button" onClick={handleRegisterClick}>Register</button>
      </div>
      <div className="hero-content">
        <h1 className="site-name"><i>THE CACTUS OUTLET</i></h1>
        <h1 className="welcome-message">{username ? `Hi ${username}, Welcome to our site!` : message}</h1>
        <input
          className="custom-message-input"
          type="text"
          value={customMessage}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <button className="update-button" onClick={handleUpdateMessage}>Update Message</button>
        <button className="contact-button" onClick={handleContactUsClick}>Contact Us</button>
      </div>
    </div>
  );
};

export default Home;

