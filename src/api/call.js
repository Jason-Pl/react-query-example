import axios from "axios";

const url = "https://type.fit/api/quotes";

export const getQuotes = await axios.get(url).then(({ data }) => data);
