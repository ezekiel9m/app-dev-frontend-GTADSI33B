import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

const Cadastrar = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleCadastar = async () => {
    if (!email || !senha) {
      setErro("Informe usuário e senha.");
      return;
    }
    try {
      
      const usuario = localStorage.getItem("usuario");

      if (usuario.email === email && usuario.senha === senha) {
        return;
      } else {
        setErro("Usuário ou senha invádio");
      }
    } catch (err) {
      setErro("Erro ao fazer login. Tente novamente.");
    }
  };
  return (
    <S.Container>
      <S.Content>
        <S.H2>LOGIN</S.H2>
        <Input
          type="text"
          placeholder="Digite seu usuário"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErro("");
          }}
        />
        <Input
          type={"password"}
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setErro("");
          }}
        />

        {erro && <S.LabelError>{erro}</S.LabelError>}

        <S.ButtonGroup>
          <Button onClick={handleLogin} texto="Entrar" color="#0d6efd"></Button>
          <Button onClick={() => navigate('/cadastrar')} texto="Cadastrar" color="#666"></Button>
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Login;
