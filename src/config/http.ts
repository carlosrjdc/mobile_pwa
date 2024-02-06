import axios from "axios";

const instance = axios.create({
    baseURL: process.env.URL_RECEBIMENTO,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance