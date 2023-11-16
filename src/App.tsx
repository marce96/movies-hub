import "./App.css";
import { Grid, GridItem, Show, Spacer } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MoviesGrid from "./components/MoviesGrid";
import GenreList from "./components/GenreList";
import useGenres, { Genre } from "./hooks/useGenres";
import { useState } from "react";
import SortSelector from "./components/SortSelector";
import MovieHeading from "./components/MovieHeading";

export interface MovieQuery {
  genre: Genre | null;
  sortOrder: string;
  orderBy: string;
  searchText: string;
  disableSort: boolean;
}
function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({
    genre: null,
    sortOrder: "desc",
    orderBy: "popularity",
    searchText: "",
    disableSort: false,
  });

  const heading = movieQuery.genre?.name;

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            searchText={movieQuery.searchText}
            onSearch={(search) =>
              setMovieQuery({
                ...movieQuery,
                genre: null,
                searchText: search,
                disableSort: !movieQuery.searchText,
              })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" marginTop={3} paddingX="5px">
            <GenreList
              onSelectGenre={(genre) =>
                setMovieQuery({
                  ...movieQuery,
                  genre: genre,
                  searchText: "",
                  disableSort: false,
                })
              }
              selectedGenre={movieQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <SortSelector
            disableSort={movieQuery.disableSort}
            selectedSortOrder={movieQuery.sortOrder}
            selectedSortBy={movieQuery.orderBy}
            onSelectedOrderBy={(order) => {
              setMovieQuery({
                ...movieQuery,
                sortOrder: order,
                searchText: "",
                disableSort: false,
              });
            }}
            onSelectedSort={(sort) => {
              setMovieQuery({
                ...movieQuery,
                orderBy: sort,
                searchText: "",
                disableSort: false,
              });
            }}
          />
          {!!heading && <MovieHeading heading={heading} />}
          <MoviesGrid movieQuery={movieQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
