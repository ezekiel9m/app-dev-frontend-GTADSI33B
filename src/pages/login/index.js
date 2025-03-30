import React from "react";
import * as S from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  return (
    <S.Container>
      <S.Content>
        <S.H2>LOGIN</S.H2>
        <Input type="text" placeholder="Digite seu usuário" value={""} />
        <Input type="password" placeholder="Digite sua senha" value={""} />
        <Button texto="Entrar" color="#0d6efd"></Button>
      </S.Content>
    </S.Container>
  );
};

export default Login;
