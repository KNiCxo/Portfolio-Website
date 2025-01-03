import { useState } from 'react';

import './home.css';

// Home page
function Home() {
  return (
    <>
      <div className="top-nav">
        <div className='home-button'>
        <img id='home-button-img' src="/Portfolio-Website/coding.png" alt="" />
          <span id='home-button-name'>Nicholas Caliwag</span>
        </div>

        <div className='nav-links'>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Resume</a>
          
          <div id='github-link-container'>
            <a id='github-link' href="#">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
