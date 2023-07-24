import React from "react";

interface QuoteCardProps {
  data: any;
}

export const QuoteCard = ({ data }: QuoteCardProps) => {
  return (
    <div className="grid grid-cols-3">
      {data.map((quote: any) => (
        <div key={quote.id} className="bg-zinc-800 p-3 hover:bg-zinc-700">
          <h1 className="font-bold">{quote.quote}</h1>
          <h2>{quote.author}</h2>
          <h3>{quote.source}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};
