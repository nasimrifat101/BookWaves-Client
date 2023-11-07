import { useEffect, useState } from "react";
import AllBooksCard from "./CardRelated/AllBooksCard";
import LoadingPage from "../ErrorPages/LoadingPage";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import { ToastContainer, toast } from "react-toastify";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const axiosNormal = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/books").then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, [axiosNormal]);


  const handleDelete = async (id) => {
    try {
      await axiosNormal.delete(`/delete/book/${id}`);
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error(error);
      toast.error(`Book couldn't be deleted`);
    }
  };
  return (
    <div>
      {isLoading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">
          {books.map((book) => (
            <AllBooksCard key={book._id} book={book} onDelete={handleDelete}></AllBooksCard>
          ))}
        </div>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllBooks;
