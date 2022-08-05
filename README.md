# Getting Started

# installation

First run

### `yarn install`

# run survey app

In the project directory, you can run `yarn start` to start the app

# add extra questions/steps

in the folder mock you will find a file data.ts
the steps are defined in an array of objects.

in this array you can add 2 kind of questions,

- open_question
- single_choice

example:
{
stepNumber: 1,
question: "Question one?",
type: "open_question",
},
{
stepNumber: 2,
question: "what is your favourite color?",
type: "single_choice",
options: [
{ value: "red", label: "Red" },
{ value: "white", label: "White" },
{ value: "blue", label: "Blue" },
],
},
{
stepNumber: 3,
question: "Question three?",
type: "open_question",
},
}

After the last step it will show the summary page with all the answers before you submit
