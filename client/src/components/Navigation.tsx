import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 hero-bg">
      <div>
        <Link to={"/quotes"}>
          <h1 className="text-gray-800">Image</h1>
        </Link>
      </div>
      <div className="columns-3">
        <Link to={"/quotes"}>
          <h1 className="text-gray-800">Home</h1>
        </Link>
        <Link to={"/quotes"}>
          <h1 className="text-gray-800">Examples</h1>
        </Link>
        <Link to={"/quotes"}>
          <h1 className="text-gray-800">Documentation</h1>
        </Link>
      </div>
    </div>
  );
};
