import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {

  return (

    <div id="history">

      <div className="items-container">

        <h1>Education</h1>

        <VerticalTimeline>

          <VerticalTimelineElement
            date="2023 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>B.Tech Electronics & Communication Engineering</h3>
            <h4>Pandit Deendayal Energy University (PDEU)</h4>
            <p>CGPA: 9.19</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2021 – 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>Higher Secondary Certificate (Class 12)</h3>
            <h4>Green Valley School, CBSE</h4>
            <p>Score: 84.6%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2010 – 2021"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>Secondary School Certificate (Class 10)</h3>
            <h4>Shree Swaminarayan Public School, CBSE</h4>
            <p>Score: 89%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>NPTEL Certification</h3>
            <h4>A Primer to Mathematical Optimization – IIT BHU</h4>
            <p>Top 21 Certified</p>
          </VerticalTimelineElement>

        </VerticalTimeline>

      </div>

    </div>

  );
}

export default Timeline;