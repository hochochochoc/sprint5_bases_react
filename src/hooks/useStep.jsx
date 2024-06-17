import { useState } from 'react';

const useStep = (initialStep = 0, maxSteps) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => {
    setStep((step) => (step < maxSteps ? step + 1 : step));
  };

  const prevStep = () => {
    setStep((step) => (step > 0 ? step - 1 : step));
  };

  return { step, setStep, nextStep, prevStep };
};

export default useStep;