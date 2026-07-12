/*
  Omar Johnson
  Resume Download
  1/25/26

  Defines the resume download unit that shows a warning before letting them download
*/
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './Buttons';
import { useNavigate } from 'react-router';
import * as Buttons from "./Buttons";

// component that represents one topic in the layout
function Topic(props)
{
    return (
        <div className="grid grid-cols-[30%_70%]">
            <div className="flex justify-start">
                <p className="text-right text-3xl text-gray-300">{props.title}:</p>
            </div>
            <div className="flex justify-center">
                <p className="justify-center text-3xl text-gray-400 font-[monospace]">{props.value}</p>
            </div>
        </div>
    );
}

function ResumeDownload() {

  const navigate = useNavigate();

  const RESUME_DOWNLOAD = "/assets/resume_07-11-26.pdf";

  return (
    <React.Fragment>
      <div className="container-fluid flex flex-col items-center self-center justify-start bg-gray-900 w-1/2 h-6/6 gap-y-8 p-8 m-16 relative">

          <img src="/assets/classified.webp" alt="Classified Stamp" className="absolute h-auto w-[15%] left-16 top-16"/>

          <p className="text-4xl text-gray-200 font-extrabold">CASE FILE #067</p>

          <i className="fa-solid fa-file text-8xl text-amber-100" />

          <div className="grid grid-rows-4 gap-y-4 w-1/2 p-4">
              <Topic title="SUBJECT" value="Omar Johnson" />
              <Topic title="CODENAME" value="fffadedev" />
              <Topic title="OCCUPATION" value="Software Engineer" />
              <Topic title="LAST SEEN" value="???" />
          </div>

          <p className="block text-2xl text-center text-gray-300 w-2/3">As of recent investigations, subject was reported in December of 2025 to be working on a project known as
              &nbsp;<a href="https://store.steampowered.com/app/4194570/Gray_Space?utm_source=personal_website" className="text-2xl underline text-rose-600"><i className="fa-solid fa-arrow-right"/>GRAY SPACE</a>
          . We are unsure of the nature or operations of the named project.</p>

          <div className="flex flex-col gap-y-2 justify-center w-1/2 p-4">
              <p className="text-3xl text-center text-gray-200 font-bold">Resume Download</p>
              <p className="text-2xl text-center text-gray-300">Are you sure you wish to download this file?</p>
              <Buttons.PrimaryButton clickHandle={() => { window.location.href = RESUME_DOWNLOAD; }} icon="fa-solid fa-download" text="PROCEED TO RESUME" />
          </div>

      </div>
    </React.Fragment>
  );
}

export default ResumeDownload;
