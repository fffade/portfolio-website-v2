/*
  Omar Johnson
  Main app React component
*/
/* Imports */
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Socials from './components/Socials';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid flex flex-col overflow-x-hidden min-w-screen min-h-screen bg-slate-800">

      <HashRouter>

        <Header />

          <main className="container-fluid justify-center flex flex-col min-h-3/4">

            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/about/" element={<About />} exact />
              <Route path="/contact/" element={<Contact />} exact />
            </Routes>


          </main>

          <Socials />

      </HashRouter>
    </div>
  );
}

export default App;
