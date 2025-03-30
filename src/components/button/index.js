import React from "react";
import * as S from "./styles";

const Button = ({ tipo = "button", onClick, texto, color }) => {
  return (
    <S.Button color={color} onClick={onClick} type={tipo}>
      {texto}
    </S.Button>
  );
};

export default Button;
