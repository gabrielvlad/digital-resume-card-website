/* eslint-disable max-len */
// cant use modules for this component
import React from 'react';
import './AboutMe.css';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <div
      className="aboutme-main
      uk-flex
      uk-flex-center
      uk-flex-column
      uk-flex-middle"
      id='aboutme'
    >
      <div className="wrapper">
        <div className="box a">
          <Fade top>
            <h2 className="about-h2">Hobbies</h2>
            Reading, home made hardware projects (like my raspberry pi cluster xd), cooking. <br />
            Discussing bussiness ideas, historical events or history in general, productivity systems.
          </Fade>
        </div>
        <div className="box b">
          <Fade top>
            <h2 className="about-h2">Dream Job</h2>
            Product owner, developer/software engineer, lately I have been interested alot in automation,
            machine learning and AI<br /> <br />
            <h2 className="about-h2">Dream City</h2>
            Aarhus and Copenhagen
          </Fade>
        </div>
        <div className="box c">
          <Fade bottom>
            <h2 className="about-h2">Role Models</h2>
            Jordan Peterson, Elon Musk, Steve Jobs
          </Fade>
        </div>
        <div className="box d">
          <Fade bottom>
            <h2 className="about-h2">Music</h2>
            I like to liseen to Eminem.
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
