import "./App.css";
import { moviesRequest } from "./api/moviesRequest";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";

export const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const films = await moviesRequest();
    setMovies(films);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <Header />;
};
