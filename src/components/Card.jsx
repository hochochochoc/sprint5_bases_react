import React, { useState } from 'react';
import Indicator from './Indicator';

const Card = ({ title, description, image, nextStep, prevStep, bgColor, step, setStep, totalSteps }) => {
    
    const [animation, setAnimation] = useState("");

    const handleNext = () => {
        setAnimation("animate__fadeOutLeft");
        setTimeout(() => {
            nextStep();
            setAnimation("animate__fadeInRight");
        }, 500);
    };

    const handlePrev = () => {
        setAnimation("animate__fadeOutRight");
        setTimeout(() => {
            prevStep();
            setAnimation("animate__fadeInLeft");
        }, 500);
    };
    
    
    
    
    return (
        <div>
            <div className="image-container" style={{ backgroundColor: bgColor }}>
                <img className={`image animate__animated ${animation}`} src={image} alt={title} />
            </div>
            <div className='textainer'>
                <h2 className='headline'>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="container">
                <Indicator steps={totalSteps} currentStep={step} setStep={setStep} />
                {step > 0 && (
                    <button className="prev-button" onClick={handlePrev}>
                        <svg className='prev-button-svg' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                        </svg>
                    </button>
                )}
                {step < totalSteps - 1 && (
                    <button onClick={handleNext}>
                        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;