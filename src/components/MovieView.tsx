import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Image,
  ContainerMovieInformation,
  MovieTitle,
  MovieDescription,
} from "./MovieView.style";
import { addToFav, removeFromFav } from "../redux/actions";
import { MovieProps } from "../utils/types";

export const MovieView = () => {
  const location = useLocation<any>();
  const dispatch = useDispatch();

  const movie = location.state?.pass;

  const [movieLiked, setMovieLiked] = useState(false);

  const likedMovie = (film: MovieProps) => {
    setMovieLiked(!movieLiked);
    dispatch(addToFav(film));
  };

  const dislikedMovie = (film: MovieProps) => {
    setMovieLiked(!movieLiked);
    dispatch(removeFromFav(film));
  };

  const displayFav = !movieLiked ? (
    <FontAwesomeIcon
      icon={faHeart}
      size="2x"
      style={{
        color: "white",
        position: "absolute",
        top: "14%",
        left: "57%",
        cursor: "pointer",
      }}
      onClick={() => likedMovie(movie)}
    />
  ) : (
    <FontAwesomeIcon
      icon={faHeart}
      size="2x"
      style={{
        color: "red",
        position: "absolute",
        top: "14%",
        left: "57%",
        cursor: "pointer",
      }}
      onClick={() => dislikedMovie(movie)}
    />
  );

  return (
    <Container>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        width="280px"
        height="350px"
      />
      {displayFav}
      <ContainerMovieInformation>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>{movie.overview}</MovieDescription>
      </ContainerMovieInformation>
    </Container>
  );
};
