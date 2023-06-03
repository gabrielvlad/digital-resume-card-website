import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import Hover from '../Hover/Hover';

function EducationItem({ name, description, courses, cardClass }) {
  const [hover, setHover] = useState(false);
  
  // Create a reference for the card element
  const cardRef = useRef(null);

  useEffect(() => {
    // Check if the card element is available (has been rendered)
    if (cardRef.current) {
      const card = cardRef.current;

      let isFlipped = false;
      const touchEndHandler = (e) => {
        e.preventDefault();

        if (!isFlipped) {
          card.style.transform = "rotateY(180deg)";
          isFlipped = true;
        } else {
          card.style.transform = "";
          isFlipped = false;
        }
      };

      // Event listener when the component mounts
      card.addEventListener('touchend', touchEndHandler);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        card.removeEventListener('touchend', touchEndHandler);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <Fade bottom>
      <Hover>
        <div className="card-flip">
          <div className="card-flip-inner" id="flip" ref={cardRef}>
            <div
              className="card-front"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <div className={`${cardClass}`}></div>
              <div style={{ position: 'absolute' }}>
                <Fade top when={hover} collapse>
                  <h2 style={{ padding: '1rem', fontWeight: 'bold' }}>
                    {name}
                  </h2>
                </Fade>
                <Fade bottom when={hover} collapse>
                  <div>
                    {description.split('\n').map((line, i) => (
                      <h5 key={i} style={{color: 'black' }}>
                        {line}
                      </h5>
                    ))}
                  </div>
                </Fade>
              </div>
            </div>
            <div className="card-back">
              <ul>
                {courses.map(course => {
                  return (
                    <li key={course} style={{ fontWeight: '600' }}>
                      {course}
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Hover>
    </Fade>
  );
}

export default EducationItem;
