import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import api from "./services/api";
import validarCep from './services/regex';
import './style.css';
import Swal from 'sweetalert2';

function App() {

const [input, setInput] = useState('')
const [cepData, setCepData] = useState(null);

async function handleSearch(){
  
  if(!validarCep(input)){
    Swal.fire({
      title: 'Insira um CEP ou verifique se está correto.',
      icon: 'error',
    });
    setCepData(null);
    return;
  }

  try {
    const response = await api.get(`${input}/json/`);
    setCepData(response.data);
    setInput('');

  }catch(error){
    alert("Erro ao buscar dados");
    setInput('');
    setCepData(null)
  }

}

  return (
    <div className="container">

      <div className="formulario">
        <h1 className="buscador">Buscador</h1>
        <div className="containerInput">
          <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button className="buttonSearch" onClick={handleSearch}>
            <FaSearch size={30} color="#000"/>
          </button>
        </div>


        {cepData && (
          <main>
            <h2>CEP: {cepData.cep}</h2>
            <p>Rua: {cepData.logradouro}, {cepData.siafi}</p>
            <p>Bairro: {cepData.bairro}</p>
            <p>Cidade: {cepData.localidade} - {cepData.uf}</p>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;

