import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

const Cadastrar = () => {
  const navigate = useNavigate();
  const [dados, setDados] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (!dados) return;

      // Busca a lista de usuários no localStorage
      const localStorageUsuario = localStorage.getItem("dadosUsuarios");

      // Converte a string JSON em array ou inicializa como array vazio
      const dadosUsuarios = localStorageUsuario
        ? JSON.parse(localStorageUsuario)
        : [];

      // Adiciona novo usuário na lista
      dadosUsuarios.push(dados);

      // Salva todos os usuários no localStorage
      localStorage.setItem("dadosUsuarios", JSON.stringify(dadosUsuarios));

      // Exibe alerta de sucesso
      alert("Cadastro realizado com sucesso!");

      // Redireciona para a tela de login
      navigate("/login/");
    } catch (err) {
      console.error("Erro ao salvar dados:", err);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.H2>Cadastro de Usuário</S.H2>
        <S.Label>Nome</S.Label>
        <Input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />

        <S.Label>Sobrenome</S.Label>
        <Input
          type="text"
          name="sobrenome"
          value={dados.sobrenome}
          onChange={handleChange}
        />

        <S.Label>E-mail</S.Label>
        <Input
          type="text"
          name="email"
          value={dados.email}
          onChange={handleChange}
        />

        <S.Label>Senha</S.Label>
        <Input
          type="password"
          name="senha"
          value={dados.senha}
          onChange={handleChange}
        />

        <S.ButtonGroup>
          <Button onClick={""} text="Limpar" color="#888" />
          <Button onClick={handleSave} text="Salvar" color="#198754" />
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Cadastrar;
