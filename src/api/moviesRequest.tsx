import axios from "axios";

export const moviesRequest = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=9ac559237f6c8fa925efadb2f02cac4c&language=fr-FR&year=2021";
  try {
    const { data } = await axios.get(url);

    console.log(`data`, data);
    return data.results;
  } catch (error) {
    console.log(`error`, error);
  }
};
