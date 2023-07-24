import axios from "axios";

export const getAllQuotes = () => {
  return axios.get("http://127.0.0.1:8000/quotes/api/v1/quote/");
};
