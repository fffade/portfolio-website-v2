/*
  Omar Johnson
  Main app React component
*/
/* Imports */
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';

function App() {

  return (
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route exact path="/" element={<Main />} >
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}

export default App;
