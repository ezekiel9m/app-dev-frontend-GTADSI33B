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
      if (dados) {
        localStorage.setItem("usuarios", JSON.stringify(dados));
        alert("Cadastro realizado com sucesso!");
        navigate("/login/");
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
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
          <Button
            onClick={''}
            text="Limpar"
            color="#888"
          />
          <Button onClick={handleSave} text="Salvar" color="#198754" />
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Cadastrar;