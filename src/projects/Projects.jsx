import {useState} from 'react';

import ProjectModal from './ProjectModal.jsx';

import './projects.css';

function Projects() {
  // State variable for showing/hiding elements
  const [showModal, setShowModal] = useState(false);

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
  
  return(
    <>
      {/* Projects */}
      <div id='projects'>
        <h1>Projects</h1>
        
        <div className='portfolio-section project-card' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app/1.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='portfolio-section project-card' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app/1.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='portfolio-section project-card' onClick={displayModal}>
          <div className='project-container'>
            <img className='project-img' src="/Portfolio-Website/weather-app/1.png" alt="picture of weather app" />
            <span>Weather App</span>
            <p>Simple application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>
      </div>

      <ProjectModal open={showModal} onClose={hideModal}></ProjectModal>
    </>
  )
}

export default Projects;