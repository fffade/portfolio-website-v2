/*
  Omar Johnson
  About Page
  1/5/25

  Defines the about page where visitor can learn more about me
*/
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './Buttons';
import { useNavigate } from 'react-router';

// Skill displayed in skill box
function Skill(props) {
  return (
    // Skills extend to full width on mobile devices
    <div className="w-full md:w-min text-center text-3xl sm:text-2xl text-white p-4 pl-12 pr-12 text-nowrap rounded-xl bg-slate-700">
      <p>{props.name}</p>
    </div>
  );
}

// Experience listed in experience box
function Experience(props) {
  return (
    <div className="text-2xl text-slate-800 p-2 pl-6 pr-6 w-full rounded-xl bg-gray-300">
      <p className="">{props.title} | {props.where} <i className={"text-3xl float-right " + props.icon} /></p>
      <p className="text-md">{props.dateStart} {props.dateEnd.length > 0 ? '-> ' + props.dateEnd : ''}</p>
    </div>
  );
}


function About() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="container-fluid flex flex-col items-center justify-start h-5/6 gap-y-8 p-24">

        <img className="w-64 h-64 rounded-full shadow-lg" src="/assets/profile.jpg" />

        <div className="container w-3/4 md:w-1/2 lg:w-1/3">
          <p className="text-3xl md:text-2xl text-gray-200">Growing Up...</p>
          <p className="text-2xl md:text-xl text-white p-2">I had a passion for computer science as a young child. I would spend all my free time watching YouTube and studying various programming languages. I learnt to build my own websites and even learnt how to construct
          video games in the Unity engine. As I got into more difficult topics, I taught myself how to use web development frameworks and I built my own PC.</p>
        </div>
        <div className="container w-3/4 md:w-1/2 lg:w-1/3">
          <p className="text-3xl md:text-2xl text-gray-200">Now...</p>
          <p className="text-2xl md:text-xl text-white p-2">I completed my B.S. Software Development. I've learnt more about web development than I have ever before, working on many of my own personal projects with varying purposes. Every obstacle to me is a learning opportunity. I am eager to take on any challenging client problem, contribute my web development and problem solving skills, and develop my own innovative solutions.</p>
        </div>

        <HashLink className="m-16 text-6xl md:text-4xl text-white transition-all hover:scale-110 hover:text-gray-200" to="/about#skills-box"><i className="fa-solid fa-arrow-down" /></HashLink>

        { /* Skills and Experiences */ }

      </div>

      <div className="container-fluid flex flex-col bg-neutral-900 w-screen min-h-64 items-center justify-start gap-y-16 p-24">

        <div className="container w-3/4 md:w-1/2 lg:w-1/3">

          { /*  Send to PROJECTS */ }
          <Link to="/projects">
            <PrimaryButton clickHandle={() => {}} icon="fa-solid fa-book" text="VIEW MY PROJECTS" />
          </Link>

          <br />

          <p className="text-3xl text-amber-400">Skills</p>

          { /* Responsive grid of different skills */ }
          <div id="skills-box" className="container-fluid flex flex-row flex-wrap w-full max-w-full p-4 gap-4">
            <Skill name="JavaScript" />
            <Skill name="React" />
            <Skill name="Node.js" />
            <Skill name="Java" />
            <Skill name="Redux" />
            <Skill name="Bootstrap" />
            <Skill name="Tailwind.css" />
            <Skill name="SQL" />
            <Skill name="RESTful APIs" />
            <Skill name="Git" />
            <Skill name="C#" />
            <Skill name="C++" />
          </div>

        </div>

        <div className="container w-3/4 md:w-1/2 lg:w-1/3">

          <p className="text-3xl text-amber-500">Experience</p>

          { /* List experiences */ }
          <div id="experience-box" className="container-fluid flex flex-col w-full p-4 gap-4">
            <Experience title="Freelancer" where="Independent" dateStart="3/5/2023" dateEnd="" icon="fa-solid fa-laptop-code" />
            <Experience title="Assistant Manager" where="Chipotle Mexican Grill" dateStart="9/1/2020" dateEnd="" icon="fa-solid fa-pepper-hot" />
          </div>

        </div>

      </div>
    </React.Fragment>
  );
}

export default About;
