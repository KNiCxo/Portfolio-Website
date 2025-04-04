import {useState} from 'react';

import ProjectModal from './ProjectModal.jsx';

import './projects.css';

function Projects() {
  // State variable for showing/hiding elements
  const [showModal, setShowModal] = useState(false);

  // Project to be displayed in modal
  const [projectNumber, setProjectNumber] = useState(null);

  // Displays/hides project modal
  function displayModal(project) {
    // Lock scrolling
    if (document.body.style.overflow == 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    setProjectNumber(project);
    setShowModal(prevState => !prevState);
  }
  
  return(
    <>
      {/* Projects */}
      <h1 className='projects-header'>Projects</h1>
      
      <div id='projects'>
        <div className='project-card' id='weather' onClick={() => displayModal(0)}>
          <div className='project-container'>
            <img className='project-img' src="weather-app/1.png" alt="picture of weather app" />
            <span>Weather Forecast</span>
            <p>Application that allows users to view everyday weather data for any city in the world.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='project-card' id='league' onClick={() => displayModal(1)}>
          <div className='project-container'>
            <img className='project-img' src="lol-app/1.png" alt="picture of league app" />
            <span>LoL Match History</span>
            <p>Web page that lets users look at the match histories for players in League of Legends.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>

        <div className='project-card' id='contacts' onClick={() => displayModal(2)}>
          <div className='project-container'>
            <img className='project-img' src="contacts-app/1.png" alt="picture of contacts app" />
            <span>Contacts</span>
            <p>Created a fully functional contacts web page inspired by Apple's iOS Contacts app.</p>
            <button className='expand-button'>Click to Expand</button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <ProjectModal open={showModal} onClose={displayModal} project={projectNumber}></ProjectModal>
    </>
  )
}

export default Projects;