/*
  Omar Johnson
  Main app React component
*/
/* Imports */
import './App.css';
import HomePage from './components/HomePage';
import Experience from './components/Experience';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import Media from "./components/Media";

function App() {

  return (
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route exact path="/" element={<Main />} >
          <Route index element={<HomePage />} />
          <Route path="media" element={<Media />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<ResumeDownload />} />
        </Route>
      </Routes>
  );
}

export default App;
