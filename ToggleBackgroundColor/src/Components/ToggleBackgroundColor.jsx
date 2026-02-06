import React, { useState } from 'react'
import "../style.css";
const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick =  () => {
    setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b': 'white');
    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
    setButtonStyle(buttonStyle === 'white' ? '#1b1b1b' : 'white');
  }

  return (
    <div className="body-section" style={{backgroundColor, color: textColor }}>
        <button onClick={handleClick}
        style={{
            backgroundColor,
            buttonStyle,
            color:textColor,
            border:`2px solid ${textColor}`,
        }}>
            {backgroundColor === 'white' ? "White Theme" : "Black Theme"}
        </button>

        <section className='content'>
            <h1>Welcome to the <br/>
            Real World..!</h1>
        </section>
    </div>
  )
}

export default ToggleBackgroundColor;