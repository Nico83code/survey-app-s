import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  padding: 50px 50px;
  width: 100%;
  max-width: 60%;
  height: 50%;
  h2 {
    font-size: 30px;
    line-height: 1.1em;
  }

  p {
    font-size: 16px;
  }
  button {
    border: 1px solid black;
    border-radius: 6px;
    width: 150px;
    height: 50px;
    font-family: 'Visby Bold', Sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: #051441;

    &:hover {
      background: #102566;
    }

    cursor: pointer;

    margin: 30px 5px;
  }
`;
