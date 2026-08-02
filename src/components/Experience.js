/*
  Omar Johnson
  Experience Page
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
function ExperienceBox(props) {
  return (
    <div className="text-2xl text-black p-2 pl-6 pr-6 w-full rounded-xl bg-gray-50">
      <p className="">{props.title} | {props.where} <i className={"text-5xl md:text-3xl float-right " + props.icon} /></p>
      <p className="text-md">{props.dateStart} {props.dateEnd.length > 0 ? '-> ' + props.dateEnd : ''}</p>
    </div>
  );
}

// Certification listed in certification
function Certification(props) {
  return (
    <div className="text-2xl text-black p-2 pl-6 pr-6 w-full rounded-xl bg-gray-50">
      <p className="">{props.title} | {props.where} <i className={"text-5xl md:text-3xl float-right " + props.icon} /></p>
      <p className="text-md">{props.dateIssued}</p>
      <a className="text-sm" href={props.url} target="_blank"><i className="fa-solid fa-link" />&ensp;Open Certificate</a>
    </div>
  );
}


function Experience() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/*<div className="container-fluid flex flex-col items-center justify-start h-5/6 gap-y-8 p-24">*/}

      {/*  <img alt="Picture of Omar" className="w-64 h-64 rounded-full shadow-lg" src="/assets/profile.jpg" />*/}

      {/*  <div className="container w-full md:w-1/2 lg:w-1/3">*/}
      {/*    <p className="text-3xl md:text-2xl text-gray-200">Growing Up...</p>*/}
      {/*    <p className="text-2xl md:text-xl text-white p-2">I had a passion for computer science as a young child. I would spend all my free time watching YouTube tutorials and guides*/}
      {/*    and studying various programming languages, starting with Python. I learnt how to code my own websites in HTML/CSS and I even learnt how to construct*/}
      {/*    video games using a library like pygame or the engine Unity. As I got into more difficult topics, I taught myself how to use web development frameworks and eventually built my own PC.</p>*/}
      {/*  </div>*/}
      {/*  <div className="container w-full md:w-1/2 lg:w-1/3">*/}
      {/*    <p className="text-3xl md:text-2xl text-gray-200">Now...</p>*/}
      {/*    <p className="text-2xl md:text-xl text-white p-2">I'm a summa cum laude graduate with a B.S. in Software Dev.*/}
      {/*        I've learnt more about software than I have ever before, working on a variety of personal projects.*/}
      {/*        Every obstacle to me is an opportunity to learn, and I continue to present myself as a self-starter.*/}
      {/*        I am ager to take on any challenging client problem, contribute my analytical optimization mindset and problem solving skills, and develop my own innovative solutions.</p>*/}
      {/*  </div>*/}

      { /* Quick link to skills */ }
      {/*  <HashLink className="m-16 text-6xl md:text-4xl text-white transition-all hover:scale-110 hover:text-gray-200" to="/about#skills-box"><i className="fa-solid fa-arrow-down" /></HashLink>*/}

      {/*</div>*/}

      <div className="container-fluid flex h-16 bg-slate-800">
      </div>

      <div className="container-fluid flex flex-col bg-neutral-900 w-screen min-h-64 items-center justify-start gap-y-16 p-24">

        <div className="container w-full md:w-1/2 lg:w-1/3">

          { /*  Send to PROJECTS */ }
          <Link to="/projects">
            <PrimaryButton clickHandle={() => {}} icon="fa-solid fa-book" text="VIEW MY PROJECTS" />
          </Link>

          <br />

        </div>

        <div className="container w-full md:w-1/2 lg:w-1/3">

          <p className="text-3xl text-amber-500">Experience</p>

          { /* List experiences */ }
          <div id="experience-box" className="container-fluid flex flex-col w-full p-4 gap-4">
            <ExperienceBox title="Founder and Lead Developer" where="Evadi LLC" dateStart="05/01/2026" dateEnd="TODAY" icon="fa-solid fa-circle-half-stroke fa-flip-horizontal" />
            <ExperienceBox title="Assistant Manager" where="Chipotle Mexican Grill" dateStart="9/1/2020" dateEnd="01/15/2025" icon="fa-solid fa-pepper-hot" />
          </div>

        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">

          <p className="text-3xl text-amber-500">Certifications</p>

          { /* List certifications */ }
          <div id="certifications-box" className="container-fluid flex flex-col w-full p-4 gap-4">
            <Certification title="Responsive Web Design" where="FreeCodeCamp" dateIssued="03/2024" icon="fa-brands fa-html5" url="https://www.freecodecamp.org/certification/fffade/responsive-web-design"/>
            <Certification title="JavaScript Algorithms and Data Structures" where="FreeCodeCamp" dateIssued="03/2024" icon="fa-brands fa-js" url="https://www.freecodecamp.org/certification/fffade/javascript-algorithms-and-data-structures-v8"/>
          </div>

        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
            { /* Skills and Experiences */ }
            <p className="text-3xl text-amber-400">Skills</p>

            { /* Responsive grid of different skills */ }
            <div id="skills-box" className="container-fluid flex flex-row flex-wrap w-full max-w-full p-4 gap-4">
                <Skill name="HTML/CSS" />
                <Skill name="JavaScript" />
                <Skill name="React" />
                <Skill name="NodeJS" />
                <Skill name="Java" />
                <Skill name="Tailwind.css" />
                <Skill name="SQL" />
                <Skill name="RESTful APIs" />
                <Skill name="Git" />
                <Skill name="C#" />
                <Skill name="Unity Game Engine" />
                <Skill name="C++" />
            </div>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Experience;
