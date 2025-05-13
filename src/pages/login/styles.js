import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  background-color: #e0e0e0;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  color: #000;

  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  color: #000;
  justify-content: center;
  flex-direction: column;
`;
export const LabelError = styled.label`
    font-size: 18px;
    color: red;
    background-color: #fff;   
    padding: 10px;   
    border-radius: 5px;
    display: flex;   
    align-items: center;
    justify-content: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 20px;
`;

