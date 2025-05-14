import React, { useState } from "react";
import * as S from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");


  const handleLogin = () => {
    if (!email || !senha) {
      alert("Informe o email e a senha.");
      return;
    }

    try {
      // criaao do objeto 
      const payload = {
        email: "exemplo@gmail.com",
        senha: "1234",
      };

      // Converte o objeto JSON para string e aalva no localStorage (simulando cadastro)
      localStorage.setItem("usuario", JSON.stringify(payload));

      // Ler do localStorage
      const localStorageUsuario = localStorage.getItem("usuario");

      // verificaao do objeto - essa linha pergunta se o objeto é vazia, caso seja quero dizer que nao existe usuário na base.
      if (!localStorageUsuario) {
        setErro("Nenhum usuário encontrado.");
        return;
      }

      // essa linha converte string para JSON
      const usuario = JSON.parse(localStorageUsuario);

      // compara usuario logado com os ususários da base
      if (usuario.email === email && usuario.senha === senha) {
        alert("Login realizado com sucesso!");

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
            setErro("");
          }}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setErro("");
          }}
        />
        {erro && <S.LabelError>{erro}</S.LabelError>}
        <S.ButtonGroup>
          <Button onClick={handleLogin} texto="Entrar" color="#0d6efd" />
          <Button texto="Cadastrar" color="#666" />
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Login;
