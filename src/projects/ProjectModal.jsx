import ImageSlider from './ImageSlider.jsx';

import './project-modal.css';

// Modal for project content
function ProjectModal(props) {
  // Do not display if open is false
  if (!props.open) return null;

  return(
    <>
      {/* Overlay */}
      <div className='overlay'></div>

      {/* Modal */}
      <div className='project-modal'>
        <div className='modal-content'>
          {/* Modal Header */}
          <div className='modal-header'>
            <span>Weather App</span>
            <img onClick={props.onClose} src="/Portfolio-Website/close.png" alt="" />
          </div>

          {/* Modal Text & Images */}
          <ImageSlider project={0}></ImageSlider>
          <ul>
              <li>Simple application that allows users to view everyday weather data.</li>
              <li>Consists of a "main view" and "list view".</li>
              <li>Background changes based on city's time of day</li>
              <li>Built with React and uses the One Call 3.0 API from OpenWeather</li>
          </ul>

          {/* Souce Code Button */}
          <a href='https://github.com/KNiCxo/Weather-App'>
            <button className='source-code-button'>View Source Code</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectModal;