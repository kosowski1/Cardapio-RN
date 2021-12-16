import axios from 'axios';

const api = axios.create({
    baseURL: 'https://61ba767348df2f0017e5aad1.mockapi.io/cardapio'
  });

  export default api;