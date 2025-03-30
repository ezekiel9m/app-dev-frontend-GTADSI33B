import React from "react";
import * as S from "./styles";

const Input = ({ texto, tipo, placeholder, valor, onChange }) => {
  return (
    <>
      <S.Input
        text={texto}
        value={valor}
        onChange={onChange}
        type={tipo}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
