/*
  Omar Johnson
  Buttons
  1/5/25

  Defines various button types that can appear in website
*/

import {Link} from "react-router-dom";

function PrimaryButton(props) {
  return (
     <button onClick={props.clickHandle || (() => {})} className="bg-neutral-300 block w-full h-16 mt-4 mb-4 text-2xl text-center transition-transform hover:scale-105"><i className={props.icon} /> {props.text}</button>
  );
}

function PrimaryLink(props) {
    return (
      <Link to={props.to} className="bg-neutral-300 flex w-full h-full min-h-16 mt-4 mb-4 text-2xl items-center justify-center transition-transform hover:scale-105"><i className={props.icon} />&nbsp;{props.text}</Link>
    );
}

function SubmitButton() {
  return (
    <button type="submit" className="w-1/3 p-4 mt-8 mb-8 rounded-full self-center bg-slate-700 text-2xl text-white font-bold transition-all hover:scale-105 hover:text-gray-300">SUBMIT</button>
  );
}

export { PrimaryButton, PrimaryLink, SubmitButton };
