import { useEffect, useState } from "react";
import Quote from "./Quote";
import axios from "axios";

const WithoutReactQuery = () => {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then(({ data }) => setQuotes(data));
  }, []);

  if (!quotes) return <span>Loading ...</span>;

  return (
    <div>
      <h2 className="font-bold text-center">WithoutReactQuery</h2>
      <div className="w-100 m-5">
        {quotes?.map((quote, index) => (
          <Quote key={index} text={quote.text} author={quote.author} />
        ))}
      </div>
    </div>
  );
};

export default WithoutReactQuery;
