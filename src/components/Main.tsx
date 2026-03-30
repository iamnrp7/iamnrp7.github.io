import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLetterboxd } from '@fortawesome/free-brands-svg-icons';

import profile from "../assets/images/profile.jpg";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">

      <div className="about-section">

        <div className="image-wrapper">
          <img src={profile} alt="Nihar Prajapati" />
        </div>

        <div className="content">

          <div className="social_icons">

 <a href="https://github.com/iamnrp7" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>

            <a href="mailto:niharprajapati2005@gmail.com">
              <EmailIcon/>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <DescriptionIcon/>
            </a>

           

            <a href="https://letterboxd.com/iamnrp7" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLetterboxd}/>
            </a>

          </div>

          <h1>Nihar Prajapati</h1>

          <p>
            I am an undergraduate student in Electronics and Communication Engineering
            at Pandit Deendayal Energy University. My interests lie in wireless
            communication systems, semiconductor devices, and embedded hardware
            platforms, with a focus on combining theoretical analysis with practical
            engineering implementations.
          </p>

          <div className="mobile_social_icons">

            <a href="mailto:niharprajapati2005@gmail.com">
              <EmailIcon/>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <DescriptionIcon/>
            </a>

            <a href="https://github.com/iamnrp7" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>

            <a href="https://letterboxd.com/iamnrp7" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLetterboxd}/>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Main;