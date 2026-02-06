import React from 'react'
import { useState } from 'react';
import "../style.css";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"Oscar Wilde"
    },
    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"Albert Einstein"
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        author:"Marcus Tullius Cicero"
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"Robert Frost"
    },
    {
        quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"Oscar Wilde"
    },
    {
        quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:"Andre Gide"
    },
  ]

  const handlePrevClick = () => {
    setCurrentIndex(
        (currentIndex + testimonials.length - 1) % testimonials.length
    );    
  }
  const handleNextClick = () => {
    setCurrentIndex(
        (currentIndex +  1) % testimonials.length
    );    
  }

  return (
    <div className="container">
        <div className="quote-section">
            {testimonials[currentIndex].quote}
        </div>
        <div className="author-section">
            - {testimonials[currentIndex].author}
        </div>
        <div className="btns-container">
            <button onClick={() => handlePrevClick()}>Prev</button>
            <button onClick={() => handleNextClick()}>Next</button>
        </div>
    </div>
  )
}

export default Testimonials;