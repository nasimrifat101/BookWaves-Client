import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className=" min-h-screen">
        <h1 className="text-[330px] text-center font-bold">404</h1>
        <p className="font-bebas text-3xl text-center -mt-20">
          page not found
        </p>
        <p className="text-center font-semibold text-green-300">
          Go{" "}
          <span className="underline">
            <Link to="/">Home</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
