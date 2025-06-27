import React, { useState, useRef } from 'react';
import './SliderItem.css';
import { ItemDescription } from './ItemDescription';

export function SliderItem(props) {
    const [hovered, setHovered] = useState(false);
    const [expand, setExpand] = useState({class: ''});
    const [origin, setOrigin] = useState('center center');
    const [modalShow, setModalShow] = React.useState(false);

    const enterTimeout = useRef(null);
    const leaveTimeout = useRef(null);

    function handleMouseEnter(e) {
        const rect = e.currentTarget.getBoundingClientRect();

        let originX = 'center';
        let originY = 'center';

        if (rect.left < 200) {
          originX = 'left';
        } else if (window.innerWidth - rect.right < 200) {
          originX = 'right';
        }

        if (rect.top < 300) {
          originY = 'top';
        } else if (window.innerHeight - rect.bottom < 300) {
          originY = 'bottom';
        }
        setOrigin(`${originX} ${originY}`);

        if (enterTimeout.current) clearTimeout(enterTimeout.current);
        enterTimeout.current = setTimeout(() => {
            setHovered(true);
            setExpand({class: 'slider-item-preview--enter'});
        }, 500);
    };

    function handleMouseLeave () {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);

        leaveTimeout.current = setTimeout(() => {
            setExpand({class: 'slider-item-preview--leave'});
            setTimeout(() => {
                setExpand({class: ''});
                setHovered(false);
            }, 200)
        }, 300);
    };

    return (
        <div className={`slider-item-wrapper`} style={{zIndex: `${hovered ? 50 : 6}`}}>
          <div style={{transformOrigin: `${origin}`}} className={`slider-item-preview ${expand.class}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={props.img}/>
            <div className='item-desc-container'>
              <div className='item-btn-container'>
                <div className='btn-left-container'>
                  <div className='slider-item-btn item-btn-play'><img src='play-icon.svg'/></div>
                  <div className='slider-item-btn item-btn-gray'><img src='plus-icon.svg'/></div>
                  <div className='slider-item-btn item-btn-gray'><img src='like-icon.svg'/></div>
                </div>
                <div className='slider-item-btn item-btn-gray' onClick={() => setModalShow(true)}><img src='arrow-down-icon.svg'/></div>
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
          <ItemDescription show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
}