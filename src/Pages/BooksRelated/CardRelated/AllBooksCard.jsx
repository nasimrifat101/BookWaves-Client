/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const AllBooksCard = ({ book, onDelete }) => {
  const { user } = useAuth();
  const { _id, image, name, rating, author, category, quantity } = book;

  const handleDeleteClick = () => {
    Swal.fire({
      title: "Do you want to delete this book?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(_id); // Call the onDelete function passed from the parent component
        Swal.fire("Deleted!", "The book has been deleted.", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancelled", "The book deletion has been cancelled.", "info");
      }
    });
  };

  return (
    <div>
      <div className="card card-compact hover:shadow-xl border">
        <figure>
          <img
            src={image}
            alt="Books Cover"
            className=" p-2 rounded-2xl lg:h-[345px]"
          />
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
            {quantity < 1 ? (
              <Link className="btn btn-disabled w-full">Not Available</Link>
            ) : (
              <Link
                to={`/bookdetails/${_id}`}
                className="btn bg-accent w-full hover:text-white hover:bg-black"
              >
                Details
              </Link>
            )}
            {user && user.email === `a@gmail.com` && (
              <Link
                to={`/bookupdate/${_id}`}
                className="btn bg-accent w-full hover:text-white hover:bg-black"
              >
                Update Book
              </Link>
            )}
            {user && user.email === `a@gmail.com` && (
              <Link
                onClick={handleDeleteClick}
                className="btn bg-error w-full hover:text-white hover:bg-black"
              >
                Delete Book
              </Link>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
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
