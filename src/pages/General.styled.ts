import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  padding: 50px 20px;
  width: 60%;
  height: 40%;

  p {
    font-size: 20px;
  }
  button {
    border: 1px solid black;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    font-weight: bold;
    color: black;

    cursor: pointer;
    padding: 10px 5px;
    margin: 30px 5px;
  }
`;
