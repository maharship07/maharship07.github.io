import React from 'react';
import './mobsocial.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const MobSocials = () => {
    return (
        <ul className='mobSocials'>
            <li className='socialMenu'>
                <a className="listMenuIcon" id='icon1' href="https://www.linkedin.com/in/maharship07" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} style={{ color: '#0077B5' }} />
                </a>
            </li>
            <li className='socialMenu'>
                <a className="listMenuIcon" id='icon2' href="https://github.com/maharship07?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
            </li>
            <li className='socialMenu'>
                <a className="listMenuIcon" id='icon3' href="mailto:patelm0712@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={24} style={{ color: '#65c7b8' }} />
                </a>
            </li>
            <li className='socialMenu'>
                <a className="listMenuIcon" id='icon4' href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FaFileAlt size={24} style={{ color: '#737779' }} />
                </a>
            </li>
        </ul>
    );
}

export default MobSocials;
