/*
  Omar Johnson
  Contact Page
  1/5/25

  Defines the navigation page that user can go to in order to submit a contact form (email)
*/
import { SubmitButton } from './Buttons';
import { useState } from 'react';

function Contact() {

    const [result, setResult] = useState("");

    // Submit function for the contact form uses the Web3 API to submit a form to my email address with security
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const API_KEY = "9dfbff52-aaa0-48c3-8ba8-187bc882b529";
        formData.append("access_key", API_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");

        // Clear out the form if the submission was successfully
        if(data.success) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            alert("Message sent!");
        }
    };

  return (
    <div className="container-fluid flex flex-col w-full min-h-1/4 items-center gap-y-8 p-24">

      <form onSubmit={onSubmit} className="container-fluid flex flex-col text-white text-2xl w-full md:w-1/2 lg:w-1/3 gap-y-8">

        <p className="text-4xl text-white">Get in Touch</p>

        <p className="text-2xl md:text-xl text-gray-200">Direct all professional inquiries to this form.</p>

        <div className="container flex flex-col text-white text-2xl w-full gap-y-4">
          <label for="name">Name
          <input id="name" name="name" type="text" className="block w-full p-4 rounded-xl text-black" placeholder="John Doe" required/></label>

          <label for="email">Email
          <input id="email" name="email" type="email" className="block w-full p-4 rounded-xl text-black" placeholder="John Doe" required/></label>

          <label for="message">Message
          <textarea id="message" name="message" className="block w-full p-4 rounded-xl text-black" placeholder="Comments or concerns..." minLength={20} maxLength={400} required/></label>

          <SubmitButton />
        </div>


      </form>

    </div>
  );
}

export default Contact;
