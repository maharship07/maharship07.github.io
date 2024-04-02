import React from 'react';
import './skills.css';
import Java from '../../assets/java.png';
import Python from '../../assets/python.png';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactJS from '../../assets/react.png';
import SQL from '../../assets/sql.png';
import AWS from '../../assets/aws.png';

const Skills = () => {
    return (
        <section id='skills'>
            <strong id='title'>Skills</strong>
            <div className='skillColumns'>
                <span className='skill'>
                    <img src={Java} alt='Java icon' className='icons' />
                    <span>
                        <p className='skillName'>Java</p>
                    </span>
                </span>
                <span className='skill'>
                    <img src={Python} alt='Python icon' className='icons' />
                    <span>
                        <p className='skillName'>Python</p>
                    </span>
                </span>
                <span className='skill'>
                    <img src={SQL} alt='SQL icon' className='icons' />
                    <span>
                        <p className='skillName'>SQL</p>
                    </span>
                </span>
                <span className='skill'>
                    <img src={HTML} alt='HTML icon' className='icons' />
                    <span>
                        <p className='skillName'>HTML</p>
                    </span>
                </span>
            </div>
            <div className='skillColumns'>
                <span className='skill'>
                    <img src={CSS} alt='CSS icon' className='icons' />
                    <span>
                        <p className='skillName'>CSS</p>
                    </span>
                </span>
                <span className='skill'>
                    <img src={JavaScript} alt='JavaScript icon' className='icons' />
                    <span>
                        <p className='skillName'>JavaScript</p>
                    </span>
                </span>
                <span className='skill'>
                    <img src={ReactJS} alt='React.js icon' className='icons' />
                    <span>
                        <p className='skillName'>React</p>
                    </span>
                </span>
                <span className='skill'>
                    <img src={AWS} alt='AWS icon' className='icons' />
                    <span>
                        <p className='skillName'>AWS</p>
                    </span>
                </span>
            </div>
        </section>
    );
};

export default Skills;
