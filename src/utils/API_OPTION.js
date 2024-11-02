import { GEMINI_API } from "./constant";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + GEMINI_API,
  },
};

export default API_OPTIONS;
