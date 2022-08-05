import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    console.log('Submitted!');
    navigate(`/thankyou`);
  }, [navigate]);

  return (
    <div>
      <h2>Summary</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
        aspernatur minima et quis totam, quisquam magni sit omnis repellendus,
        molestias impedit libero eum fugiat illum velit ratione, mollitia
        consequatur nostrum?
      </p>
      <div>
        <button type='button' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
