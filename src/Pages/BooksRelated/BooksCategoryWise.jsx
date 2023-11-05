import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import BooksCard from "./CardRelated/BooksCard";
import LoadingPage from "../ErrorPages/LoadingPage";

const BooksCategoryWise = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/book/${category}`).then((res) => {
      setBooks(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, [category]);
  return (
    <div>
      <Navbar></Navbar>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-5">
            {books.map((book) => (
              <BooksCard key={book._id} book={book}></BooksCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksCategoryWise;
