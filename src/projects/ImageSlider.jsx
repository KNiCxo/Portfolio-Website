import { useState, useRef, useEffect } from 'react';

import './image-slider.css';

// Changes current image displayed in container
function ImageSlider(props) {
  // Object array for all project images
  const projectImages = {
    project1:[
      '/weather-app/1.png', 
      '/weather-app/2.png', 
      '/weather-app/3.png',
      '/weather-app/4.png'
    ],
    project2:[
      '/lol-app/1.png',
      '/lol-app/2.png',
      '/lol-app/3.png',
      '/lol-app/4.png'
    ],
    project3:[
      '/contacts-app/1.png',
      '/contacts-app/2.png',
      '/contacts-app/3.png',
      '/contacts-app/4.png'
    ]
  };

  // Array for all project videos
  const projectVideos = [
    '/weather-app/project1.mp4',
    '/lol-app/project2.mp4',
    '/contacts-app/project3.mp4',
  ];

  // Tracks position in image array
  const [imgIndex, setImgIndex] = useState(0);

  // Reference to video player
  const videoRef = useRef(null);

  // Reference to left and right arrow
  const leftArrow = useRef(null);
  const rightArrow = useRef(null);

  // Displays next image in array
  function showNextImg() {
    const arrayLength = projectImages[Object.keys(projectImages)[props.project]].length;

    // If within bounds, go to next image
    if (imgIndex < arrayLength) {
      setImgIndex(s => s + 1);
    }

    // Show left arrow if not on the first image
    // or hide right arrow if at the end of gallery
    if (imgIndex == 0) {
      leftArrow.current.style.display = 'block';
    } else if (imgIndex == 3) {
      rightArrow.current.style.display = 'none';
    }
  }

  // Displays previous image in array
  function showPrevImg() {
    // If within bounds, go to previous image
    if (imgIndex > 0) {
      setImgIndex(s => s - 1);
    }

    // Hide left arrow if at the first image
    // or show right arrow if not at end of gallery
    if (imgIndex == 1) {
      leftArrow.current.style.display = 'none';
    } else if (imgIndex == 4) {
      rightArrow.current.style.display = 'block';
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
            return <img key={url} src={url} className='modal-img' style={{translate: `${-100.01 * imgIndex}%`}}/>
          })}
          <video controls className='modal-video' ref={videoRef} src={projectVideos[props.project]} style={{translate: `${-100 * imgIndex}%`}}
          ></video>
        </div>

        {/* Arrow Buttons */}
        <img onClick={showPrevImg} className='arrow-button' ref={leftArrow} src="arrow.png" alt="" style={{left: 10, display: 'none'}}/>
        <img onClick={showNextImg} className='arrow-button right-arrow' ref={rightArrow} src="arrow.png" alt="" style={{right: 10}}/>
      </div>
    </>
  );
}

export default ImageSlider;
