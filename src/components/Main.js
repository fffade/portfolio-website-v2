/*
  Omar Johnson
  Main page
  Created on: 1/14/25

  Defines the main visual component where user can navigate to Home, About, or Contact
*/
import React from 'react';
import Header from './Header';
import { Footer, withRouter } from './Footer';
import Socials from './Socials';
import { Outlet } from 'react-router';

function Main()
{

  const FooterWithRouter = withRouter(Footer);

  return (
    <div className="container-fluid flex flex-col overflow-x-hidden w-full min-h-screen bg-slate-800">

        <Header />

        <main className="container-fluid justify-center flex flex-col min-h-3/4">

          <Outlet />

        </main>

        <Socials />

        <FooterWithRouter />

    </div>
  );
}

export default Main;
