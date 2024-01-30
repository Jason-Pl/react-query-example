import Quote from "./Quote";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WithReactQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getQuote"],
    queryFn: () =>
      axios.get("https://type.fit/api/quotes").then(({ data }) => data),
    staleTime: Infinity,
  });

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{`An error has occurred: ${error.message}`}</span>;

  return (
    <>
      <h2 className="font-bold text-center">WithReactQuery</h2>
      <div className="w-100 m-5">
        {data?.map((quote, index) => (
          <Quote key={index} text={quote.text} author={quote.author} />
        ))}
      </div>
    </>
  );
};

export default WithReactQuery;
