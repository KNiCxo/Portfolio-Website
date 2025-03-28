import {useState} from 'react';

import Header from './header/Header.jsx';
import AboutMe from './about-me/AboutMe.jsx';
import Projects from './projects/Projects.jsx';

// Home page
function Home() {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </>
  );
}

export default Home;