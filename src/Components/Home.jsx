import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import Typewriter from './Typewriter.jsx';


const Home = () => {
  const helloWrods = [`Hello!`, `Hola!`, `Hei!`, `Bonjour!`, `Hallo!`, `Ciao!`];
  const skillWords = ["A Frontend Developer", "A Web Designer", "A Web Developer", "A CS Student"]

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
        <div className="textContainer">
          <Typewriter words={helloWrods} className="hello" />
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
            {/* <span className="arrow arrow3"></span> */}
          </Link>
        </div>


      </div>

    </>
  );
};

export default Home;
