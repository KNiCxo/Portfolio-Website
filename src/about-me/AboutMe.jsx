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
              I'm a full-stack developer who graduated from San Diego State University and I am currently working in the education sector.
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
              I have experience writing in many different languages such as Java, Python, and C# as well as experience in game development.
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
            <p>However, I've always been more naturally drawn towards web development.</p>
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