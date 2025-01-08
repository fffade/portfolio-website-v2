/*
  Omar Johnson
  Main app React component
*/
/* Imports */
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Socials from './components/Socials';
import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';

/* Custom connect component to router */
export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} location={useLocation()} {...props}/>
    }
    return Wrapper;
}

function App() {

  const FooterWithRouter = withRouter(Footer);

  return (
    <div className="container-fluid flex flex-col overflow-x-hidden min-w-screen min-h-screen bg-slate-800">

        <Header />

        <main className="container-fluid justify-center flex flex-col min-h-3/4">

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/" element={<HomePage />} />
          </Routes>

        </main>

        <Socials />

        <FooterWithRouter />

    </div>
  );
}

export default App;
