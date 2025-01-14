/*
  Omar Johnson
  Projects section of the app
  Created on: 1/14/25
*/
/* Imports */
import Socials from './Socials';
import { Footer, withRouter } from './Footer';
import { PrimaryButton } from './Buttons';
import React from 'react';
import { useNavigate } from 'react-router';
import ReactDOM from 'react-dom/client';


function Projects() {

  const navigate = useNavigate();

  const FooterWithRouter = withRouter(Footer);

  return (
    <div className="container-fluid flex flex-col overflow-x-hidden w-full min-h-screen bg-slate-900">

        <main className="container-fluid self-center flex flex-col w-1/4 min-h-3/4 m-8 ">

          <PrimaryButton clickHandle={() => { navigate('/'); }} icon="fa-solid fa-arrow-up" text="GO BACK" />

        </main>

        <Socials />

        <FooterWithRouter />

    </div>
  );
}

export default Projects;
