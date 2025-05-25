import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha) {
      alert("Infrome email e senha.");
      return;
    }
    try {
      // ler os dados do banco de dados
      const localStorageUsuario = localStorage.getItem("dadosUsuarios");

      // verificaao do objeto - essa linha pergunta se o objeto é vazia, caso seja quero dizer que nao existe usuário na base.
      if (!localStorageUsuario) {
        setErro("Nenhum usuário encontrado.");
        return;
      }

      // converter os dados para JSON
      const usuarios = JSON.parse(localStorageUsuario);

      // Procura o usuário com email e senha correspondentes
      const usuarioEncontrado = usuarios.find(function(usuario) {
          return usuario.email === email && usuario.senha === senha;
      });

      if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
        navigate('/home/');
      } else {
        setErro("Usuário ou senha inválido");
      }
    } catch (erro) {
      setErro(`Erro ao fazer login. Tente novamente mais tarde. ${erro}`);
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
          }}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        {erro && <S.LabelError>{erro}</S.LabelError>}
        <S.ButtonGroup>
          <Button onClick={handleLogin} text="Entrar" color="#0d6efd"></Button>
          <Button
            text="Cadastrar"
            color="#666"
            onClick={() => navigate("/cadastrar/")}
          ></Button>
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Login;
