/*
  Omar Johnson
  Header Component
  Implemented into every page in the website
*/

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-fluid flex flex-row text-3xl md:text-2xl text-neutral-400 font-medium min-w-screen min-h-52 justify-center">
      <nav className="w-full md:w-1/2 h-min flex flex-row justify-evenly self-end">
          <Link to="/" viewTransition className="transition-colors hover:text-neutral-500">Home</Link>
          <Link to="media" viewTransition className="transition-colors hover:text-neutral-500">Media</Link>
          <Link to="experience" viewTransition className="transition-colors hover:text-neutral-500">Experience</Link>
          <Link to="contact" viewTransition className="transition-colors hover:text-neutral-500">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
