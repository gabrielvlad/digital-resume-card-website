import React from 'react';
import EducationItem from './EducationItem.jsx';
import { education } from './education.js';
import './Education.scss';

const Education = () => {
  return (
    <div className="education-container uk-flex uk-flex-center uk-flex-wrap" id="education">
      <h2 className='instructionEducationCards'>
        You can see more details on the back of the card if you wait a few seconds
      </h2>
      {education.map(card => {
        return (
          <EducationItem
            key={card.id}
            name={card.name}
            description={card.description}
            courses={card.courses}
            cardClass={card.cardClass}
          />
        );
      })}
    </div>
  );
};

export default Education;
