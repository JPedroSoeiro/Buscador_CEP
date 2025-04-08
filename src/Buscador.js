import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import api from "../src/services/api";
import validarCep from "../src/services/regex";
import { PacmanLoader } from "react-spinners";
import "./style.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Buscador() {
  const [input, setInput] = useState("");
  const [cepData, setCepData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!validarCep(input)) {
      setCepData(null);
      Swal.fire({
        title: "Insira um CEP ou verifique se está correto.",
        icon: "error",
        background: "rgb(1, 1, 2)",
        color: "#00ffff",
        confirmButtonText: "Ok",
      });
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      try {
        const response = await api.get(`${input}/json/`);

        if (response.data && response.data.cep) {
          setCepData(response.data);
          setInput("");
        } else {
          Swal.fire({
            title: "CEP não encontrado.",
            icon: "error",
            background: "rgb(1, 1, 2)",
            color: "#00ffff",
          });
          setCepData(null);
        }
      } catch (error) {
        Swal.fire({
          title: "Erro ao buscar dados.",
          icon: "error",
          background: "rgb(1, 1, 2)",
          color: "#00ffff",
        });
        setCepData(null);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="container">
      <div className="formulario2">
        <h1 className="buscador">Buscador</h1>
        <div className="containerInput">
          <input
            type="text"
            placeholder="Digite seu CEP..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="buttonSearch" onClick={handleSearch}>
            <FaSearch size={30} color="#000" />
          </button>
        </div>

        {loading && (
          <div className="loaderContainer">
            <PacmanLoader size={30} color="#36d7b7" loading={loading} />
          </div>
        )}

        {cepData && cepData.cep && (
          <main>
            <h2>CEP: {cepData.cep}</h2>
            <p>
              Rua: {cepData.logradouro}, {cepData.siafi}
            </p>
            <p>Bairro: {cepData.bairro}</p>
            <p>
              Cidade: {cepData.localidade} - {cepData.uf}
            </p>
          </main>
        )}
        <div className="areaInsertButton"></div>
      </div>
    </div>
  );
}

export default Buscador;
