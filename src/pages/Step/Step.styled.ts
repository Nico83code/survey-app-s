import styled from 'styled-components';

export const StepContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div<{ align: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) =>
    align === 'open_question' ? `center` : `flex-start`};
  width: ${({ align }) => (align === 'open_question' ? `100%` : `auto`)};
`;

export const OpenQuestionInput = styled.input`
  width: 90%;
  height: 40px;
  font-size: 20px;
`;

export const SingleChoiceWrapper = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 20px;
  }
`;

export const SingleChoiceInput = styled.input`
  margin: 8px;
`;

export const StepContentButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
