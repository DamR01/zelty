import { useLocation } from "react-router-dom";
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

  return (
    <Container>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        width="280px"
        height="350px"
      />
      <ContainerMovieInformation>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>{movie.overview}</MovieDescription>
      </ContainerMovieInformation>
    </Container>
  );
};
