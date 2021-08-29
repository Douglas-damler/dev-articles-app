import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text-container">
                <div>
                    <h3>devArticles <span>is for <span className="gradient">Developers</span></span></h3>
                </div>

                <div className="hero-text">
                    <p>We're passionate about development.
                       Bringing all developers in Africa together through article writing. 
                       Click the button below to start writing and get connected
                    </p>
                </div>

                <div className="button-container">
                    <Link className="button" to="/sign-up">Start Writing</Link>
                </div>
                
            </div>

            
        </div>
    )
}