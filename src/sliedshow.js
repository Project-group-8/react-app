// Slideshow.js
import React, { useState, useEffect } from 'react';

 

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

 

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);

 

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval]);

 

  return (
<div className="slideshow">
<img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slideshow-image"
      />
</div>
  );
};

 

export default Slideshow;