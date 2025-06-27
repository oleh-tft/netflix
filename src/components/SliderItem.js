import React, { useState, useRef } from 'react';
import './SliderItem.css';

export function SliderItem(props) {
    const [expand, setExpand] = useState({class: ''});

    const enterTimeout = useRef(null);
    const leaveTimeout = useRef(null);

    function handleMouseEnter() {
        if (enterTimeout.current) clearTimeout(enterTimeout.current);
        enterTimeout.current = setTimeout(() => {
            setExpand({class: 'slider-item-preview--enter'});
        }, 500);
    };

    function handleMouseLeave () {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        leaveTimeout.current = setTimeout(() => {
            setExpand({class: 'slider-item-preview--leave'});
            setTimeout(() => {
                setExpand({class: ''});
            }, 200)
        }, 300);
    };

    function hovered() {
      return expand.class === 'slider-item-preview--enter';
    }

    return (
        <div className={`slider-item-wrapper`}>
          <div className={`slider-item-preview ${expand.class}`} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <img src={props.img}/>
            <div className='item-desc-container'>
              <div className='item-btn-container'>
                <div className='btn-left-container'>
                  <div className='slider-item-btn item-btn-play'><img src='play-icon.svg'/></div>
                  <div className='slider-item-btn item-btn-gray'><img src='plus-icon.svg'/></div>
                  <div className='slider-item-btn item-btn-gray'><img src='like-icon.svg'/></div>
                </div>
                <div className='slider-item-btn item-btn-gray'><img src='arrow-down-icon.svg'/></div>
              </div>
              <div className='item-info'>
                <div className='info-maturity'>{props.maturity}</div>
                <div className='info-length'>{props.length}</div>
                <div className='info-feature'>{props.feature}</div>
              </div>
              <div className='info-genres'>
                <div className='genre'>{props.genres[0]}</div>
                <div className='genre-separator'></div>
                <div className='genre'>{props.genres[1]}</div>
                <div className='genre-separator'></div>
                <div className='genre'>{props.genres[2]}</div>
              </div>
            </div>
          </div>
        </div>
        
    );
}