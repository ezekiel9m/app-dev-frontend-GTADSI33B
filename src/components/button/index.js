import React from "react";
import * as S from "./styles";

const Button = ({ tipo = "button", onClick, text, color }) => {
  return (
    <S.Button color={color} onClick={onClick} type={tipo}>
      {text}
    </S.Button>
  );
};

export default Button;
