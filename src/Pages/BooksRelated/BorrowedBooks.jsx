import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import BorrowongBanner from "./Banners/BorrowongBanner";
import LoadingPage from "../ErrorPages/LoadingPage";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosNormal from "../../Hooks/useAxiosNormal";

const BorrowedBooks = () => {
  const { user } = useAuth()
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const axiosNormal = useAxiosNormal();

  useEffect(() => {
    axiosSecure
      .get(`/borrowing?email=${user?.email}`)
      .then((res) => {
        setBorrowedBooks(res.data);
        setLoading(false);
      });
  }, [axiosSecure, user?.email]);

  // for deleting from borrowing database
  const handleReturn = (bookId) => {
    axiosNormal
      .delete(`/borrowing/${bookId}`)
      .then((res) => {
        console.log("Book returned successfully!", res.data);
        toast.success("Book returned Successfully");
        setBorrowedBooks((prevBooks) =>
          prevBooks.filter((book) => book._id !== bookId)
        );
      })
      .catch((error) => {
        console.error("Error returning book:", error);
        toast.warning("Returned Failed");
      });
  };

  // for adding back to quantity
  const handleInc = (productId) => {
    axiosNormal.put(`/books/inc/${productId}`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      {isLoading ? (
        <LoadingPage></LoadingPage>
      ) : borrowedBooks.length === 0 ? (
        <BorrowongBanner></BorrowongBanner>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Information</th>
              <th>Borrower</th>
              <th>Return Date</th>
              <th>Return</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book) => (
              <tr key={book._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={book.product.image} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="lg:font-bold">{book.product.name}</div>
                      <div className="text-sm opacity-50 hidden lg;block">
                        {book.product.author}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {book.name} <br />
                  {book.email}
                  <br />
                </td>
                <td>{book.date}</td>
                <th>
                  <button
                    className="btn btn-error hover:text-white hover:bg-black border-none"
                    onClick={() => {
                      handleReturn(book._id);
                      handleInc(book.product._id);
                    }}
                  >
                    Return
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </div>
  );
};

export default BorrowedBooks;
