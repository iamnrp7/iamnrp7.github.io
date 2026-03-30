import React from "react";
import '../assets/styles/Talks.scss';

function Talks() {
  return (
    <div className="talks-container" id="talks">

      <h1>Talks & Presentations</h1>

      <div className="talk-video">

        <video controls width="600">
          <source src="/mathtalk.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>
          Hosted a Mathematics Talk at Pandit Deendayal Energy University
        </p>

      </div>

    </div>
  );
}

export default Talks;