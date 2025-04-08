import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import api from "../services/api";
import validarCep from "../services/regex";
import { PacmanLoader } from "react-spinners";
import "../style.css";
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

  const navigate = useNavigate();
  const goToLista = () => {
    navigate("/lista");
  };
  const goToForm = () => {
    navigate("/");
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
            <div className="areaButton">
              <button className="sendButton">Enviar para banco</button>
            </div>
          </main>
        )}
        <div className="areaInsertButton">
          <button className="visualizeButton" onClick={goToForm}>
            Retornar
          </button>
          <button className="visualizeButton" onClick={goToLista}>
            Verificar dados existentes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buscador;
