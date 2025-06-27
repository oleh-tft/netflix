import React from 'react';
import './Banner.css';

const Banner = ({ backgroundImage, title, description, ageLimit }) => {
  return (
    <header className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-overlay">

        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-description">{description}</p>
          <div className="banner-buttons">
            <button className="banner-button play">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M6 4l15 8-15 8z" />
              </svg>
              Play
            </button>
            <button className="banner-button info">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12
                  12-5.373 12-12S18.627 0 12 0zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              More Info
            </button>
          </div>
        </div>

        <div className="banner-age">{ageLimit}</div>
      </div>
    </header>
  );
};

export default Banner;
