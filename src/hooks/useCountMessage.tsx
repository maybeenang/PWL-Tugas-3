import axios from "axios";
import useSWR from "swr";

const useCountMessage = () => {
  const fethcer = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    "https://sheetdb.io/api/v1/gi981254bw7lm/count",
    fethcer
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useCountMessage;
