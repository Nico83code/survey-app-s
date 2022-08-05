import { FC, useState } from 'react';

import { Step } from '../../interfaces/Step';
import {
  InputWrapper,
  OpenQuestionInput,
  SingleChoiceInput,
  SingleChoiceWrapper,
  StepContentButtonWrapper,
  StepContentContainer,
} from './Step.styled';

interface StepContentProps extends Step {
  onNext: (answer: any) => void;
  onPrev: () => void;
}

const StepContent: FC<StepContentProps> = ({
  type,
  question,
  options,
  stepNumber,
  onNext,
  onPrev,
}) => {
  const [answer, setAnswer] = useState<any>('');

  const handleNextStep = () => {
    if (!answer) {
      window.confirm('Hey! Choose an answer!');
      return;
    }

    onNext({ stepNumber, type, answer });

    setAnswer('');
  };

  return (
    <StepContentContainer>
      <h2>{question}</h2>
      <InputWrapper align={type}>
        {type === 'open_question' && (
          <OpenQuestionInput
            type='text'
            placeholder='Type your answer here'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        )}

        {type === 'single_choice' &&
          options &&
          options.map((option) => {
            const { label, value } = option;
            return (
              <SingleChoiceWrapper key={value}>
                <SingleChoiceInput
                  id={label}
                  type='radio'
                  name='option'
                  value={value}
                  onChange={() => setAnswer(option)}
                />
                <label htmlFor={label}>{label}</label>
              </SingleChoiceWrapper>
            );
          })}
      </InputWrapper>
      <StepContentButtonWrapper>
        <button type='button' onClick={onPrev}>
          Back
        </button>
        <button type='button' onClick={handleNextStep}>
          Next
        </button>
      </StepContentButtonWrapper>
    </StepContentContainer>
  );
};

export default StepContent;
