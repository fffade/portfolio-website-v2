import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header className="container-fluid flex flex-row text-2xl text-neutral-400 font-medium w-screen min-h-52 justify-center">
      <div className="w-1/4 h-min flex flex-row justify-evenly self-end">
        <a href="/" className="transition-colors hover:text-neutral-500">Home</a>
        <a href="/about/" className="transition-colors hover:text-neutral-500">About</a>
        <a href="/contact/" className="transition-colors hover:text-neutral-500">Contact</a>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div className="container-fluid bg-slate-800 flex flex-col min-h-1/4 items-center justify-center gap-y-12 p-20">

     <p className="text-7xl text-gray-100">Hi, I'm Omar.</p>

     <p className="text-5xl text-gray-200">I'm a full-stack web developer.</p>
     <p className="text-2xl text-gray-500">(and a video game dev in my free time)</p>

     <div className="buttons container-fluid flex flex-col w-1/6 text-black items-center justify-between">
       <PrimaryButton clickHandle={() => { window.location.href = "/assets/resume.pdf"; }} icon="fa-solid fa-download" text="GET MY RESUME" />
       <PrimaryButton clickHandle={() => { window.location.href = "/about/"; }} icon="fa-solid fa-arrow-right" text="LEARN MORE" />
     </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="text-2xl text-white p-4 pl-12 pr-12 text-nowrap rounded-xl bg-slate-700">
      <p>{props.name}</p>
    </div>
  );
}

function Experience(props) {
  return (
    <div className="text-2xl text-slate-800 p-2 pl-6 pr-6 w-full rounded-xl bg-gray-300">
      <p className="">{props.title} | {props.where} <i className={"text-3xl float-right " + props.icon} /></p>
      <p className="text-md">{props.dateStart} {props.dateEnd.length > 0 ? '-> ' + props.dateEnd : ''}</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="fixed flex flex-row right-8 bottom-8 w-1/6 h-16 text-end text-gray-100 text-6xl float-right gap-x-12">
      <a href="#"><i className="fa-brands fa-instagram"></i></a>
      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
      <a href="#"><i className="fa-brands fa-github"></i></a>
    </div>
  );
}

function About() {
  return (
    <React.Fragment>
      <div className="container-fluid flex flex-col items-center justify-start h-5/6 gap-y-8 p-24">

        <img className="w-64 h-64 rounded-full shadow-lg" src="/assets/profile.jpg" />

        <div className="container w-1/3">
          <p className="text-2xl text-gray-200">Growing Up...</p>
          <p className="text-xl text-white">I had a passion for computer science as a young child. I would spend all my free time watching YouTube and studying various programming languages. I learnt to build my own websites and even learnt how to construct
          video games in the Unity engine. As I got into more difficult topics, I taught myself how to use web development frameworks and I built my own PC.</p>
        </div>
        <div className="container w-1/3">
          <p className="text-2xl text-gray-200">Now...</p>
          <p className="text-xl text-white">I completed my B.S. Software Development. I've learnt more about web development than I have ever before, working on many of my own personal projects with varying purposes. Every obstacle to me is a learning opportunity. I am eager to take on any challenging client problem, contribute my web development and problem solving skills, and develop my own innovative solutions.</p>
        </div>

        <a className="mt-24 text-4xl text-white transition-all hover:scale-110 hover:text-gray-200" href="#skills-box"><i className="fa-solid fa-arrow-down" /></a>

        { /* Skills and Experiences */ }

      </div>

      <div className="container-fluid flex flex-col bg-neutral-900 w-screen min-h-64 items-center justify-start gap-y-16 p-24">

        <div className="container w-1/3 max-w-1/3">

          <p className="text-3xl text-amber-400">Skills</p>

          { /* Responsive grid of different skills */ }
          <div id="skills-box" className="container-fluid flex flex-row flex-wrap w-full max-w-full mt-6 gap-4">
            <Skill name="JavaScript" />
            <Skill name="React" />
            <Skill name="Node.js" />
            <Skill name="Java" />
            <Skill name="Redux" />
            <Skill name="Bootstrap" />
            <Skill name="Tailwind" />
            <Skill name="SQL Databases" />
            <Skill name="REST APIs" />
          </div>

        </div>

        <div className="container w-1/3">

          <p className="text-3xl text-amber-500">Experience</p>

          <div id="experience-box" className="container-fluid flex flex-col w-full mt-6 gap-4">
            <Experience title="Freelancer" where="Independent" dateStart="3/5/2023" dateEnd="" icon="fa-solid fa-laptop-code" />
            <Experience title="Assistant Manager" where="Chipotle Mexican Grill" dateStart="9/1/2020" dateEnd="" icon="fa-solid fa-pepper-hot" />
          </div>

        </div>

      </div>
    </React.Fragment>
  );
}

function Contact() {
  return (
    <div className="container-fluid flex flex-col w-full min-h-1/4 items-center gap-y-8 p-24">

      <form className="container-fluid flex flex-col text-white text-2xl w-1/3 gap-y-8">

        <p className="text-4xl text-white">Get in Touch</p>

        <p className="text-xl text-gray-200">Have a lingering question? Need my help with something? Please leave your details and I'll respond as soon as I get the chance.</p>

        <div className="container flex flex-col text-white text-2xl w-full gap-y-4">
          <label for="name">Name
          <input id="name" className="block w-full p-4 rounded-xl text-black" placeholder="John Doe" /></label>

          <label for="name">Email
          <input id="name" className="block w-full p-4 rounded-xl text-black" placeholder="John Doe" /></label>

          <label for="name">Message
          <textarea id="name" className="block w-full p-4 rounded-xl text-black" placeholder="Comments or concerns..." /></label>

          <button type="submit" id="contact-submit" className="w-1/3 p-4 m-8 rounded-full self-center bg-slate-900 text-2xl text-amber-500 font-bold">Submit</button>
        </div>


      </form>

    </div>
  );
}

function PrimaryButton(props) {
  return (
     <button onClick={props.clickHandle || (() => {})} className="bg-neutral-300 block w-full h-16 m-4 text-2xl text-center transition-transform hover:scale-105"><i className={props.icon} /> {props.text}</button>
  );
}

function App() {
  return (
    <div className="container-fluid flex flex-col overflow-x-hidden min-w-screen min-h-screen bg-slate-800">

      <Header />

      <main className="container-fluid justify-center flex flex-col min-h-3/4">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        <Socials />

      </main>
    </div>
  );
}

export default App;
