const validarCep = (cep) => {
    const regex = /^\d{8}/;
    return regex.test(cep); 
  }

export default validarCep;