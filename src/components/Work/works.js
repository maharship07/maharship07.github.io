import React from 'react';
import './works.css';
import Java from '../../assets/java.png';
import { FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id='work'>
            <strong id='title'>Work</strong>
            <div className='projectMessage'>I am currently updating the website to include my recent work. <br/>
            Meanwhile, you can visit my github repository and take a look at my projects.</div>
            <a className="projectLink" id='icon2' href="https://github.com/maharship07/projects" target="_blank">
                <FaGithub size={50} /><span className='project'>GitHub</span>
            </a>
        </section>
    );
};

export default Skills;
