import ImageSlider from './ImageSlider.jsx';

import './project-modal.css';

// Modal for project content
function ProjectModal(props) {
  // Array that stores the titles of each project
  const projectTitles = [
    'Weather Forecast',
    'LoL Match History',
    'Contacts'
  ]

  const repositoryLinks = [
    'https://github.com/KNiCxo/Weather-App',
    'https://github.com/KNiCxo/Match-History-App',
    'https://github.com/KNiCxo/Contacts-App'
  ]

  // Do not display if open is false
  if (!props.open) return null;

  function displayUL(project) {
    if (project == 0) {
      return(
        <>
          <ul>
            <li>Simple application that allows users to view everyday weather data.</li>
            <li>Consists of a "main view" and "list view".</li>
            <li>Background changes based on city's time of day</li>
            <li>Built with React and uses the One Call 3.0 API from OpenWeather</li>
          </ul>
        </>
      );
    } else if (project == 1) {
      return(
        <>
          <ul>
            <li>Allows users to view the match history data of any League of Legends player</li>
            <li>Gives detailed statistics for each match</li>
            <li>Handles incorrect usernames</li>
            <li>Created with React and uses the Riot Games API with a NodeJS proxy server</li>
          </ul>
        </>
      );
    } else if (project == 2) {
      return(
        <>
          <ul>
            <li>App that lets users add/remove/edit contacts and create different contacts lists</li>
            <li>Includes search bar for large contact lists</li>
            <li>Attempted recreation of iOS Contacts app</li>
            <li>Created with React and a NodeJS/MySQL backend</li>
          </ul>
        </>
      );
    }
  }

  return(
    <>
      {/* Modal */}
      <div className='modal-container'>
        <div className='modal-overlay'>
          <div className='project-modal'>
            <div className='modal-content'>
              {/* Modal Header */}
              <div className='modal-header'>
                <span>{projectTitles[props.project]}</span>
                <img onClick={props.onClose} src="close.png" alt="" />
              </div>

              {/* Modal Text & Images */}
              <ImageSlider project={props.project}></ImageSlider>

              {displayUL(props.project)}

              {/* Souce Code Button */}
              <a href={repositoryLinks[props.project]} target='_blank'>
                <button className='source-code-button'>View Source Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectModal;