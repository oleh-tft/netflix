import React, { useState } from 'react';
import { SliderItem } from './SliderItem';
import './Slider.css'
import { useWindowDimensions } from './useWindowDimensions';

export function Slider (props) {
  const sizes = [
    { width: 0, items: 2 },
    { width: 500, items: 3 },
    { width: 800, items: 4 },
    { width: 1100, items: 5 },
    { width: 1400, items: 6 },
  ];

  const { height, width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const itemsPerPage = sizes.filter(size => width >= size.width).pop()?.items || 2;
  const totalPages = Math.ceil(props.items.length / itemsPerPage);
  // console.log(`w: ${width}   h: ${height}`)

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

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  function hideAdditional() {
    return totalPages === 1 ? 'd-none' : '';
  }

  const translateX = `-${(currentIndex / itemsPerPage) * (100 / totalPages)}%`;

  return (
    <div className='slider-cont-wrap' style={{zIndex: `${hovered ? 50 : 6}`}}>
      <div className='slider-head'>
        <div>{props.title}</div>
        <ul className={`page-indicator ${hideAdditional()}`}>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`indicator-li ${(index * itemsPerPage) === currentIndex ? 'active-page' : '' }`}></li>
          ))}
        </ul>
      </div>
      <div className={`slider-container ${totalPages === 1 ? 'one-page-padding' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="slider-row">
          <button onClick={handlePrev} className={`slider-button slider-button-prev ${hideAdditional()}`}>
            <img src='down-arrow-l.svg' style={{opacity: `${hovered ? 1 : 0}`}}/>
          </button>

          <div className="slider-wrapper" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="slider-track" style={{transform: `translateX(${translateX})`, width: `${(props.items.length / itemsPerPage) * 100}%`}}>
              {props.items.map((item, index) => (
                <SliderItem key={index} img={item.imgsmall} imgbig={item.imgbig} genres={["Action", "Adventure", "Sci-Fi"]} year="2013" maturity="16+" length="5 Seasons" additional="violence, language, substances" description={item.description} feature={'HD'}/>
              ))}
            </div>
          </div>

          <button onClick={handleNext} className={`slider-button slider-button-next ${hideAdditional()}`}>
            <img src='down-arrow-r.svg' style={{opacity: `${hovered ? 1 : 0}`}}/>
          </button>
        </div>
      </div>
    </div>
  );
};