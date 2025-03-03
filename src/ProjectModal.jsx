import './project-modal.css';

// Modal for project content
function ProjectModal(props) {
  // Do not display if open is false
  if (!props.open) return null;

  document.body.style.overflow = 'hidden';
  
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
          <img className='modal-img' src="/Portfolio-Website/weather-app.png" alt="" />
          <ul>
              <li>Simple application that allows users to view everyday weather data.</li>
              <li>Consists of a "main view" and "list view".</li>
              <li>Built with React and uses the One Call 3.0 API from OpenWeather</li>
          </ul>

          {/* Souce Code Button */}
          <button className='source-code-button'>View Source Code</button>
        </div>
      </div>
    </>
  )
}

export default ProjectModal;