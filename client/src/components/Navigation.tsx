import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Link to={"/quotes"}>
        <h1>Spidey Quotes</h1>
      </Link>
      <Link to={"/quote-create"}>create Quote</Link>
    </div>
  );
};
