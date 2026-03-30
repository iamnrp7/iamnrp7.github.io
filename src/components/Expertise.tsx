import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faSatelliteDish, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "MATLAB",
  "Python",
  "C",
  "C++",
  "Arduino",
  "R"
];

const labelsSecond = [
  "Silvaco TCAD",
  "MATLAB Simulink",
  "GNU Radio",
  "Synopsys Design Compiler",
  "ICC2",
  "PrimeTime"
];

const labelsThird = [
  "ESP32",
  "ESP8266",
  "ATmega2560",
  "Raspberry Pi",
  "LoRa",
  "SDR"
];

function Expertise() {

  return (
    <div className="container" id="expertise">
      <div className="skills-container">

        <h1>Expertise</h1>

        <div className="skills-grid">

          <div className="skill">
            <FontAwesomeIcon icon={faSatelliteDish} size="3x"/>
            <h3>Wireless Communication Systems</h3>

            <p>
              Research and simulation of THz and Free Space Optical (FSO)
              wireless systems including channel modeling and performance
              evaluation using BER, SNR and ergodic capacity metrics.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label}/>
              ))}
            </div>

          </div>

          <div className="skill">

            <FontAwesomeIcon icon={faMicrochip} size="3x"/>

            <h3>Semiconductor Device Simulation</h3>

            <p>
              Design and simulation of advanced semiconductor devices
              including Tunnel FET biosensors using Silvaco ATLAS with
              non-local BTBT modeling and high-k gate stack engineering.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label}/>
              ))}
            </div>

          </div>

          <div className="skill">

            <FontAwesomeIcon icon={faCode} size="3x"/>

            <h3>Embedded Systems & DSP</h3>

            <p>
              Development of embedded systems using microcontrollers
              and RF modules for communication, signal processing,
              AI integration and real-time computation.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Hardware:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label}/>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;