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
      <div className='header-container'>
        {/* Home Button */}
        <div className='home-button'>
          <img id='home-button-img' src="/Portfolio-Website/coding.png" alt=""/>
          <span id='home-button-name'>Nicholas Caliwag</span>
        </div>

        {/* Nav Links */}
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
            <img id='menu' src="/Portfolio-Website/menu.png" alt="website logo" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showDropdown &&       
      <div className='dropdown'>
        <ul>
          <li><a href="#top">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
      </div>}

      {/* About Me */}
      <div className='about'>
        <h1>Hey! I'm Nick.</h1>
        <img id='computer-gif' src="/Portfolio-Website/computer.gif" alt="picture of a laptop" />
        <p>
          I'm a full-stack developer who graduated from San Diego State University and am currently working in the education sector.
        </p>

        <div className='about-imgs'>
          <img id='sdsu' src="/Portfolio-Website/sdsu.jpg" alt="" />
          <img id='codeninjas' src="/Portfolio-Website/codeninjas.png" alt="code ninjas logo" />
        </div>

        <p>
          I have experience writing in many different languages such as Python, Java, and C# as well as experience in game development.
        </p>

        <div className='about-imgs'>
          <img id='java' src="/Portfolio-Website/java.png" alt="java logo" />
          <img id='python' src="/Portfolio-Website/python.png" alt="python logo" />
        </div>

        <div className='about-imgs'>
          <img id='unity' src="/Portfolio-Website/unity.png" alt="unity logo" />
        </div>

        <p>However, I've always been more naturally drawn more towards web development. </p>
      </div>
    </>
  );
}

export default Home