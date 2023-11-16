import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { MovieQuery } from "../App";

export interface FetchMoviesResponse {
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  original_title: string;
  original_language: string;
  poster_path: string;
  backdrop_path: string;
  adult: boolean;
  vote_average: number;
  genre_ids: number[];
}

const useMovies = ({ genre, sortOrder, orderBy, searchText }: MovieQuery) => {
  const sort = `${orderBy}.${sortOrder}`;
  const requestConfig: AxiosRequestConfig = {
    params: !!searchText
      ? {
          query: searchText,
        }
      : {
          with_genres: genre?.id,
          sort_by: sort,
        },
  };

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const endpoint = !!searchText ? "/search/movie" : "/discover/movie";
    setLoading(true);
    apiClient
      .get<FetchMoviesResponse>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then(({ data }) => {
        console.log("movies", data.results);
        setMovies(data.results);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setMovies([]);
        setError((err as AxiosError).message);
      })
      .finally(() => setTimeout(() => setLoading(false), 2000));

    return () => controller.abort();
  }, [genre, searchText, sortOrder, orderBy]);

  return { movies, error, isLoading };
};

export default useMovies;
