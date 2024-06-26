import React, { useState } from 'react';
import Card from './Card';
import './index.css';

function App() {

    const [step, setStep] = useState(0);

    function nextStep () {
        setStep(step => {
            if (step < tutorialData.length) {
                return step + 1;
            } 
        });
    };

    function prevStep() {
        setStep(step => {
            if (step > 0) {
                return step - 1;
            } 
        });
    };
    
    const tutorialData = [
        { title: 'Dedica moltes hores', description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedocar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.', image: 'time_management.svg', bgColor: '#4DA2A9', index: '1' },
        { title: 'Programa projectes propis', description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte audarà a accelerar el teu aprenentatge.', image: 'programming.svg', bgColor: '#D3D4D9', index: '2' },
        { title: 'Procura descansar', description: 'Descansar bé i desconnectar són vitals. D\'aquesta manera reduiràs l\'estrès i l\'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.', image: 'medi.svg', bgColor: '#FFD167', index: '3' }
    ];

    const currentCardData = tutorialData[step];
    
    return (
        <div>
            <Card {...currentCardData} nextStep={nextStep} prevStep={prevStep} step={step} setStep={setStep} totalSteps={tutorialData.length} />        
        </div>
    );   
}

export default App;