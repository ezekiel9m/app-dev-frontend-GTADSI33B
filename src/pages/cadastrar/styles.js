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
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #000;
  font-weight: bold;
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

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;