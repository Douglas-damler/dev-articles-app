import React from 'react';
import './About.css';
import ceoImage from '../../../images/CEO-IMG.jpg'

export const About = () => {
    return (
        <div className="about-container">

            <div className="heading">
                <h1>
                    We're are buildig a community of developers in Africa through
                    article writing.
                </h1>
            </div>

            
            <div className="mission-vision">
        
                <div className="mission">
                    <h3>Mission</h3>
                    <p>To achieve excellence in hookup thourgh inspiration and motivation
                        to all the developers in Africa
                    </p>
                </div>

                <div className="vision">
                    <h3>Vission</h3>
                    <p>To achieve excellence in hookup thourgh inspiration and motivation
                        to all the developers in Africa</p>
                </div>

            </div>

            <div className="our-team-container">
                <h1>Our Team</h1>
                <div className="column">
                    <div className="card">
                        
                       <div className="titlee-container">
                           <h4>DOUGLAS KATHURIMA</h4>
                           <p className="employee-title">CEO &amp; Founder</p>
                           <p>douglasdamler@gmail.com</p>
                           <p><button className="employee-button">Follow</button></p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}