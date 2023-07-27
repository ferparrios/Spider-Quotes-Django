import { useEffect, useState } from "react";
import { getAllQuotes } from "../api/quote.api";
import { QuoteCard } from "./QuoteCard";

export const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function loadQuotes() {
      const res = await getAllQuotes();
      setQuotes(res.data);
      console.log(res);
    }
    loadQuotes();
  }, []);

  return <QuoteCard data={quotes} />;
};
