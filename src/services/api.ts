import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://desafio-carrinho-react.netlify.app/',
  // baseURL: 'http://localhost:3333',
});
