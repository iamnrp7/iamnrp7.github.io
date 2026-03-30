import React from "react";
import '../assets/styles/Project.scss';

function Project() {

  return (

    <div className="projects-container" id="projects">

      <h1>Research & Projects</h1>

      <div className="projects-grid">

        <div className="project">
          <h2>THz / FSO Wireless Communication Analysis</h2>
          <p>
            Simulation and performance evaluation of THz wireless links
            under α-μ fading with atmospheric attenuation and pointing errors.
            Key metrics analyzed include BER, SNR and ergodic capacity.
          </p>
        </div>

        <div className="project">
          <h2>TFET Based Biosensor</h2>
          <p>
            Designed a double metal gate Tunnel FET biosensor using
            Silvaco ATLAS with non-local BTBT modeling and dielectric
            cavity sensing region.
          </p>
        </div>

        <div className="project">
          <h2>Military Pager System (LoRa)</h2>
          <p>
            Developed a secure long-range communication system without
            GSM or internet connectivity using LoRa modulation.
          </p>
        </div>

        <div className="project">
          <h2>Real Time Fixed-Point FFT Engine</h2>
          <p>
            Implemented radix-2 FFT using Q-format arithmetic on
            ATmega2560 with timer-driven ADC sampling and UART output.
          </p>
        </div>

        <div className="project">
          <h2>RTL to GDSII – 8×1 Multiplexer</h2>
          <p>
            Complete digital IC flow including Verilog RTL design,
            synthesis using Synopsys Design Compiler and physical
            design in ICC2 with timing closure in PrimeTime.
          </p>
        </div>

        <div className="project">
          <h2>GroqShell on ESP32</h2>
          <p>
            Embedded AI shell integrating ESP32-S3 with LLaMA-3.1
            through Groq Cloud API with TLS secured communication.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;