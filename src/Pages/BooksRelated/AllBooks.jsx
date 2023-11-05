import { useEffect, useState } from "react";
import axios from "axios";
import AllBooksCard from "./CardRelated/AllBooksCard";
import LoadingPage from "../ErrorPages/LoadingPage";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {isLoading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">
          {books.map((book) => (
            <AllBooksCard key={book._id} book={book}></AllBooksCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
