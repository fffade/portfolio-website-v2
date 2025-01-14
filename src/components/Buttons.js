/*
  Omar Johnson
  Buttons
  1/5/25

  Defines various button types that can appear in website
*/

function PrimaryButton(props) {
  return (
     <button onClick={props.clickHandle || (() => {})} className="bg-neutral-300 block w-full h-16 mt-4 mb-4 text-2xl text-center transition-transform hover:scale-105"><i className={props.icon} /> {props.text}</button>
  );
}

function SubmitButton() {
  return (
    <button type="submit" className="w-1/3 p-4 mt-8 mb-8 rounded-full self-center bg-slate-700 text-2xl text-white font-bold transition-all hover:scale-105 hover:text-gray-300">SUBMIT</button>
  );
}

export { PrimaryButton, SubmitButton };
