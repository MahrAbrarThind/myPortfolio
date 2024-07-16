import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <div className="logoContainer">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <img src="logo1.png" alt="Logo" />
                    </Link>
                </div>
                <div className="linksContainer">
                    <Link
                        className='link'
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                    <Link
                        className='link'
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                    <Link
                        className='link'
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Projects
                    </Link>
                    <Link
                        className='link'
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
