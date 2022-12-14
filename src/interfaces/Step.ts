type QuestionType = 'open_question' | 'single_choice';

export interface StepOptions {
  value: number | string;
  label: string;
}

export interface Step {
  stepNumber: number;
  question: string;
  type: QuestionType;
  options?: Array<StepOptions>;
}
