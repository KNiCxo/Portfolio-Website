import {useState} from 'react';
import {Link} from 'react-scroll';

import './header.css';

function Header() {
  // State variable for showing/hiding elements
  const [showDropdown, setShowDropdown] = useState(false);

  // Displays or hides dropdown menu
  function displayDropdown() {
    setShowDropdown(prevState => !prevState);
  }
  return (
    <>
      {/* Header */}
      <div className='header-container'>
        {/* Home Button */}
        <div className='home-button'>
          <img id='home-button-img' src="/Portfolio-Website/coding.png" alt=""/>
          <span id='home-button-name'>Nicholas Caliwag</span>
        </div>

        {/* Nav Links */}
        <div className='nav-links'>
          <Link to='about' spy={true} smooth={true} offset={0} duration={800} className='link'>About</Link>
          <Link to='projects' spy={true} smooth={true} offset={-100} duration={800} className='link'>Projects</Link>
          <a href="">Resume</a>

          <div id='github-link-container'>
            <a id='github-link' href="#">GitHub</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='menu-container' onClick={displayDropdown}>
            <img id='menu' src="/Portfolio-Website/menu.png" alt="website logo" />
        </div>

        {/* Mobile Dropdown */}
        {showDropdown &&       
        <div className='dropdown'>
          <ul>
            <li>
              <Link to='about' spy={true} smooth={true} offset={0} duration={800} className='link'>About</Link>
            </li>
            <li>
              <Link to='projects' spy={true} smooth={true} offset={-100} duration={800} className='link'>Projects</Link>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
          </ul>
        </div>}
      </div>
    </>
  );
}

export default Header;