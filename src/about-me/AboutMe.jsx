import './about-me.css';
import './about-me-res.css';

// About Me section
function AboutMe() {
  return(
    <>
      {/* About Me */}
      <h1 className='about-header'>Hey! I'm Nick.</h1>

      <div id='about'>
        {/* Header and Computer Gif */}

        <div className='computer-gif-div'>
          <img id='computer-gif' src="about-me/computer.gif" alt="picture of a laptop" />
        </div>

        {/* About Me Pt. 1 */}
        <div className='portfolio-section'>
          <div>
            <p>
              I'm a Full-Stack developer and graduate from SDSU with a Bachelor's in Computer Science. Currently, I am working in the education sector while I continue to perfect my skills as a developer.
            </p>
          </div>

          <div className='about-imgs'>
            <img id='sdsu' src="about-me/sdsu.jpg" alt="" />
            <img id='codeninjas' src="about-me/codeninjas.png" alt="code ninjas logo" />
          </div>
        </div>


        {/* About Me Pt. 2 */}
        <div className='portfolio-section'>
          <div>
            <p>
              Over the years, I have worked on a diverse range of projects and have gained experience with various technologies such as C#, Python, Java, Linux, and Unity.
            </p>
          </div>

          <div className='about-imgs'>
            <img className='prog-img' id="java" src="about-me/java.png" alt="java logo" />
            <img className='prog-img' id="python" src="about-me/python.png" alt="python logo" />
            <img className='prog-img' id="unity" src="about-me/unity.png" alt="unity logo" />
          </div>
        </div>

        {/* About Me Pt. 3 */}
        <div className='portfolio-section'>
          <div>
            <p>However, I have always had a particular interest in the field of web development and thus have the most experience creating practical and effective projects in this area.</p>
          </div>

          <div className='about-imgs'>
            <img className='prog-img' id='react' src="about-me/react.png" alt="react logo" />
            <img className='prog-img' id='nodejs' src="about-me/nodejs.svg" alt="nodejs logo" />
            <img className='prog-img' id='mysql' src="about-me/mysql.png" alt="unity logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;