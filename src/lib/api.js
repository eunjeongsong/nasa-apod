import axios from "axios";

export function getAPOD(date = "") {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=C6irKAoCgFh8BNRCFA3X5lt3KoAj1SSYnpGQP8hk&date=${date}`
  );
}
