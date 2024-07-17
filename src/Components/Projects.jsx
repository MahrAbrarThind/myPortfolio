import React from 'react';
import 'animate.css/animate.min.css'; // Import animate.css
import useProjectVisibility from './UseProjectVisibility'; // Import the custom hook

const Projects = () => {
  const projects = [
    {
      title: 'Ride Reserve',
      side: 'left',
      img: 'eduspark.png',
      description: "React Js I Will Maintain Existing React Systems, Including Fixing Bugs, Design And Develop New Custom Components To Meet Project Requirements,Install And Configure Server Environments For React Deployments.",
      date: "12 July 2023"
    },
    {
      title: 'Edu Spark',
      side: 'right',
      img: 'eduspark.png',
      description: "React Js I Will Maintain Existing React Systems, Including Fixing Bugs, Design And Develop New Custom Components To Meet Project Requirements,Install And Configure Server Environments For React Deployments.",
      date: "12 July 2023"
    },
    {
      title: 'Pen Pulse',
      side: 'left',
      img: 'eduspark.png',
      description: "React Js I Will Maintain Existing React Systems, Including Fixing Bugs, Design And Develop New Custom Components To Meet Project Requirements,Install And Configure Server Environments For React Deployments.",
      date: "12 July 2023"
    },
  ];

  const [refs, visibility] = useProjectVisibility(projects.length, { threshold: 1 });

  return (
    <>
      <h1 className='projectsHeading'>Check Out My Work</h1>

      <div className="timeline-container">
        {projects.map((project, index) => {
          const animationClass = project.side === 'left' ? 'animate__slideInLeft' : 'animate__slideInRight';
          const isVisible = visibility[index];

          return (
            <div
              key={index}
              ref={el => (refs.current[index] = el)}
              className={`timeline-card ${project.side} animate__animated ${isVisible ? animationClass : ''}`}
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              <div className="timeline-content">
                <div className="card-front">
                  <img src={project.img} alt={project.title} />
                  <h3>{project.title}</h3>
                </div>
                <div className="card-back">
                  <p>{project.description}</p>
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="timeline-line"></div>
      </div>
    </>
  );
};

export default Projects;
