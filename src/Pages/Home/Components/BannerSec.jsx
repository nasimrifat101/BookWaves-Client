import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const BannerSec = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2">
      <div>
        <img
          src="https://i.postimg.cc/ZK7Tdsbj/6736905.jpg"
          className="w-full"
        />
      </div>
      <div>
        <h1 className=" text-2xl mx-3 lg:mx-0 lg:text-5xl font-bold my-10 border-l-4 rounded-2xl pl-2 border-green-200">
          Become a <span className="text-green-400">member</span> today.
        </h1>
        <ol className="list-disc px-10 space-y-3">
          <li>Access to a Vast Collection</li>
          <li>Unlimited Reading</li>
          <li>Virtual Reading Rooms</li>
          <li>Personalized Recommendation</li>
          <li>Interactive Features</li>
          <li>Exclusive Preview</li>
          <li>Reading Challenges</li>
          <li>Kids and Family Friendly</li>
        </ol>
        {user ? (
          ""
        ) : (
          <Link to="/signup">
            <button className="btn btn-ghost bg-green-300 text-black my-5 w-full">
              SignUp Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BannerSec;
