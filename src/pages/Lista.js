import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

const Lista = () => {
  const navigate = useNavigate();
  const returnToLista = () => {
    navigate("/Home");
  };

  return (
    <div className="container2">
      <div className="tabela">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Número</th>
              <th>CEP</th>
              <th>Número</th>
              <th>E-mail</th>
              <th>Senha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pedro Soeiro</td>
              <td>22</td>
              <td>60416000</td>
              <td>(85)981300575</td>
              <td>joaopedro@grupoavp.com.br</td>
              <td>123456</td>
            </tr>
          </tbody>
        </table>
        <button className="visualizeButton" onClick={returnToLista}>
          Retornar
        </button>
      </div>
    </div>
  );
};

export default Lista;
