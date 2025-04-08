import React, { useState } from "react";
import Input from "../services/inputForm";
import { useNavigate } from "react-router-dom";
import "../style.css";
import "../input.css";

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    NAME: "",
    NUMBER: "",
    PROFILE_ID: 0,
    EMAIL: "",
    URL_IMAGE: "",
    PASSWORD: "",
    FOUNDATION_DATE: "",
    MEETING_DAY: "",
    MEETING_TIME: "",
    PHONE: "",
    CNPJ: "",
    JURISDICTION: "",
    STREET: "",
    ADDRESS_NUMBER: "",
    COMPLEMENT: "",
    UF: "",
    CITY: "",
    ZIP_CODE: "",
    NEIGHBORHOOD: "",
    REPONSIBLE_NAME: "",
    REPONSIBLE_DEGREE: "",
    REPONSIBLE_EMAIL: "",
    REPONSIBLE_PHONE: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const goToLista = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.veneravelmestre.com.br/create-confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Sucesso:", data))
      .catch((error) => console.error("Erro:", error));
  };

  return (
    <div className="container">
      <div className="formulario">
        <form className="containerInfo" onSubmit={handleSubmit}>
          <div className="division1">
            <Input
              label="Nome"
              name="NAME"
              value={formData.NAME}
              onChange={handleChange}
              required
            />
            <Input
              label="Número"
              name="NUMBER"
              value={formData.NUMBER}
              onChange={handleChange}
              required
            />
            <Input
              label="ID do Perfil"
              name="PROFILE_ID"
              type="number"
              value={formData.PROFILE_ID}
              onChange={handleChange}
              required
            />
            <Input
              label="E-mail"
              name="EMAIL"
              type="email"
              value={formData.EMAIL}
              onChange={handleChange}
              required
            />
            <Input
              label="Telefone"
              name="PHONE"
              type="tel"
              value={formData.PHONE}
              onChange={handleChange}
              required
            />
            <Input
              label="CNPJ"
              name="CNPJ"
              value={formData.CNPJ}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className="division2">
            <Input
              label="CEP"
              name="ZIP_CODE"
              value={formData.ZIP_CODE}
              onChange={handleChange}
              required
            />
            <Input
              label="Rua"
              name="STREET"
              value={formData.STREET}
              onChange={handleChange}
              required
            />
            <Input
              label="Número do Endereço"
              name="ADDRESS_NUMBER"
              value={formData.ADDRESS_NUMBER}
              onChange={handleChange}
              required
            />
            <Input
              label="Complemento"
              name="COMPLEMENT"
              value={formData.COMPLEMENT}
              onChange={handleChange}
              required
            />
            <Input
              label="UF"
              name="UF"
              value={formData.UF}
              onChange={handleChange}
              required
            />
            <Input
              label="Cidade"
              name="CITY"
              value={formData.CITY}
              onChange={handleChange}
              required
            />
            <Input
              label="Bairro"
              name="NEIGHBORHOOD"
              value={formData.NEIGHBORHOOD}
              onChange={handleChange}
              required
            />
            <Input
              label="Jurisdição"
              name="JURISDICTION"
              value={formData.JURISDICTION}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className="division3">
            <Input
              label="URL da Imagem"
              name="URL_IMAGE"
              type="url"
              value={formData.URL_IMAGE}
              onChange={handleChange}
              required
            />
            <Input
              label="Senha"
              name="PASSWORD"
              type="password"
              value={formData.PASSWORD}
              onChange={handleChange}
              required
            />
            <Input
              label="Data de Fundação"
              name="FOUNDATION_DATE"
              type="datetime-local"
              value={formData.FOUNDATION_DATE}
              onChange={handleChange}
              required
            />
            <Input
              label="Dia da Reunião"
              name="MEETING_DAY"
              value={formData.MEETING_DAY}
              onChange={handleChange}
              required
            />
            <Input
              label="Hora da Reunião"
              name="MEETING_TIME"
              type="time"
              value={formData.MEETING_TIME}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className="division4">
            <Input
              label="Nome do Responsável"
              name="REPONSIBLE_NAME"
              value={formData.REPONSIBLE_NAME}
              onChange={handleChange}
              required
            />
            <Input
              label="Grau do Responsável"
              name="REPONSIBLE_DEGREE"
              value={formData.REPONSIBLE_DEGREE}
              onChange={handleChange}
              required
            />
            <Input
              label="E-mail do Responsável"
              name="REPONSIBLE_EMAIL"
              type="email"
              value={formData.REPONSIBLE_EMAIL}
              onChange={handleChange}
              required
            />
            <Input
              label="Telefone do Responsável"
              name="REPONSIBLE_PHONE"
              type="tel"
              value={formData.REPONSIBLE_PHONE}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <form onSubmit={handleSubmit}>
          <div className="org2">
            <button className="visualizeButton" onClick={goToLista}>
              Verificar dados existentes
            </button>
            <button type="submit" className="visualizeButton">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
