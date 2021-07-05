import { useCallback, useState } from "react";
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

export const MovieView = () => {
  const location = useLocation<any>();

  const movie = location.state?.pass;

  const [movieLiked, setMovieLiked] = useState(false);

  const handleClick = useCallback(() => {
    setMovieLiked(!movieLiked);
  }, [movieLiked]);

  return (
    <Container>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        width="280px"
        height="350px"
      />
      <FontAwesomeIcon
        icon={faHeart}
        size="2x"
        style={{
          color: movieLiked ? "red" : "white",
          position: "absolute",
          top: "14%",
          left: "57%",
          cursor: "pointer",
        }}
        onClick={() => handleClick()}
      />
      <ContainerMovieInformation>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>{movie.overview}</MovieDescription>
      </ContainerMovieInformation>
    </Container>
  );
};
