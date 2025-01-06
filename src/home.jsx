import { useState } from 'react';

import './home.css';

// Home page
function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  function displayDropdown() {
    setShowDropdown(prevState => !prevState);
  }

  return (
    <>
      {/* Header */}
      <div className="header-container">
        {/* Home Button */}
        <div className='home-button'>
          <img id='home-button-img' src="/Portfolio-Website/coding.png" alt=""/>
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


        {/* Mobile Menu */}
        <div className='menu-container' onClick={displayDropdown}>
            <img id='menu' src="/Portfolio-Website/menu.png" alt="" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showDropdown &&       
        <div className='dropdown'>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </div>}
    </>
  );
}

export default Home