import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

interface FetchResponse<T> {
  genres: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then(({ data }) => {
        setData(data.genres);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setData([]);
        setError((err as AxiosError).message);
      })
      .finally(() => setTimeout(() => setLoading(false), 2000));

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
