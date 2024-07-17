import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Typewriter from './Typewriter.jsx';

const Home = () => {
  const helloWords = ['Hello!', 'Hola!', 'Hei!', 'Bonjour!', 'Hallo!', 'Ciao!'];
  const skillWords = ['A Frontend Developer', 'A Web Designer', 'A Web Developer', 'A CS Student'];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Abrar Hussain CV.pdf';
    link.download = 'Abrar_Hussain_CV.pdf';
    link.click();
  };

  const handleView = () => {
    window.open('Abrar Hussain CV.pdf', '_blank');
  };

  return (
    <>
      <div id='home' className="homeContainer">
        <div className="socialMediaBar">

          
        <a href="https://www.linkedin.com/in/abrar-hussain-aa3099293/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/MahrAbrarThind" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          
          <a href="https://www.youtube.com/@abrarhussain3150" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="mailto:abrar33020@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>

        </div>

        <div className="textContainer">
          <Typewriter words={helloWords} className="hello" />
          <p className='name'>I'm Abrar Hussain</p>
          <Typewriter words={skillWords} className="skill" />

          <div className="buttons">
            <button className="download-button" onClick={handleDownload}>
              <span>
                <i className="fa-solid fa-download"></i> CV
              </span>
            </button>

            <button className="eye-button" onClick={handleView}>
              <span>
                <i className="fa-solid fa-eye"></i> CV
              </span>
            </button>
          </div>
        </div>

        <img src="ai generated 1.png" alt="Image" />

        <div className="scroll-button">
          <Link to="about" spy={true} smooth={true} duration={500}>
            <span className="arrow arrow1"></span>
            <span className="arrow arrow2"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
