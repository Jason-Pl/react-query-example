import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Quote from "./Quote";

const ReactQueryRefetch = () => {
  const [count, setCount] = useState(0);
  console.log();
  const { data, error, isLoading } = useQuery({
    queryKey: ["getQuote"],
    queryFn: () =>
      axios.get("https://type.fit/api/quotes").then(({ data }) => {
        setCount(count + 1);
        return data;
      }),
    staleTime: 1000,
    refetchInterval: 5000,
  });

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{`An error has occurred: ${error.message}`}</span>;

  return (
    <>
      <h2 className="font-bold text-center">Refetch</h2>
      <div className="w-100 m-5">
        <Quote
          text={data[Math.round(Math.random() * 15)].text}
          author={data[Math.round(Math.random() * 15)].author}
        />
        <span>Render time : {count}</span>
      </div>
    </>
  );
};

export default ReactQueryRefetch;
