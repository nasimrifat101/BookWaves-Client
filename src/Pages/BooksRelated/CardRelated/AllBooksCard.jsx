import PropTypes from 'prop-types';
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AllBooksCard = ({ book }) => {
  const { user } = useAuth();
  const { _id, image, name, rating, author, category } = book;
  return (
    <div>
      <div className="card card-compact hover:shadow-xl border">
        <figure>
          <img src={image} alt="Books Cover" className=" p-2 rounded-2xl h-[345px]" />
        </figure>
        <div className="card-body">
          <h2 className="text-md font-bold">{name}</h2>
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
              className="btn bg-accent w-full hover:text-white hover:bg-black"
            >
              Details
            </Link>
            {user && user.email === `a@gmail.com` && (
              <Link
                to={`/bookupdate/${_id}`}
                className="btn bg-accent w-full hover:text-white hover:bg-black"
              >
                Update Book
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

AllBooksCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};


export default AllBooksCard;
