import React from 'react';
import Fade from 'react-reveal/Fade';

function ExperienceItem({
  name,
  description,
  company,
  link,
  timeline,
  picture,
}) {
  return (
    <div className="timeline">
      <div className="icon"></div>
      <div className="date-content">
        <div className="date-outer">
          <span className="date">
            <img
              src={picture}
              className='date-img'
            />
          </span>
        </div>
      </div>
      <div className="timeline-content">
        <Fade bottom>
          <h6 className="company">
            <a href={link} target="__blank" style={{ color: '#000000' }}>
              {company}
            </a>
          </h6>
          <h5 className="title">{name}</h5>
          <h6 className="time">{timeline}</h6>
          {description.map((desc, index) => (
            <p key={index} className="description">{desc}</p>
          ))}
        </Fade>
      </div>
    </div>
  );
}

export default ExperienceItem;
