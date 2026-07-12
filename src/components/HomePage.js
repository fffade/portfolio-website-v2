/*
  Omar Johnson
  Home Page Component
  1/4/25

  Defines the home page of the website, routed by React Router
*/
import * as Buttons from './Buttons';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';

function HomePage() {

  return (
    <div className="container-fluid bg-slate-800 flex flex-col min-h-1/4 items-center justify-center text-center gap-y-12 p-20">

     <h1 className="text-7xl text-gray-100">Hi, I'm Omar.</h1>

     <h1 className="text-5xl text-gray-200">I'm a software engineer.</h1>
     <p className="text-2xl text-gray-500">(and a creative game developer)</p>

     <div className="buttons container-fluid flex flex-col w-1/2 md:w-1/3 lg:w-1/5 text-black items-center justify-between">
         <Buttons.PrimaryLink to="resume" icon="fa-solid fa-download" text="DOWNLOAD MY RESUME" />
         <Buttons.PrimaryLink to="projects" icon="fa-solid fa-eye" text="VIEW MY PROJECTS" />
     </div>
    </div>
  );
}

export default HomePage;
