import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import data from '../../mock/data';

const Step = () => {
  const navigate = useNavigate();
  const { stepNumber } = useParams();

  const currentStep = useMemo(() => {
    const { steps } = data;
    return steps.find((step) => step.stepNumber === Number(stepNumber));
  }, [stepNumber]);

  const handleNextStep = useCallback(
    (answer: any) => {
      const { steps } = data;
      const nextStepNumber = Number(stepNumber) + 1;
      const hasNextStep = steps.find(
        (step) => step.stepNumber === Number(nextStepNumber)
      );

      if (hasNextStep) {
        navigate(`/steps/${nextStepNumber}`);
        return;
      }
    },
    [stepNumber, navigate]
  );

  const handleBack = useCallback(() => navigate(-1), [navigate]);

  if (!currentStep) {
    return (
      <div>
        <h3>Oops! This step does not exist.</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Current step: {stepNumber}</h2>

      <button onClick={handleBack}>Back</button>
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default Step;
