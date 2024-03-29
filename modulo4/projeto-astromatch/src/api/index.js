import axios from "axios";

const baseURL =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-matos-hopper";

const axiosConfig = {
  headers: {
    Authorization: "daniel-matos-hopper",
  },
};

export const getProfile = () =>
  axios
    .get(`${baseURL}/person`, axiosConfig)
    .then((response) => response.data.profile)
    .catch((err) => console.log("acabou profile"));

export const chooseProfile = (personId, choice) => {
  const body = {
    id: personId,
    choice,
  };
  axios
    .post(`${baseURL}/choose-person`, body, axiosConfig)
    .then(() => {})
    .catch((err) => console.log(err));
};

export const getMatches = () =>
  axios
    .get(`${baseURL}/matches`, axiosConfig)
    .then((response) => response.data.matches)
    .catch((err) => []);

export const clearMatches = () => {
  axios
    .put(`${baseURL}/clear`)
    .then((response) => console.log("limpou"))
    .catch((err) => console.log(err));
};
