import {useState} from 'react';

import Header from './header/Header.jsx';
import AboutMe from './about-me/AboutMe.jsx';
import Projects from './projects/Projects.jsx';

import './home.css';

// Home page
function Home() {
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

  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </>
  );
}

export default Home;