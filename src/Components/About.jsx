import React from 'react';
import 'animate.css/animate.min.css'; // Import animate.css
import { Link, animateScroll as scroll } from 'react-scroll';
import useIntersectionObserver from './UseIntersectionObserver'; // Import the custom hook

const About = () => {
  const [introHeadingRef, isIntroHeadingVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introText1Ref, isIntroText1Visible] = useIntersectionObserver({ threshold: 0.1 });
  const [introText2Ref, isIntroText2Visible] = useIntersectionObserver({ threshold: 0.1 });
  const [introText3Ref, isIntroText3Visible] = useIntersectionObserver({ threshold: 0.1 });
  const [skillsHeadingRef, isSkillsHeadingVisible] = useIntersectionObserver({ threshold: 0.1 });

  const [sqlBarRef, isSqlBarVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cPlusBarRef, isCPlusBarVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cssBarRef, isCssBarVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [nodeJsBarRef, isNodeJsBarVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [mongoDBBarRef, isMongoDBBarVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [reactBarRef, isReactBarVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div id='about' className="aboutContainer">
      <p
        className={`aboutHeading animate__animated ${isIntroHeadingVisible ? 'animate__duration-3s animate__zoomIn' : 'hidden'}`}
      >About</p>
      <div className="innerContainer">
        <div className="aboutIntro">
          <p
            ref={introHeadingRef}
            className={`introHeading animate__animated ${isIntroHeadingVisible ? 'animate__duration-1s animate__slideInLeft' : 'hidden'}`}
          >
            Introduction
          </p>
          <p
            ref={introText1Ref}
            className={`introText animate__animated ${isIntroText1Visible ? 'animate__duration-2s animate__fadeInUpBig' : 'hidden'}`}
          >
            I'm a passionate Web Developer, specializing in building and managing modern
            web applications.
          </p>
          <br />
          <p
            ref={introText2Ref}
            className={`introText animate__animated ${isIntroText2Visible ? 'animate__duration-2s animate__fadeInUpBig' : 'hidden'}`}
          >
            I leverage the power of this JavaScript-based stack (MongoDB, Express, React, Node.js) to create user-centric
            interfaces that drive product success.
          </p>
          <br />
          <p
            ref={introText3Ref}
            className={`introText animate__animated ${isIntroText3Visible ? 'animate__duration-2s animate__fadeInUpBig' : 'hidden'}`}
          >
            Head over to the

            <Link
              style={{cursor:'pointer',color: "wheat", borderBottom:'2px solid white', margin:'5px'}}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
            >
              Projects
            </Link>

            section to explore my work.
            I'm always eager for new challenges and opportunities to grow my skills. If you have a project that aligns with my expertise, reach out!
            Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="aboutSkills">
          <p
            ref={skillsHeadingRef}
            className={`introHeading animate__animated ${isSkillsHeadingVisible ? 'animate__slideInRight animate__duration-2s' : 'hidden'}`}
          >
            Skills
          </p>

          <div className="container">
            <div className="skill">
              <div className="percentage">
                <p>SQL</p>
                <p>55%</p>
              </div>
              <div className="skill-bar">
                <div
                  ref={sqlBarRef}
                  className={`fill-bar ${isSqlBarVisible ? 'animate-fill' : ''}`}
                  style={{ '--fill-percentage': '55%' }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="percentage">
                <p>C++</p>
                <p>70%</p>
              </div>
              <div className="skill-bar">
                <div
                  ref={cPlusBarRef}
                  className={`fill-bar ${isCPlusBarVisible ? 'animate-fill' : ''}`}
                  style={{ '--fill-percentage': '70%' }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="percentage">
                <p>CSS</p>
                <p>75%</p>
              </div>
              <div className="skill-bar">
                <div
                  ref={cssBarRef}
                  className={`fill-bar ${isCssBarVisible ? 'animate-fill' : ''}`}
                  style={{ '--fill-percentage': '75%' }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="percentage">
                <p>Node Js</p>
                <p>80%</p>
              </div>
              <div className="skill-bar">
                <div
                  ref={nodeJsBarRef}
                  className={`fill-bar ${isNodeJsBarVisible ? 'animate-fill' : ''}`}
                  style={{ '--fill-percentage': '80%' }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="percentage">
                <p>MongoDB</p>
                <p>80%</p>
              </div>
              <div className="skill-bar">
                <div
                  ref={mongoDBBarRef}
                  className={`fill-bar ${isMongoDBBarVisible ? 'animate-fill' : ''}`}
                  style={{ '--fill-percentage': '80%' }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="percentage">
                <p>React Js</p>
                <p>85%</p>
              </div>
              <div className="skill-bar">
                <div
                  ref={reactBarRef}
                  className={`fill-bar ${isReactBarVisible ? 'animate-fill' : ''}`}
                  style={{ '--fill-percentage': '85%' }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
