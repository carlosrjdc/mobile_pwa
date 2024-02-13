import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.4:4000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar", Accept: "application/json",  },
});

export default instance;
