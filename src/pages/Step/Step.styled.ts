import styled from 'styled-components';

export const StepContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OpenQuestionInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
`;

export const SingleChoiceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 38%;
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
  margin: 20px;
`;
