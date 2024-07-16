import React from 'react'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <>
      <div className="wholeContainer">
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
