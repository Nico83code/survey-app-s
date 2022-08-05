import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../General.styled';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = useCallback(() => {
    navigate('/steps/1');
  }, [navigate]);

  return (
    <Container>
      <h2>Hey There! and Welcome</h2>
      <p>We're doing some research to improve our service,</p>
      <p>
        The survey shoud only take 1 minutes - your feedback is appreciated.
      </p>

      <button type='button' onClick={handleStart}>
        Start
      </button>
    </Container>
  );
};

export default Home;
