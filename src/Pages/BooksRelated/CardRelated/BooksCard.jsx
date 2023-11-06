/* eslint-disable react/prop-types */

import { useContext } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Routes/AuthProvider";

const BooksCard = ({ book }) => {
  const {user} = useContext(AuthContext)
  const { _id, image, name, rating, author, category } = book;
  return (
    <div>
      <div className="card card-compact hover:shadow-xl border">
        <figure>
          <img src={image} alt="Books Cover" className=" p-2 rounded-2xl h-[345px]" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-md">{name}</h2>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xs">{author}</p>
            <p className="text-right font-semibold">{category}</p>
          </div>
          <div className="flex items-center justify-between">
            <Rating
              emptySymbol={<span className="text-black text-3xl">&#9733;</span>}
              fullSymbol={
                <span className="text-green-500 text-3xl">&#9733;</span>
              }
              initialRating={rating}
              readonly
            />
            <p className="text-right mt-2 font-semibold">{rating}</p>
          </div>
          <div className="card-actions justify-end">
            <Link
              to={`/bookdetails/${_id}`}
              className="btn bg-accent w-full border-none hover:text-white hover:bg-black"
            >
              Details
            </Link>
            {
              user && user.email === 'a@gmail.com' &&
              <Link
              to={`/bookupdate/${_id}`}
              className="btn bg-accent w-full border-none hover:text-white hover:bg-black"
            >
              update
            </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
