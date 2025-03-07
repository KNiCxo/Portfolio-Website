import {useState} from 'react';

import './image-slider.css';

// Changes current image displayed in container
function ImageSlider(props) {
  // Object array for all project images and videos
  const projectGalleries = {
    project1: [
      '/Portfolio-Website/weather-app/1.png', 
      '/Portfolio-Website/weather-app/2.png', 
      '/Portfolio-Website/weather-app/3.png',
      '/Portfolio-Website/weather-app/4.png'
    ]
  };

  const [imgIndex, setImgIndex] = useState(0);

  function showNextImg() {
    const arrayLength = projectGalleries[Object.keys(projectGalleries)[props.project]].length;

    // If within bounds, go to next image
    if (imgIndex < arrayLength - 1) {
      setImgIndex(s => s + 1);
    }
  }

  function showPrevImg() {
    const arrayLength = projectGalleries[Object.keys(projectGalleries)[props.project]].length;

    // If within bounds, go to previous image
    if (imgIndex > 0) {
      setImgIndex(s => s - 1);
    }
  }

  return(
    <>
      {/* Slider */}
      <div className='slider-container'>
        {/* Gallery Images */}
        <div className='gallery-container'>
          {projectGalleries[Object.keys(projectGalleries)[props.project]].map(url => {
            return <img key={url}src={url} className='modal-img' style={{translate: `${-100 * imgIndex}%`}}/>
          })}
        </div>

        {/* Arrow Buttons */}
        <img onClick={showPrevImg} className='arrow-button' src="/Portfolio-Website/arrow.png" alt="" style={{left: 10}}/>
        <img onClick={showNextImg} className='arrow-button right-arrow' src="/Portfolio-Website/arrow.png" alt="" style={{right: 10}}/>
      </div>
    </>
  )
}

export default ImageSlider;
