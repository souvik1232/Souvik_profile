import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/intro.css";

export default function Socialicons({ white }) {
  return (
    <div className='flex gap-6 py-5'>
      <a href='https://github.com/souvik1232' target='_blank'>
        <FontAwesomeIcon
          icon={faGithub}
          size='2xs'
          className='profileIconsStyle hover:text-sky-600 cursor-pointer'
          style={{ color: `${white}` }}
        />
      </a>
      <a
        href='https://www.linkedin.com/in/souvik-mandal-8051041b8/'
        target='_blank'>
        <FontAwesomeIcon
          icon={faLinkedin}
          size='2xs'
          className='profileIconsStyle hover:text-sky-600 cursor-pointer'
          style={{ color: `${white}` }}
        />
      </a>
    </div>
  );
}
