import React from 'react';
import './Banner.css';
import { ItemDescription } from './ItemDescription';

export default function Banner (props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <header className="banner" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="banner-overlay">

        <div className="banner-content">
          <h1 className="banner-title">{props.title}</h1>
          <p className="banner-description">{props.description}</p>
          <div className="banner-buttons">
            <button className="banner-button play">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M6 4l15 8-15 8z" />
              </svg>
              Play
            </button>
            <button className="banner-button info" onClick={() => setModalShow(true)}>
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12
                  12-5.373 12-12S18.627 0 12 0zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              More Info
            </button>
          </div>
        </div>
        <ItemDescription show={modalShow} onHide={() => setModalShow(false)} imgbig={props.imgbig} year={props.year} age={props.maturity} duration={props.length} additional={props.additional} description={props.descriptionModal}/>

        <div className="banner-age">{props.ageLimit}</div>
      </div>
    </header>
  );
};