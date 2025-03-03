import {useState} from 'react';
import {Link} from 'react-scroll';

import ProjectModal from './ProjectModal.jsx'

import './home.css';
import'./home-tablet.css';
import './home-desktop.css';

// Home page
function Home() {
  // State variables for showing/hiding elements
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Displays or hides dropdown menu
  function displayDropdown() {
    setShowDropdown(prevState => !prevState);
  }

  // Displays project modal
  function displayModal() {
    document.body.style.overflow = 'hidden';
    setShowModal(true);
  }

  // Hides project modal
  function hideModal() {
    document.body.style.overflow = 'auto';
    setShowModal(false);
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

      {/* About Me */}
      <h1 className='about-header'>Hey! I'm Nick.</h1>

      <div id='about'>
        {/* Header and Computer Gif */}

        <div className='computer-gif-div'>
          <img id='computer-gif' src="/Portfolio-Website/computer.gif" alt="picture of a laptop" />
        </div>

        {/* About Me Pt. 1 */}
        <div className='portfolio-section'>
          <div>
            <p>
              I'm a full-stack developer who graduated from San Diego State University and I am currently working in the education sector.
            </p>
          </div>

          <div className='about-imgs'>
            <img id='sdsu' src="/Portfolio-Website/sdsu.jpg" alt="" />
            <img id='codeninjas' src="/Portfolio-Website/codeninjas.png" alt="code ninjas logo" />
          </div>
        </div>


        {/* About Me Pt. 2 */}
        <div className='portfolio-section'>
          <div>
            <p>
              I have experience writing in many different languages such as Java, Python, and C# as well as experience in game development.
            </p>
          </div>

          <div className='about-imgs'>
            <img className='prog-img' id="java" src="/Portfolio-Website/java.png" alt="java logo" />
            <img className='prog-img' id="python" src="/Portfolio-Website/python.png" alt="python logo" />
            <img className='prog-img' id="unity" src="/Portfolio-Website/unity.png" alt="unity logo" />
          </div>
        </div>

        {/* About Me Pt. 3 */}
        <div className='portfolio-section'>
          <div>
            <p>However, I've always been more naturally drawn towards web development.</p>
          </div>

          <div className='about-imgs'>
            <img className='prog-img' id='react' src="/Portfolio-Website/react.png" alt="react logo" />
            <img className='prog-img' id='nodejs' src="/Portfolio-Website/nodejs.svg" alt="nodejs logo" />
            <img className='prog-img' id='mysql' src="/Portfolio-Website/mysql.png" alt="unity logo" />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id='projects'>
        <h1>Projects</h1>
        <div className='portfolio-section project-card' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='portfolio-section project-card' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='portfolio-section project-card' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>
      </div>

      <ProjectModal open={showModal} onClose={hideModal}></ProjectModal>
    </>
  );
}

export default Home