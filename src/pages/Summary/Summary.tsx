import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Container } from '../General.styled';
import { SummaryAnswer } from './Summary.styled';

const Summary = () => {
  const { state } = useLocation();
  const { summary }: any = state || {};
  const navigate = useNavigate();

  // eslint-disable-next-line array-callback-return
  const showResult = summary.map((data: any, index: number) => {
    if (data.type === 'open_question')
      return <SummaryAnswer key={index}>{data.answer}</SummaryAnswer>;

    if (data.type === 'single_choice')
      return <SummaryAnswer key={index}>{data.answer.value}</SummaryAnswer>;
  });

  const handleSubmit = useCallback(() => {
    console.log(summary, 'submitted');
    navigate(`/thankyou`);
  }, [navigate, summary]);

  return (
    <Container>
      <h2>Summary</h2>
      <p>You answers are:</p>
      <div>{showResult}</div>
      <div>
        <button type='button' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Container>
  );
};

export default Summary;
