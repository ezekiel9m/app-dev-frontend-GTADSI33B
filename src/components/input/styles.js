import styled from "styled-components";

export const Input = styled.input`
    padding: 10px 15px;
    width: 100%;
    border-radius: 8px; 
    font-size: 16px;
    background-color: #f4f4f4;
    border: 1px solid #f8f9fa;
    max-width: 400px;
    transition: border-color 0.2s ease-in-out;
    margin-bottom: 10px;

    &:focus {
        border-color: #0d6efd; 
    }
`;
