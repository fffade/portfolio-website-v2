/*
  Omar Johnson
  Contact Page
  1/5/25

  Defines the navigation page that user can go to in order to submit a contact form (email)
*/
import { SubmitButton } from './Buttons';


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

          <SubmitButton />
        </div>


      </form>

    </div>
  );
}

export default Contact;
