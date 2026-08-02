/*
  Omar Johnson
  Socials component
  1/5/25

  Defines the little box with social links for each page
*/
import  { SpotifyBadge, SpotifyPlaylist } from './Spotify';

function Socials() {
  return (
    <div className="fixed flex right-16 bottom-8 w-1/6 h-16 text-end text-gray-100 float-right text-5xl gap-x-4 md:text-6xl md:gap-x-8">
      <SpotifyBadge username="fffadedev" profileUrl="https://open.spotify.com/user/e9d7atm8cmdtygg21wjaqoi0c?si=a490c9dc46654541" />
      <a target="_blank" href="https://www.instagram.com/the_real_omar.j/"><i className="fa-brands fa-instagram"></i></a>
      <a target="_blank" href="https://www.linkedin.com/in/omarjohnson2004"><i className="fa-brands fa-linkedin"></i></a>
      <a target="_blank" href="https://github.com/fffade"><i className="fa-brands fa-github"></i></a>
    </div>
  );
}

export default Socials;
