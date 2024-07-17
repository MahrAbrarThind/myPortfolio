import React from 'react';
import 'animate.css/animate.min.css'; // Import animate.css
import useProjectVisibility from './UseProjectVisibility'; // Import the custom hook

const Projects = () => {
  const projects = [
    {
      title: 'Ride Reserve',
      side: 'left',
      img: 'rideReserver.png',
      description: "A comprehensive ticket booking app where admins can add buses, fares, and routes, while users can check fares, purchase tickets, and cancel bookings also.",
      date: " April 2023"
    },
    {
      title: 'Edu Spark',
      side: 'right',
      img: 'eduspark.png',
      description: "A dynamic courses platform where admins can add, update, and delete courses and videos, while users can purchase and watch course content.",
      date: " June 2024"
    },
    {
      title: 'Pen Pulse',
      side: 'left',
      img: 'blogging website.png',
      description: "A dynamic blogging platform where users can read, publish, delete, and discover a wide range of blogs, fostering a vibrant community of writers and readers.",
      date: "September 2023"
    },
    {
      title: 'Weather Website',
      side: 'right',
      img: 'weather website.png',
      description: "An intuitive weather platform where users can easily discover real-time weather updates for their city, ensuring they are always prepared for the day ahead.",
      date: "December 2023"
    },
  ];

  const [refs, visibility] = useProjectVisibility(projects.length + 1, { threshold: 0.5 });

  return (
    <>
      <div id="projects" className="projectsContainer">
        <h1 
          ref={el => (refs.current[projects.length] = el)}
          className={`projectsHeading animate__animated ${visibility[projects.length] ? 'animate__duration-3s animate__zoomIn' : ''}`}
          style={{ opacity: visibility[projects.length] ? 1 : 0 }}
        >
          Check Out My Work
        </h1>
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
      </div>
    </>
  );
};

export default Projects;
