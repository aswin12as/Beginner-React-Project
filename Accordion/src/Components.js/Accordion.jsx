import React, { useState } from 'react'
import "../style.css";

const Accordion = ({title,content}) => {
  const [isActive,setIsActive] = useState(false);

  return (
    <section className="accordion-card">
        <div className="header" onClick={() => setIsActive(!isActive)}>
             <span>{title}</span>
            <p className='icon'>{isActive ? '-' : '+'}</p>
        </div>
        { isActive && 
           (<div className='content'>
            <p className='card-info'>{content}</p> 
           </div>)
        }
    </section>

  );
}

export default Accordion;