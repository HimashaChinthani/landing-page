import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Mission from './Pages/Mission';
import Vision from './Pages/Vision';
import Register from './Pages/Register';
import Login from './Pages/Login'
import OurTeam from './Pages/OurTeam'; 
import OurValues from './Pages/OurValues';
import History from './Pages/History';
import ShopNow from './Pages/ShopNow';
import { ThemeProvider } from './contexts/ThemeContext';
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/OurTeam" element={<OurTeam />} /> 
          <Route path="/OurValues" element={<OurValues />} />
          <Route path="/history" element={<History />} />
          <Route path="/ShopNow" element={<ShopNow />} />
         
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
