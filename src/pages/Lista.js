import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

const Lista = () => {
  const navigate = useNavigate();
  const returnToLista = () => {
    navigate("/buscador");
  };

  return (
    <div className="container2">
      <div className="tabela">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Cidade</th>
              <th>Cidade</th>
              <th>Cidade</th>
              <th>Cidade</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maria</td>
              <td>28</td>
              <td>São Paulo</td>
              <td>São Paulo</td>
              <td>São Paulo</td>
              <td>São Paulo</td>
              <td>São Paulo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="visualizeButton" onClick={returnToLista}>
        Retornar
      </button>
    </div>
  );
};

export default Lista;
