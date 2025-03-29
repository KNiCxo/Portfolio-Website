import './dropdown.css';
import {Link} from 'react-scroll';

function Dropdown(props) {
  return(
    <>
      {/* Mobile Dropdown */}     
      <div className='dropdown' style={{ transform: props.open ? 'translateX(0%)' : 'translateX(100%)' }}>
        <img onClick={props.onClose} src="close.png" alt="" />
        <ul>
          <li>
            <Link to='about' spy={true} smooth={true} offset={-250} duration={800} className='link' onClick={props.onClose}>About</Link>
          </li>
          <li>
            <Link to='projects' spy={true} smooth={true} offset={-200} duration={800} className='link' onClick={props.onClose}>Projects</Link>
            <ul>
              <li><Link to='weather' spy={true} smooth={true} offset={-100} duration={800} className='link' onClick={props.onClose}>Weather Forecast</Link></li>
              <li><Link to='league' spy={true} smooth={true} offset={-100} duration={800} className='link' onClick={props.onClose}>LoL Match History</Link></li>
              <li><Link to='contacts' spy={true} smooth={true} offset={-100} duration={800} className='link' onClick={props.onClose}>Contacts</Link></li>
            </ul>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1-M0glsqyV2jgxC6ua5R4W8nHw2IFiZ7A/view?usp=drive_link" target='_blank' className='link resume-link'>Resume</a>
          </li>
          <li>
            <a href="https://github.com/KNiCxo" target='_blank' className='link resume-link'>GitHub</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;