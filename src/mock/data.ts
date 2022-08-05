import { Step } from '../interfaces/Step';

interface ResponseData {
  steps: Array<Step>;
}

const data: ResponseData = {
  steps: [
    {
      stepNumber: 1,
      question: 'What is the one thing that we can do better?',
      type: 'open_question',
    },
    {
      stepNumber: 2,
      question: 'Are you overall happy with the result?',
      type: 'single_choice',
      options: [
        { value: 'happy', label: 'Happy' },
        { value: 'average', label: 'Average' },
        { value: 'Not at all', label: 'Not at all' },
      ],
    },
  ],
};

export default data;
