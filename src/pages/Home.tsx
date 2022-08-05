import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = useCallback(() => {
    navigate('/steps/1');
  }, [navigate]);

  return (
    <div>
      <h1>Welcome</h1>
      <h3>Hey There! and Welcome</h3>
      <p>
        We're doing some research to improve our service, The survey shoud only
        take 1 minutes - your feedback is appreciated.
      </p>

      <button type='button' onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Home;
