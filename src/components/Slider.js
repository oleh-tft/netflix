import React, { useState } from 'react';
import { SliderItem } from './SliderItem';
import './Slider.css'

export function Slider (props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(props.items.length / itemsPerPage);

  const handleNext = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex >= props.items.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - itemsPerPage;
    if (prevIndex < 0) {
      const remainder = props.items.length % itemsPerPage;
      if (remainder === 0) {
        setCurrentIndex((totalPages - 1) * itemsPerPage);
      } else {
        setCurrentIndex(props.items.length - remainder);
      }
    } else {
      setCurrentIndex(prevIndex);
    }
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > 50) { // Minimum swipe distance
      if (distance > 0) {
        handleNext(); // Swipe left → next
      } else {
        handlePrev(); // Swipe right → prev
      }
    }
  };

  const translateX = `-${(currentIndex / itemsPerPage) * (100 / totalPages)}%`;

  return (
    <div className='slider-cont-wrap'>
      <div className='slider-head'>
        <div>{props.title}</div>
        <ul className='page-indicator'>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`indicator-li ${(index * itemsPerPage) === currentIndex ? 'active-page' : '' }`}></li>
          ))}
        </ul>
      </div>
      <div className="slider-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="slider-row">
          <button onClick={handlePrev} className='slider-button slider-button-prev'>
            <img src='down-arrow-l.svg' style={{opacity: `${hovered ? 1 : 0}`}}/>
          </button>

          <div className="slider-wrapper" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="slider-track" style={{transform: `translateX(${translateX})`, width: `${(props.items.length / itemsPerPage) * 100}%`}}>
              {props.items.map((item, index) => (
                <SliderItem key={index} img={item.src} genres={item.genres} maturity={'13+'} length={'1h 41m'} feature={'HD'}/>
              ))}
            </div>
          </div>

          <button onClick={handleNext} className='slider-button slider-button-next'>
            <img src='down-arrow-r.svg' style={{opacity: `${hovered ? 1 : 0}`}}/>
          </button>
        </div>
      </div>
    </div>
  );
};