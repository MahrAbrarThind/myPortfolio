import React, { useState, useEffect } from 'react';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';


const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > window.innerHeight) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= window.innerHeight) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <div className="wholeContainer">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <button className={`scrollToTopBtn ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  )
}

export default App;
