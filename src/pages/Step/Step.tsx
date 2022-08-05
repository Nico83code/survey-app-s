import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import data from '../../mock/data';
import { Container } from '../General.styled';

import StepContent from './StepContent';

const Step = () => {
  const navigate = useNavigate();
  const { stepNumber } = useParams();
  const [survey, setSurvey] = useState<any>([]);

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
        setSurvey([...survey, answer]);
        navigate(`/steps/${nextStepNumber}`);
        return;
      }

      navigate(`/summary`, {
        state: {
          summary: [...survey, answer],
        },
      });
    },
    [stepNumber, navigate, survey]
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
    <Container>
      <h2>Question: {stepNumber}</h2>

      <StepContent
        {...currentStep}
        onNext={handleNextStep}
        onPrev={handleBack}
      />
    </Container>
  );
};

export default Step;
