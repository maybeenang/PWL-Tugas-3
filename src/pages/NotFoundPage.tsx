import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1 className="text-3xl text-slate-950 pb-5 font-medium">
        404 not found
      </h1>
      <p className="text-lg text-slate-600">
        The page you are looking for does not exist.
      </p>
      <Link to={"/"}>
        <h2 className="text-blue-500 hover:text-blue-600">Go back home</h2>
      </Link>
    </>
  );
};

export default NotFoundPage;
