import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  width: 100%;
  background-color: ${(props) => props.color || "#0d6efd"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

