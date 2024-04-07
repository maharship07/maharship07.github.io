import React from 'react';
import styled from 'styled-components';
import './social.css'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <Container>
            <ul className='socials'>
                <li className='social'>
                    <a className="icon" id='icon1' href="https://www.linkedin.com/in/maharship07" target="_blank" rel="noopener noreferrer">
                        <span>LinkedIn</span> <FaLinkedin size={24} />
                    </a>
                </li>
                <li className='social'>
                    <a className="icon" id='icon2' href="https://github.com/maharship07?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <span>GitHub</span> <FaGithub size={24} />
                    </a>
                </li>
                <li className='social'>
                    <a className="icon" id='icon3' href="mailto:patelm0712@gmail.com" target="_blank" rel="noopener noreferrer">
                        <span>Email</span> <FaEnvelope size={24} />
                    </a>
                </li>
                <li className='social'>
                    <a className="icon" id='icon4' href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <span>Resume</span> <FaFileAlt size={24} />
                    </a>
                </li>
            </ul>
        </Container>
    );
};

const Container = styled.div`
    @media (min-width: 721px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        padding-left: 100px;
    }

    .socials {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .social {
        width: 170px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: -230px;
        transition: margin-left 0.3s ease;
    }

    .social:hover {
        margin-left: -150px;
    }

    .icon {
        display: flex;
        justify-content: flex-end;
        align-items: center; /* Center both icon and text vertically */
        text-decoration: none;
        border-radius: 0.7rem;
        color: #fff;
        background-color: #333;
        width: 100%;
        height: 100%;
        padding: 20px 10px;
    
        span {
            opacity: 0;
            justify-content: space-between;
            transition: opacity 0.3s ease;
            justify-content: center;
            padding: 0 1rem;
        }
    
        &:hover {
            span {
                justify-content: space-between;
                opacity: 1;
            }
        }
    }
    

    #icon1:hover {
        background-color: #0077B5;
        transition: opacity 0.3s ease;
    }
    
    #icon2:hover {
        background-color: #333;
        transition: opacity 0.3s ease;
    }
    
    #icon3:hover {
        background-color: #65c7b8;
        transition: opacity 0.3s ease;
    }
    
    #icon4:hover {
        background-color: #737779;
        transition: opacity 0.3s ease;
    }
`;

export default SocialMedia;
