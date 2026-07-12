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


// component to showcase one project
function Project(props)
{
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-full min-h-64 border-b-2 mt-8 p-2">

      { /* A project component is split into three sections, the info, the image, and then the links/misc. */ }
      <span className="flex flex-col gap-y-2">
        <h1 className="text-4xl text-gray-100">{props.name}</h1>
        <p className="text-2xl text-gray-300">{props.tagline}</p>
        <p className="text-xl text-gray-400">{props.size > 1 ? `Team of ${props.size}` : 'Independent'}</p>
        <p className={`text-xl ${props.statusColour || 'text-gray-300'}`}>{props.statusText}</p>
      </span>

      <span className="row-span-2 flex flex-row justify-center items-center">
        <img className="h-max max-w-[90%] text-white rounded-xl shadow-slate-800 shadow-lg" src={props.img} alt={`Project ${props.name}`} />
      </span>

      <span className="self-end">
          {props.steam ?
              (<a className="text-xl text-neutral-400 underline" target="_blank" href={props.steam}><i className="fa-brands fa-steam" />View on Steam</a>) :
              ''}<br/>
        <a className="text-xl text-neutral-400 underline" target="_blank" href={props.github}><i className="fa-brands fa-github" />View on GitHub</a>
        <p className="text-xl text-neutral-500">{props.keywords.join(', ')}</p>
      </span>

    </div>
  );
}


function Projects() {

  const navigate = useNavigate();

  const FooterWithRouter = withRouter(Footer);

  return (
    <div className="container-fluid flex flex-col overflow-x-hidden w-full min-h-screen bg-slate-900">

        <main className="container-fluid self-center flex flex-col w-1/3 min-h-3/4 m-8 ">

          <PrimaryButton clickHandle={() => { navigate('/'); }} icon="fa-solid fa-arrow-up" text="GO BACK" />

          { /* List of all projects */ }
          <div className="container-fluid flex flex-col w-full p-4">

            <Project name="Gray Space" tagline="A multiplayer roguelike horror experience where you and your friends attempt to preserve your sanity in a decaying lab while extracting mankind's last hope."
                   size={1}
                   img="/assets/projects/gray_space.png"
                   keywords={['Unity', 'Multiplayer', 'Steam', 'C#', 'Shader Graph', 'Networking', 'Photon']}
                   steam="https://store.steampowered.com/app/4194570/Gray_Space?utm_source=personal_website"
                   github="https://github.com/fffade/clowns"
                   statusText="In Development"
                   statusColour="text-orange-300"/>

            <Project name="Moffat Bay Lodge" tagline="A resort website with booking and customer reservations."
              size={2}
              img="/assets/projects/bay_lodge.jpg"
              keywords={['Java', 'JSP', 'Web Development', 'User Experience', 'SQL']}
              github="https://github.com/fffade/MoffatBay"
              statusText="Completed Aug 2024"
              statusColour="text-green-400"/>

          </div>

        </main>

        <Socials />

        <FooterWithRouter />

    </div>
  );
}

export default Projects;
