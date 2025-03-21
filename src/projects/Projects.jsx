import {useState} from 'react';

import ProjectModal from './ProjectModal.jsx';

import './projects.css';

function Projects() {
  // State variable for showing/hiding elements
  const [showModal, setShowModal] = useState(false);

  // Displays/hides project modal
  function displayModal() {
    document.body.style.overflow = document.body.style.overflow  ? 'auto' : 'hidden';
    setShowModal(prevState => !prevState);
  }
  
  return(
    <>
      {/* Projects */}
      <div id='projects'>
        <h1>Projects</h1>
        
        <div className='portfolio-section project-card' id='weather' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app/1.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='portfolio-section project-card' id='league' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app/1.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='portfolio-section project-card' id='contacts' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app/1.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <ProjectModal open={showModal} onClose={displayModal}></ProjectModal>
    </>
  )
}

export default Projects;