import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' className='desktopMenuListItem' to="intro" smooth={true} duration={500} spy={true} offset={-100}>Home</Link>
                <Link activeClass='active' className='desktopMenuListItem' to="about" smooth={true} duration={500} spy={true} offset={-35}>About</Link>
                <Link activeClass='active' className='desktopMenuListItem' to="skills" smooth={true} duration={500} spy={true} offset={-35}>Skills</Link>
                <Link activeClass='active' className='desktopMenuListItem' to="work" smooth={true} duration={500} spy={true} offset={-35}>Work</Link>
            </div>
            <Link activeClass='active' to="contact" smooth={true} duration={500}>
                <button className='desktopMenuBtn'>
                    <img src={contactImg} alt='Chat Image' className='desktopMenuImg' />Contact Me
                </button>
            </Link>
            {/* Use burger menu here */}
            <img src={menu} alt='Logo' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' className='listItem' to="intro" smooth={true} duration={500} spy={true} offset={-100} onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' className='listItem' to="about" smooth={true} duration={500} spy={true} offset={-40} onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' className='listItem' to="skills" smooth={true} duration={500} spy={true} offset={-40} onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' className='listItem' to="work" smooth={true} duration={500} spy={true} offset={-40} onClick={() => setShowMenu(false)}>Work</Link>
                <Link activeClass='active' className='listItem' to="contact" smooth={true} duration={500} spy={true} offset={-40} onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
