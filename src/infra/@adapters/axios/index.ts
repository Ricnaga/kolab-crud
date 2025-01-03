import { API_URL } from "@application/data/environment";
import axios from "axios";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  cancelToken: axios.CancelToken.source().token,
  timeout: 5000,
});

export default instance;
