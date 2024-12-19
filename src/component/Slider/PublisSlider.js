import React, { useEffect, useState } from 'react';
import './PublicSlider.css';
import 'animate.css';
import sliderData from './PublicSliderData';

const PublicSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [animationClass2, setAnimationClass2] = useState('');

  useEffect(() => {
    setAnimationClass('animate__fadeInLeft');
    setAnimationClass2('animate__fadeInRight');

    const interval = setInterval(() => {
      setAnimationClass('');
      setAnimationClass2('');

      setTimeout(() => {
        setAnimationClass('animate__fadeInLeft');
        setAnimationClass2('animate__fadeInRight');
      }, 0); 

      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="carosel-sec">
      <div className="carosel-left">
        <span className={`animate__animated ${animationClass}`}>
          <img
            src={sliderData[currentIndex].image}
            alt="blog"
            title="blog"
          />
        </span>
      </div>
      <div className={`carosel-right animate__animated ${animationClass2}`}>
        <p className="categories">{sliderData[currentIndex].category}</p>
        <p className="sub-categories">{sliderData[currentIndex].sub_category}</p>
        <h1 className="title">{sliderData[currentIndex].title}</h1>
        <p className="subtitle">{sliderData[currentIndex].subtitle}</p>
        <button className="knowmore">LOAD MORE</button>
      </div>
    </div>
  );
};

export default PublicSlider;
