/*
  Omar Johnson
  Home Page Component
  1/4/25

  Defines the home page of the website, routed by React Router
*/
import * as Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function HomePage() {

  const PORTFOLIO_URL = "https://docs.google.com/document/d/19EbnN8Limoq_Ucs27Xi2iWOIxdepigd5cwDOoUBDqbc/edit?usp=sharing";

  return (
    <div className="container-fluid bg-slate-800 flex flex-col min-h-1/4 items-center justify-center text-center gap-y-12 p-20">

     <h1 className="text-7xl text-gray-100">Hi, I'm Omar.</h1>

     <h1 className="text-5xl text-gray-200">I'm a full-stack web developer.</h1>
     <p className="text-2xl text-gray-500">(and a video game dev in my free time)</p>

     <div className="buttons container-fluid flex flex-col w-1/2 md:w-1/3 lg:w-1/5 text-black items-center justify-between">
       <Buttons.PrimaryButton clickHandle={() => { window.location.href = "/assets/resume.pdf"; }} icon="fa-solid fa-download" text="GET MY RESUME" />
       <Buttons.PrimaryButton clickHandle={() => { window.location.href = PORTFOLIO_URL; }} icon="fa-solid fa-eye" text="VIEW MY WORK" />
     </div>
    </div>
  );
}

export default HomePage;
