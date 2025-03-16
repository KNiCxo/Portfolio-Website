import { useState, useRef, useEffect } from 'react';

import './image-slider.css';

// Changes current image displayed in container
function ImageSlider(props) {
  // Object array for all project images
  const projectImages = {
    project1: [
      '/Portfolio-Website/weather-app/1.png', 
      '/Portfolio-Website/weather-app/2.png', 
      '/Portfolio-Website/weather-app/3.png',
      '/Portfolio-Website/weather-app/4.png'
    ]
  };

  // Array for all project videos
  const projectVideos = [
    '/Portfolio-Website/weather-app/project1.mp4'
  ];

  // Tracks position in image array
  const [imgIndex, setImgIndex] = useState(0);

  // Reference to video player
  const videoRef = useRef(null);

  // Displays next image in array
  function showNextImg() {
    const arrayLength = projectImages[Object.keys(projectImages)[props.project]].length;

    // If within bounds, go to next image
    if (imgIndex < arrayLength) {
      setImgIndex(s => s + 1);
    }
  }

  // Displays previous image in array
  function showPrevImg() {
    const arrayLength = projectImages[Object.keys(projectImages)[props.project]].length;

    // If within bounds, go to previous image
    if (imgIndex > 0) {
      setImgIndex(s => s - 1);
    }

    if (videoRef.current.style.transition == 'none') {
      videoRef.current.style.transition = 'translate 300ms ease-in-out';
    }

    if (!videoRef.current.paused) {
      videoRef.current.pause();
    }
  }

  // Adjusts video to be in the proper position so that fullscreen works correctly
  const handleFullscreenChange = () => {
    // Fix video position if in fullscreen
    // Otherwise, set back to it's original position
    if (document.fullscreenElement === videoRef.current) {
      videoRef.current.style.transition = 'none'
      videoRef.current.style.translate = '0%';
    } else {
      videoRef.current.style.translate = `${-100 * imgIndex}%`;
    }
  };

  // Adds fullscreen event listener
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [imgIndex]);

  return(
    <>
      {/* Slider */}
      <div className='slider-container'>
        {/* Gallery Images */}
        <div className='gallery-container'>
          {projectImages[Object.keys(projectImages)[props.project]].map(url => {
            return <img key={url} src={url} className='modal-img' style={{translate: `${-100 * imgIndex}%`}}/>
          })}
          <video controls className='modal-video' ref={videoRef} src={projectVideos[props.project]} style={{translate: `${-100 * imgIndex}%`}}
          ></video>
        </div>

        {/* Arrow Buttons */}
        <img onClick={showPrevImg} className='arrow-button' src="/Portfolio-Website/arrow.png" alt="" style={{left: 10}}/>
        <img onClick={showNextImg} className='arrow-button right-arrow' src="/Portfolio-Website/arrow.png" alt="" style={{right: 10}}/>
      </div>
    </>
  );
}

export default ImageSlider;
