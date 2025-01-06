/*
  Omar Johnson
  Header Component
  Implemented into every page in the website
*/

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-fluid flex flex-row text-2xl text-neutral-400 font-medium w-screen min-h-52 justify-center">
      <div className="w-1/4 h-min flex flex-row justify-evenly self-end">
        <a href="/" className="transition-colors hover:text-neutral-500">Home</a>
        <a href="#/about" className="transition-colors hover:text-neutral-500">About</a>
        <a href="/#contact" className="transition-colors hover:text-neutral-500">Contact</a>
      </div>
    </header>
  );
}

export default Header;
