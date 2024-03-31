import React from 'react'
import './intro.css'
// TODO - Change the image
import bg from '../../assets/profilename.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm
                    <span className='introName'> Maharshi</span><br />
                    Full Stack Developer
                </span>
                <hr className='horizontalLine'></hr>
                <p className='para'>I am passionate about all aspects of software development. It inspires me to craft intuitive user interfaces and build robust back-end systems. Currently, I am focused on building responsive web applications.</p>
            </div>
            <img src={bg} alt='Profile Image' className='bg'/>
        </section>
    )
}

export default Intro;