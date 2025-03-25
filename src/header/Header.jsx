import {useState, useRef} from 'react';
import {Link} from 'react-scroll';

import Dropdown from './Dropdown.jsx';

import './header.css';

function Header() {
  // State variable for showing/hiding elements
  const [showDropdown, setShowDropdown] = useState(false);

  // Reference to overlay
  const overlayRef = useRef(null);

  // Displays or hides dropdown menu
  function displayDropdown() {
    // Toggle overlay
    if (overlayRef.current.style.display === 'block') {
      overlayRef.current.style.display = 'none';
    } else {
      overlayRef.current.style.display = 'block';
    }

    setShowDropdown(prevState => !prevState);
  }
  
  return (
    <>
      {/* Overlay */}
      <div ref={overlayRef} className='dropdown-overlay'></div>

      {/* Header */}
      <div className='header-container'>
        {/* Home Button */}
        <div className='home-button'>
          <img id='home-button-img' src="/Portfolio-Website/coding.png" alt=""/>
          <span id='home-button-name'>Nicholas Caliwag</span>
        </div>

        {/* Nav Links */}
        <div className='nav-links'>
          <Link to='about' spy={true} smooth={true} offset={-300} duration={800} className='link'>About</Link>
          <Link to='projects' spy={true} smooth={true} offset={-270} duration={800} className='link'>Projects</Link>
          <a href="">Resume</a>

          <div id='github-link-container'>
            <a id='github-link' href="#">GitHub</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='menu-container' onClick={displayDropdown}>
            <img id='menu' src="/Portfolio-Website/menu.png" alt="website logo" />
        </div>

        {/* Dropdown */}
        <Dropdown open={showDropdown} onClose={displayDropdown}></Dropdown>
      </div>
    </>
  );
}

export default Header;