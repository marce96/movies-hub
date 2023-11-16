import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MoviesCard from "./MoviesCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}
const MoviesGrid = ({ movieQuery }: Props) => {
  const { movies, error, isLoading } = useMovies(movieQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;
  if (!isLoading && !movies.length) return <p>No movies found.</p>;
  if (isLoading)
    return (
      <>
        {skeletons.map((x) => (
          <MovieCardContainer key={x}>
            <MovieCardSkeleton />
          </MovieCardContainer>
        ))}
      </>
    );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={10}>
      {movies.map((movie) => (
        <MovieCardContainer key={movie.id}>
          <MoviesCard movie={movie} />
        </MovieCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default MoviesGrid;
